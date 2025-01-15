import { Router } from 'express';
import * as PrepItemController from './prepitem.controller';
import { PrepItemSchema } from './prepitem.model';
import asyncHandler from '../util/asyncHandler';
import { requestLogger, responseTimeLogger } from '../middleware/winston.middleware';
const { checkSchema } = require('express-validator');

const router = Router();

router.use(responseTimeLogger);
router.use(requestLogger);

router
    .get(
        '/:restaurantId',
        asyncHandler(PrepItemController.readPrepItems)
    );

router
    .get(
        '/daily',
        asyncHandler(PrepItemController.readDailyPrepItems)
    );

router
    .post(
        '/:restaurantId',
        checkSchema(PrepItemSchema),
        asyncHandler(PrepItemController.createPrepItem)
    );

export default router;