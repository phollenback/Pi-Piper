import { Router } from 'express';
import * as PrepItemController from './prepitem.controller';
import { PrepItemSchema, PrepListItemSchema } from './prepitem.model';
import asyncHandler from '../util/asyncHandler';
import { requestLogger, responseTimeLogger } from '../middleware/winston.middleware';
const { checkSchema } = require('express-validator');

const router = Router();

router.use(responseTimeLogger);
router.use(requestLogger);

router
    // fetch all prep items for a restaurant
    .get('/:restaurantId', asyncHandler(PrepItemController.readPrepItems))

    // fetch daily prep items for a restaurant
    .get('/daily/:restaurantId', asyncHandler(PrepItemController.readDailyPrepItems))

    .put('/daily/:restaurantId', checkSchema(PrepListItemSchema), asyncHandler(PrepItemController.updateDailyPrepItem))

    .post('/daily/:restaurantId', asyncHandler(PrepItemController.createDailyPrepItems))
    
    .post('/:restaurantId', checkSchema(PrepItemSchema), asyncHandler(PrepItemController.createPrepItem));

export default router;