import { Router } from 'express';
import * as IngredientController from './ingredient.controller';
import { IngredientSchema } from './ingredient.model';
import asyncHandler from '../util/asyncHandler';
import { requestLogger, responseTimeLogger } from '../middleware/winston.middleware';
const { checkSchema } = require('express-validator');

const router = Router();

// Apply logging middleware
router.use(responseTimeLogger);
router.use(requestLogger);

// Retrieve all ingredients for a restaurant
router
    .get(
        '/:restaurantId',
        asyncHandler(IngredientController.readIngredients)
    );

// Get inventory status for a restaurant
router
    .get(
        '/inventory/:restaurantId',
        asyncHandler(IngredientController.readInventory)
    )

// Get ingredient suggestions for a restaurant
router
    .get(
        '/suggestions/:restaurantId',
        asyncHandler(IngredientController.readSuggestions)
    )

// Get pricing information for restaurant ingredients
router
    .get(
        '/pricing/:restaurantId',
        asyncHandler(IngredientController.readPricing)
    )

// Create new ingredient with validation
router
    .post(
        '/:restaurantId',
        checkSchema(IngredientSchema),
        asyncHandler(IngredientController.createIngredient)
    );

// Update existing ingredient with validation
router
    .put(
        '/ingredient',
        checkSchema(IngredientSchema),
        asyncHandler(IngredientController.updateIngredient)
    );

// Remove ingredient from restaurant
router
    .delete(
        '/:restaurantId/:ingredientId',
        asyncHandler(IngredientController.deleteIngredient)
    );

export default router;