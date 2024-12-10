import { Router } from 'express'
import * as IngredientController from './ingredient.controller'


const router = Router();

router 
    .route('/ingredient/:restaurantId')
    .get(IngredientController.readIngredients)

router 
    .route('/ingredient/:restaurantId')
    .post(IngredientController.createIngredient)

router 
    .route('/ingredient')
    .put(IngredientController.updateIngredient)

router 
    .route('/ingredient/:restaurantId/:ingredientId')
    .delete(IngredientController.deleteIngredient)

export default router;