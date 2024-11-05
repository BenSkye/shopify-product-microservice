import { IShopifyService, IShopifyProduct } from '../interfaces/shopify.interface';
import { IProductDTO } from '../interfaces/product.interface';
import { shopifyConfig } from '../config';
import { ImageValidator } from '../utils/validators';
import axios from 'axios';
import logger from '../utils/logger';

export class ShopifyService implements IShopifyService {
  private readonly apiUrl: string;
  private readonly accessToken: string;

  constructor() {
    this.apiUrl = shopifyConfig.getAdminApiUrl() || '';
    this.accessToken = shopifyConfig.apiAccessToken || '';
  }

  async createProduct(productData: IProductDTO): Promise<IShopifyProduct> {
    try {
      logger.info('Creating product with data:', productData);

      const validImageUrl = await ImageValidator.validateImageUrl(productData.image);

      const response = await axios.post(
        this.apiUrl,
        {
          product: {
            title: productData.name,
            body_html: productData.description,
            variants: [{
              price: productData.price,
              inventory_management: 'shopify',
              inventory_quantity: productData.inventory_quantity || 100,
              sku: productData.sku || `SKU-${Date.now()}`
            }],
            images: validImageUrl ? [{
              src: validImageUrl,
              position: 1,
              alt: productData.name
            }] : []
          }
        },
        {
          headers: {
            'X-Shopify-Access-Token': this.accessToken,
            'Content-Type': 'application/json'
          }
        }
      );

      logger.info('Product created successfully');
      return response.data.product;
    } catch (error) {
      logger.error('Failed to create product:', error);
      throw new Error(`Failed to create product: ${error}`);
    }
  }
}
