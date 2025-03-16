import { Router } from 'express';
import { readRestaurants, readRestaurantById, compareRestaurants, getRestaurantDetails } from './restaurant.controller';
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

// Get detailed information for a single restaurant
router
    .route('/details/:restaurantId')
    .get(asyncHandler(getRestaurantDetails));

// New route for restaurant comparison
router
    .route('/compare')
    .post(asyncHandler(compareRestaurants));

export default router;