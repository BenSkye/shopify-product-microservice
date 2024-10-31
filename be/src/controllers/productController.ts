import { Request, Response, NextFunction } from 'express';
import shopifyService from '../services/shopifyService';

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, description, price, image } = req.body;
    const product = await shopifyService.createProduct({ name, description, price, image });
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    next(error);
  }
};