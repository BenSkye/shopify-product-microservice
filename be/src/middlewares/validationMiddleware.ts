import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().positive().required(),
  image: Joi.string().uri().required(),
});

export const validateProduct = (req: Request, res: Response, next: NextFunction): void => {
  const { error } = productSchema.validate(req.body);
  if (error) {
    res.status(400).json({ message: error.details[0].message });
  } else {
    next();
  }
};
