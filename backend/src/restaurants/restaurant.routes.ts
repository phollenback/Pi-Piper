import { Router } from 'express';
import { readRestaurants, readRestaurantById } from './restaurant.controller';
import asyncHandler from '../util/asyncHandler';
import { requestLogger, responseTimeLogger } from '../middleware/winston.middleware';

const router = Router();

router.use(responseTimeLogger);
router.use(requestLogger);

router
    .route('/')
    .get(asyncHandler(readRestaurants));

router
    .route('/:restaurantId')
    .get(asyncHandler(readRestaurantById));

export default router;