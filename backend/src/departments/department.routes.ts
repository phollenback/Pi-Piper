import { Router } from 'express';
import { readDepartments, readDepProgress } from './department.controller';
import { requestLogger, responseTimeLogger } from '../middleware/winston.middleware';

const router = Router();

// Apply middleware for logging response times and requests
router.use(responseTimeLogger);
router.use(requestLogger);

// Define routes for reading departments and department progress
router.get('/:restaurantId', readDepartments);
router.get('/daily/:restaurantId', readDepProgress);

export default router;