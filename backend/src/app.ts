import express from 'express';
import productRoutes from './routes/productRoutes';
import logger from './utils/logger';


const app = express();
app.use(express.json());

// Đăng ký route
app.use('/api/v1/products', productRoutes);

// Xử lý lỗi
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  logger.error(err.message);
  res.status(500).json({ message: 'Internal Server Error' });
});

export default app;
