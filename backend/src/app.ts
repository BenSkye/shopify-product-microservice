import express from 'express';
import productRoutes from './routes/product.routes';
import { errorHandler } from './middleware/error.middleware';
import logger from './utils/logger';

const app = express();

app.use(express.json());
app.use('/api/v1/products', productRoutes);
app.use(errorHandler);

app.use((req, res) => {
  logger.warn(`Route not found: ${req.method} ${req.url}`);
  res.status(404).json({ message: 'Route not found' });
});

export default app;