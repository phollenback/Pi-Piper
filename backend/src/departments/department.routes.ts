import { Router } from 'express';
import { readDepartments, readDepProgress } from './department.controller';
import { requestLogger, responseTimeLogger } from '../middleware/winston.middleware';
import asyncHandler from '../util/asyncHandler';

const router = Router();

// Apply middleware
router.use(responseTimeLogger);
router.use(requestLogger);

// Define routes
router.get('/:restaurantId', asyncHandler(readDepartments));
router.get('/daily/:restaurantId', asyncHandler(readDepProgress));

export default router;