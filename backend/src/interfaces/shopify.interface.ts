import { IProductDTO } from './product.interface';

export interface IShopifyProduct {
  title: string;
  body_html: string;
  variants: Array<{ price: string }>;
  images: Array<{ src: string }>;
}

export interface IShopifyService {
  createProduct(product: IProductDTO): Promise<IShopifyProduct>;
}