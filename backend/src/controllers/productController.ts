import { Request, Response, NextFunction } from 'express';
import shopifyService from '../services/shopifyService';

export const createProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { name, description, price, image } = req.body;
    console.log('Received product data:', { name, description, price, image });
    const product = await shopifyService.createProduct({ name, description, price, image });
    console.log('Created product:', product);

    res.status(201).json({ message: 'Product created successfully', product: product });
    
  } catch (error: any) {
     res.status(500).json({ message: 'Failed to create product', error: error.message });
  }
};
