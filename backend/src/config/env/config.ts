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
    apiSecret: process.env.SHOPIFY_API_SECRET,
    apiAccessTokenAdmin: process.env.SHOPIFY_ADMIN_ACCESS_TOKEN,
  }
};


const validateConfig = () => {
  const { shopify } = config;
  if (!shopify.shopName || !shopify.apiKey || !shopify.apiSecret || !shopify.apiAccessTokenAdmin) {
    throw new Error('Missing required Shopify configuration');
  }
};

validateConfig();