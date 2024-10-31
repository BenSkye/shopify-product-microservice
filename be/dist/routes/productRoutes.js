import express from 'express';
import { createProduct } from '../controllers/productController';
import { validateProduct } from '../middlewares/validationMiddleware';
const router = express.Router();
router.post('/create', validateProduct, createProduct);
export default router;
