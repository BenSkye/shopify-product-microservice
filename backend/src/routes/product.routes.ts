import { Router } from 'express';
import { ProductController } from '../controllers/product.controller';
import { validateProduct } from '../middleware/validation.middleware';

const router = Router();
const productController = new ProductController();

router.post('/create', validateProduct, productController.createProduct);

export default router;