import axios from 'axios';
import logger from './logger';

export class ImageValidator {

  static async validateImageUrl(url: string): Promise<string | null> {
    try {
      if (!url) {
        logger.warn('Empty image URL provided');
        return null;
      }

      const response = await axios.head(url);
      
      if (response.status === 200 && response.headers['content-type']?.startsWith('image/')) {
        logger.info('Valid image URL:', url);
        return url;
      }

      logger.warn('Invalid image content type:', response.headers['content-type']);
      return null;
    } catch (error) {
      logger.error('Error validating image URL:', {
        url,
        error: (error as Error).message
      });
      return null;
    }
  }

  static async validateMultipleImageUrls(urls: string[]): Promise<string[]> {
    const validUrls = await Promise.all(
      urls.map(url => this.validateImageUrl(url))
    );
    return validUrls.filter((url): url is string => url !== null);
  }
}


export class ProductValidator {
  static validatePrice(price: string): boolean {
    return !isNaN(Number(price)) && Number(price) > 0;
  }

  static validateSKU(sku: string): boolean {
    return /^[A-Za-z0-9-_]+$/.test(sku);
  }
}

export class URLValidator {
  static isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }
}