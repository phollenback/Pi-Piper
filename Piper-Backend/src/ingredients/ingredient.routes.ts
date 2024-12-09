import { Router } from 'express'
import * as IngredientController from './ingredient.controller'


const router = Router();

router 
    .route('/api/ingredient/:restaurantId')
    .get(IngredientController.readIngredients)

router 
    .route('/api/ingredient/:restaurantId')
    .post(IngredientController.createIngredient)

router 
    .route('/api/ingredient/:restaurantId')
    .put(IngredientController.updateIngredient)

router 
    .route('/api/ingredient/:restaurantId/:ingredientId')
    .get(IngredientController.deleteIngredient)

export default router;