import { Router } from 'express';
import { readCategories } from './category.controller';
import { requestLogger, responseTimeLogger } from '../middleware/winston.middleware';
import asyncHandler from '../util/asyncHandler';

const router = Router();
// Logger middleware
router.use(responseTimeLogger);
router.use(requestLogger);

// GET /categories
router
    .get('/:restaurantId', asyncHandler(readCategories));

export default router;