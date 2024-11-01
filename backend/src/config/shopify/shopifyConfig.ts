import { config } from '../env/config';

const shopifyConfig = {
  shopName: config.shopify.shopName,
  apiKey: config.shopify.apiKey,
  apiSecret: config.shopify.apiSecret,
  
  // Các cấu hình Shopify API
  apiVersion: '2024-01',
  scopes: [
    'read_products',
    'write_products',
  ],
  
  getShopUrl: () => `https://${config.shopify.shopName}.myshopify.com`,
  getAdminApiUrl: () => `https://${config.shopify.shopName}.myshopify.com/admin/api/${shopifyConfig.apiVersion}/products.json`,
};

export default shopifyConfig;