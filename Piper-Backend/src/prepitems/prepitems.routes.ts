import { Router } from 'express';
import * as PrepItemController from './prepitem.controller';
import { PrepItemSchema } from './prepitem.model';
import asyncHandler from '../util/asyncHandler';
const { checkSchema } = require('express-validator');

const router = Router();

router
    .get(
        '/prep-items/:restaurantId',
        asyncHandler(PrepItemController.readPrepItems)
    );

router
    .post(
        '/prep-items/:restaurantId',
        checkSchema(PrepItemSchema),
        asyncHandler(PrepItemController.createPrepItem)
    );

router
    .put(
        '/prep-items/:prepItemId',
        checkSchema(PrepItemSchema),
        asyncHandler(PrepItemController.updatePrepItem)
    );

router
    .delete(
        '/prep-items/:restaurantId/:prepItemId',
        asyncHandler(PrepItemController.deletePrepItem)
    );

export default router;