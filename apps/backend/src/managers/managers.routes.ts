import { Router } from 'express';
import * as UserController from './managers.controller';
const { checkSchema } = require('express-validator');
import { UserSchema } from './manager.model';
import asyncHandler from '../util/asyncHandler';
import { requestLogger, responseTimeLogger } from '../middleware/winston.middleware';

const router = Router();

// Apply logging middleware
router.use(responseTimeLogger);
router.use(requestLogger);

// Get users for a specific restaurant
router.get(
    '/:restaurantId',
    asyncHandler(UserController.getUsers)
);

// Create new user
router.post(
    '/',
    checkSchema(UserSchema),
    asyncHandler(UserController.createUser)
);

// Update existing user
router.put(
    '/:userId',
    checkSchema(UserSchema),
    asyncHandler(UserController.updateUser)
);

// Delete user
router.delete(
    '/:userId',
    asyncHandler(UserController.deleteUser)
);

export default router;