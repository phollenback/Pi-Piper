import { Router } from 'express';
import * as AdminController from './managers.controller';
const { checkSchema } = require('express-validator');
import { ManagerSchema } from './manager.model';
import asyncHandler from '../util/asyncHandler'; 

const router = Router();

router
    .get(
        '/manager/:restaurantId',
        asyncHandler(AdminController.readManager) 
    );

router
    .post(
        '/manager',
        checkSchema(ManagerSchema),
        asyncHandler(AdminController.createManager) 
    );

router
    .put(
        '/manager/:managerId',
        checkSchema(ManagerSchema), 
        asyncHandler(AdminController.updateManager) 
    );

router
    .delete(
        '/manager/:managerId',
        asyncHandler(AdminController.deleteManager)
    );

export default router;