import { Router } from 'express';
import * as ManagerController from './managers.controller';
const { checkSchema } = require('express-validator');
import { ManagerSchema } from './manager.model';
import asyncHandler from '../util/asyncHandler'; 
import { requestLogger, responseTimeLogger } from '../middleware/winston.middleware';

const router = Router();

router.use(responseTimeLogger);
router.use(requestLogger);

router
    .get(
        '/:restaurantId',
        asyncHandler(ManagerController.readManager) 
    );

router
    .post(
        '/manager',
        checkSchema(ManagerSchema),
        asyncHandler(ManagerController.createManager) 
    );

router
    .put(
        '/:managerId',
        checkSchema(ManagerSchema), 
        asyncHandler(ManagerController.updateManager) 
    );

router
    .delete(
        '/:managerId',
        asyncHandler(ManagerController.deleteManager)
    );

export default router;