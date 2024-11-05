import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  logger.error('Global error:', error);
  res.status(500).json({
    message: 'Internal Server Error',
    error: error.message
  });
};