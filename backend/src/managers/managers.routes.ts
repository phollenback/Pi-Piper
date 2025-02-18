import { Router } from 'express';
import * as ManagerController from './managers.controller';
const { checkSchema } = require('express-validator');
import { ManagerSchema } from './manager.model';
import asyncHandler from '../util/asyncHandler'; 
import { requestLogger, responseTimeLogger } from '../middleware/winston.middleware';

const router = Router();

// Apply logging middleware
router.use(responseTimeLogger);
router.use(requestLogger);

// Retrieve managers for a specific restaurant
router
    .get(
        '/:restaurantId',
        asyncHandler(ManagerController.readManager) 
    );

// Create new manager with validation
router
    .post(
        '/manager',
        checkSchema(ManagerSchema),
        asyncHandler(ManagerController.createManager) 
    );

// Update existing manager details with validation
router
    .put(
        '/:managerId',
        checkSchema(ManagerSchema), 
        asyncHandler(ManagerController.updateManager) 
    );

// Remove manager from the system
router
    .delete(
        '/:managerId',
        asyncHandler(ManagerController.deleteManager)
    );

export default router;