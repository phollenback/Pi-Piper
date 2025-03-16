import express from 'express';
import { RestaurantSettingsController } from '../controllers/restaurant-settings.controller';
import asyncHandler from '../util/asyncHandler';
import { responseTimeLogger } from '../middleware/winston.middleware';

const router = express.Router();

// Apply logging middleware
router.use(responseTimeLogger);

// Get restaurant settings
router.get('/:restaurantId', asyncHandler(RestaurantSettingsController.getSettings));

// Update low stock threshold
router.put('/:restaurantId/low-stock-threshold', asyncHandler(RestaurantSettingsController.updateLowStockThreshold));

export default router; 