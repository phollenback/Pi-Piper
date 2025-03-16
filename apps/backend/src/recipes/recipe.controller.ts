import { Request, Response } from 'express';
import { logger } from '../middleware/winston.middleware';
import * as RecipeDal from './recipe.dal';

// Get all recipes
export const readRecipes = async (req: Request, res: Response) => {
  logger.info('[recipe.controller][readRecipes][START]');
  try {
    const restaurantId = Number(req.params.restaurantId);
    const categoryId = req.query.categoryId ? Number(req.query.categoryId) : undefined;
    
    if (isNaN(restaurantId)) {
      return res.status(400).json({
        message: 'Invalid restaurant ID'
      });
    }
    
    const recipes = await RecipeDal.getRecipes(restaurantId, categoryId);
    logger.info('[recipe.controller][readRecipes][SUCCESS]', { count: recipes.length });
    res.status(200).json(recipes);
  } catch (error) {
    logger.error('[recipe.controller][readRecipes][ERROR]', { error });
    res.status(500).json({
      message: 'There was an error when fetching recipes'
    });
  }
};

// Get recipe by ID
export const readRecipeById = async (req: Request, res: Response) => {
  logger.info('[recipe.controller][readRecipeById][START]');
  try {
    const recipeId = Number(req.params.id);
    
    if (isNaN(recipeId)) {
      return res.status(400).json({
        message: 'Invalid recipe ID'
      });
    }
    
    const recipe = await RecipeDal.getRecipeWithIngredientsById(recipeId);
    
    if (!recipe) {
      logger.info('[recipe.controller][readRecipeById][NOT_FOUND]', { recipeId });
      return res.status(404).json({
        message: 'Recipe not found'
      });
    }
    
    logger.info('[recipe.controller][readRecipeById][SUCCESS]');
    res.status(200).json(recipe);
  } catch (error) {
    logger.error('[recipe.controller][readRecipeById][ERROR]', { error });
    res.status(500).json({
      message: 'There was an error when fetching the recipe'
    });
  }
};

// Create a new recipe
export const createRecipe = async (req: Request, res: Response) => {
  logger.info('[recipe.controller][createRecipe][START]');
  try {
    const { recipe, ingredients } = req.body;
    
    if (!recipe || !recipe.prepItemName || !ingredients || !Array.isArray(ingredients)) {
      logger.info('[recipe.controller][createRecipe][VALIDATION_ERROR]');
      return res.status(400).json({
        message: 'Invalid recipe data. Recipe name and ingredients array are required.'
      });
    }
    
    const newRecipe = await RecipeDal.insertRecipe(recipe, ingredients);
    
    logger.info('[recipe.controller][createRecipe][SUCCESS]');
    res.status(201).json(newRecipe);
  } catch (error) {
    logger.error('[recipe.controller][createRecipe][ERROR]', { error });
    res.status(500).json({
      message: 'There was an error when creating the recipe'
    });
  }
};

// Update an existing recipe
export const updateRecipe = async (req: Request, res: Response) => {
  logger.info('[recipe.controller][updateRecipe][START]');
  try {
    const recipeId = Number(req.params.id);
    const { recipe, ingredients } = req.body;
    
    if (isNaN(recipeId)) {
      return res.status(400).json({
        message: 'Invalid recipe ID'
      });
    }
    
    if (!recipe) {
      logger.info('[recipe.controller][updateRecipe][VALIDATION_ERROR]');
      return res.status(400).json({
        message: 'Invalid recipe data. Recipe object is required.'
      });
    }
    
    const updatedRecipe = await RecipeDal.modifyRecipe(recipeId, recipe, ingredients);
    
    if (!updatedRecipe) {
      logger.info('[recipe.controller][updateRecipe][NOT_FOUND]', { recipeId });
      return res.status(404).json({
        message: 'Recipe not found'
      });
    }
    
    logger.info('[recipe.controller][updateRecipe][SUCCESS]');
    res.status(200).json(updatedRecipe);
  } catch (error) {
    logger.error('[recipe.controller][updateRecipe][ERROR]', { error });
    res.status(500).json({
      message: 'There was an error when updating the recipe'
    });
  }
};

// Delete a recipe
export const deleteRecipe = async (req: Request, res: Response) => {
  logger.info('[recipe.controller][deleteRecipe][START]');
  try {
    const recipeId = Number(req.params.id);
    
    if (isNaN(recipeId)) {
      return res.status(400).json({
        message: 'Invalid recipe ID'
      });
    }
    
    const deleted = await RecipeDal.removeRecipe(recipeId);
    
    if (!deleted) {
      logger.info('[recipe.controller][deleteRecipe][NOT_FOUND]', { recipeId });
      return res.status(404).json({
        message: 'Recipe not found'
      });
    }
    
    logger.info('[recipe.controller][deleteRecipe][SUCCESS]');
    res.status(200).json({
      message: 'Recipe deleted successfully'
    });
  } catch (error) {
    logger.error('[recipe.controller][deleteRecipe][ERROR]', { error });
    res.status(500).json({
      message: 'There was an error when deleting the recipe'
    });
  }
};