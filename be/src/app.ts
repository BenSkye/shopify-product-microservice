import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes';
import logger from './utils/logger';

dotenv.config();

const app = express();
app.use(express.json());

// Đăng ký route
app.use('/api/products', productRoutes);

// Xử lý lỗi
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  logger.error(err.message);
  res.status(500).json({ message: 'Internal Server Error' });
});

export default app;
