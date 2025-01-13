import { Router } from 'express';
import * as IngredientController from './ingredient.controller';
import { IngredientSchema } from './ingredient.model';
import asyncHandler from '../util/asyncHandler';
const { checkSchema } = require('express-validator');

const router = Router();

router
    .get(
        '/ingredient/:restaurantId',
        asyncHandler(IngredientController.readIngredients)
    );

router
    .post(
        '/ingredient/:restaurantId',
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
        '/ingredient/:restaurantId/:ingredientId',
        asyncHandler(IngredientController.deleteIngredient)
    );

export default router;