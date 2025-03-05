import { Router } from 'express';
import * as RecipeController from './recipe.controller';
import asyncHandler from '../util/asyncHandler';
import { requestLogger, responseTimeLogger } from '../middleware/winston.middleware';

const router = Router();

router.use(responseTimeLogger);
router.use(requestLogger);

// Get all recipes for a restaurant (with optional categoryId query param)
router.get('/:restaurantId', asyncHandler(RecipeController.readRecipes));

// Get recipe by ID
router.get('/detail/:id', asyncHandler(RecipeController.readRecipeById));

// Create a new recipe
router.post('/', asyncHandler(RecipeController.createRecipe));

// Update an existing recipe
router.put('/:id', asyncHandler(RecipeController.updateRecipe));

// Delete a recipe
router.delete('/:id', asyncHandler(RecipeController.deleteRecipe));

export default router;