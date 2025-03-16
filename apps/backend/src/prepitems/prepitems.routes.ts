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
    // fetch daily prep items for a restaurant (more specific route first)
    .get('/daily/:restaurantId', asyncHandler(PrepItemController.readDailyPrepItems))

    // update daily prep items for a restaurant
    .put('/daily/:restaurantId', checkSchema(PrepListItemSchema), asyncHandler(PrepItemController.updateDailyPrepItem))

    // create daily prep items for a restaurant
    .post('/daily/:restaurantId', asyncHandler(PrepItemController.createDailyPrepItems))
    
    // fetch all prep items for a restaurant (general route after specific routes)
    .get('/:restaurantId', asyncHandler(PrepItemController.readPrepItems))
    
    // create a new prep item
    .post('/:restaurantId', checkSchema(PrepItemSchema), asyncHandler(PrepItemController.createPrepItem))

    // update an existing prep item
    .put('/:restaurantId/:prepItemId', checkSchema(PrepItemSchema), asyncHandler(PrepItemController.updatePrepItem));

export default router;