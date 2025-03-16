import { Router } from 'express';
import { getLatestMetrics, getMetricsInRange, calculateMetrics, recordPrepCompletion } from './metrics.controller';
import asyncHandler from '../util/asyncHandler';

const router = Router();

// Get metrics for a restaurant within a date range
router
    .route('/range/:restaurantId')
    .get(asyncHandler(getMetricsInRange));

// Manually trigger metrics calculation for a restaurant
router
    .route('/calculate/:restaurantId')
    .post(asyncHandler(calculateMetrics));

// Record prep list completion time for a restaurant
router
    .route('/record-prep-completion/:restaurantId')
    .post(asyncHandler(recordPrepCompletion));

// Get latest metrics for a restaurant
router
    .route('/:restaurantId')
    .get(asyncHandler(getLatestMetrics));

export default router; 