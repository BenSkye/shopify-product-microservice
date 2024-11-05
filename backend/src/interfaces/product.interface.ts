import { IShopifyProduct } from './shopify.interface';

export interface IProductDTO {
  name: string;
  description: string;
  price: string;
  image: string;
  sku?: string;                
  barcode?: string;            
  weight?: number;             
  inventory_quantity?: number;  
  product_type?: string;       
  vendor?: string;       
  tags?: string[]; 
}

export interface IProductResponse {
  message: string;
  product: IShopifyProduct;
}