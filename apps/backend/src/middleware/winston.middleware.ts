/**
 * Winston logger middleware
 * 
 * This module provides logging middleware for Express using Winston.
 */

import { Request, Response, NextFunction } from 'express';
import winston from 'winston';
import path from 'path';

// Create logs directory if it doesn't exist
const logsDir = path.join(__dirname, '../../logs');
require('fs').existsSync(logsDir) || require('fs').mkdirSync(logsDir);

// Configure the logger
export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  defaultMeta: { service: 'pi-piper-backend' },
  transports: [
    // Console transport for development
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    }),
    // File transports for all environments
    new winston.transports.File({ 
      filename: path.join(logsDir, 'error.log'), 
      level: 'error',
      maxsize: 5242880, // 5MB
      maxFiles: 5
    }),
    new winston.transports.File({ 
      filename: path.join(logsDir, 'combined.log'),
      maxsize: 5242880, // 5MB
      maxFiles: 5
    })
  ]
});

// Middleware to log requests
export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  logger.info('Incoming request', {
    method: req.method,
    url: req.url,
    ip: req.ip,
    params: req.params,
    query: req.query,
    body: req.method === 'POST' || req.method === 'PUT' ? req.body : undefined
  });
  next();
};

// Middleware to log response time
export const responseTimeLogger = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info('Request completed', {
      method: req.method,
      url: req.url,
      statusCode: res.statusCode,
      duration: `${duration}ms`
    });
  });
  
  next();
};

// Error logger (no longer needed as main logger handles errors)
export const errorLogger = logger;