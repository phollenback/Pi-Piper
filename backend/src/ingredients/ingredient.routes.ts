import { Router } from 'express';
import * as IngredientController from './ingredient.controller';
import { IngredientSchema } from './ingredient.model';
import asyncHandler from '../util/asyncHandler';
import { requestLogger, responseTimeLogger } from '../middleware/winston.middleware';
const { checkSchema } = require('express-validator');

const router = Router();

router.use(responseTimeLogger);
router.use(requestLogger);

router
    .get(
        '/:restaurantId',
        asyncHandler(IngredientController.readIngredients)
    );

router
    .post(
        '/:restaurantId',
        checkSchema(IngredientSchema),
        asyncHandler(IngredientController.createIngredient)
    );

router
    .put(
        '/ingredient',
        checkSchema(IngredientSchema),
        asyncHandler(IngredientController.updateIngredient)
    );

router
    .delete(
        '/:restaurantId/:ingredientId',
        asyncHandler(IngredientController.deleteIngredient)
    );

export default router;