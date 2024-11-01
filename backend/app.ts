import express, { Application } from 'express';
import productRoutes from './src/routes/productRoutes';
import dotenv from 'dotenv';
import logger from './src/utils/logger';

dotenv.config();

const app: Application = express();

// Middleware for JSON parsing
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Error handling (example)
app.use((err: any, req: any, res: any, next: any) => {
    logger.error(err.message);
    res.status(500).send({ error: 'An error occurred' });
});

export default app;
