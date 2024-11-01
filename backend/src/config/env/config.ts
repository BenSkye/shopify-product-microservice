import dotenv from 'dotenv';
dotenv.config();

export const config = {
  app: {
    port: process.env.PORT || 5000,
    nodeEnv: process.env.NODE_ENV || 'development'
  },
  shopify: {
    shopName: process.env.SHOP_NAME,
    apiKey: process.env.SHOPIFY_API_KEY,
    apiSecret: process.env.SHOPIFY_API_SECRET
  }
};


const validateConfig = () => {
  const { shopify } = config;
  if (!shopify.shopName || !shopify.apiKey || !shopify.apiSecret) {
    throw new Error('Missing required Shopify configuration');
  }
};

validateConfig();