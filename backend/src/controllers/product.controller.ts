import { Request, Response } from 'express';
import { ShopifyService } from '../services/shopify.service';
import { IProductDTO, IProductResponse } from '../interfaces/product.interface';
import logger from '../utils/logger';

export class ProductController {
  private shopifyService: ShopifyService;

  constructor() {
    this.shopifyService = new ShopifyService();
  }

  public createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
      const productData: IProductDTO = req.body;
      logger.info('Received create product request:', productData);

      const product = await this.shopifyService.createProduct(productData);
      
      const response: IProductResponse = {
        message: 'Product created successfully',
        product
      };

      res.status(201).json(response);
    } catch (error: any) {
      logger.error('Error in createProduct controller:', error);
      res.status(500).json({ message: 'Failed to create product', error: error.message });
    }
  };
}