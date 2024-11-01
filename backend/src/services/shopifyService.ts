import axios from 'axios';
import {shopifyConfig } from '../config';

interface ProductData {
  name: string;
  description: string;
  price: string;
  image: string;
}

export const createProduct = async (productData: ProductData) => {
  try {
    console.log('Sending request to Shopify:', {
      url: shopifyConfig.getAdminApiUrl(),
      headers: {
        'X-Shopify-Access-Token': shopifyConfig.apiSecret,
        'Content-Type': 'application/json'
      },
      data: { product: productData }
    });
    const response = await axios.post(
      shopifyConfig.getAdminApiUrl(),
      {
        product: {
          title: productData.name,
          body_html: productData.description,
          variants: [{ price: productData.price }],
          images: [{ src: productData.image }]
        }
      },
      {
        headers: {
          'X-Shopify-Access-Token': shopifyConfig.apiSecret,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('Response from service:', response.data);
    return response.data.product;
  } catch (error) {
    throw new Error(`Failed to create product: ${error}`);
  }
};

export default { createProduct };

