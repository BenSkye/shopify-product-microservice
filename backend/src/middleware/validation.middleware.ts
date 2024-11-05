import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { IProductDTO } from '../interfaces/product.interface';

const productSchema = Joi.object<IProductDTO>({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.string().required(),
  image: Joi.string().uri().required(),
  sku: Joi.string().optional(),
  barcode: Joi.string().optional(),
  weight: Joi.number().min(0).optional(),
  inventory_quantity: Joi.number().min(0).optional(),
  product_type: Joi.string().optional(),
  vendor: Joi.string().optional(),
  tags: Joi.array().items(Joi.string()).optional()
});

export const validateProduct = (req: Request, res: Response, next: NextFunction): void => {
  const { error } = productSchema.validate(req.body, { 
    allowUnknown: false,  // Không cho phép các trường không được định nghĩa
    stripUnknown: true    // Loại bỏ các trường không được định nghĩa
  });

  if (error) {
    res.status(400).json({ 
      message: error.details[0].message,
      details: error.details
    });
  } else {
    next();
  }
};