import axios from 'axios';
import shopifyConfig from '../config/shopifyConfig';

const SHOPIFY_API_URL = `https://${shopifyConfig.SHOP_NAME}.myshopify.com/admin/api/2021-04/products.json`;

interface ProductData {
  name: string;
  description: string;
  price: string;
  image: string;
}

export const createProduct = async (productData: ProductData) => {
  try {
    const response = await axios.post(
      SHOPIFY_API_URL,
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
          'X-Shopify-Access-Token': shopifyConfig.SHOPIFY_API_SECRET,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data.product;
  } catch (error) {
    throw new Error(`Failed to create product: ${error}`);
  }
};

export default { createProduct };

