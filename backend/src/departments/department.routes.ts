import { Router } from 'express';
import { readDepartments } from './department.controller';
import { requestLogger, responseTimeLogger } from '../middleware/winston.middleware';
import asyncHandler from '../util/asyncHandler';

const router = Router();

// Apply middleware for logging response times and requests
router.use(responseTimeLogger);
router.use(requestLogger);

// Define routes for reading departments and department progress
router.get('/:restaurantId', asyncHandler(readDepartments));

export default router;