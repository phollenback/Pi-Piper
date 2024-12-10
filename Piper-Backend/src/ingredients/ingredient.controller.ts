import { Request, Response } from 'express';
import * as IngredientDal from './ingredient.dal';

export const readIngredients = async (req: Request , res: Response) => {
    console.log('[ingredient.controller][readIngredient][CON] ');

    try {
        let restaurantId = Number(req.params.restaurantId);

        const response = await IngredientDal.getIngredients(restaurantId);
 
         res.status(200).json(
             response
         );
     } catch (error) {
         console.error('[restaurants.controller[readRestaurants][Error] ', error);
         res.status(500).json({
             message: 'There was an error when fetching restaurants'
         })
     }

}

export const createIngredient = async (req: Request , res: Response) => {
    console.log('[ingredient.controller][createIngredient][CON] ');

    try {
        let restaurantId = Number(req.params.restaurantId);
        let ingredientData = req.body;
        
        const response = await IngredientDal.createIngredient(restaurantId, ingredientData);
 
         res.status(200).json(
             response
         );
     } catch (error) {
         console.error('[ingredient.controller[createIngredients][Error] ', error);
         res.status(500).json({
             message: 'There was an error when fetching restaurants'
         })
     }
}

export const updateIngredient = async (req: Request , res: Response) => {
    console.log('[ingredient.controller][updateIngredient][CON] ');

    try {
        let ingredientData = req.body;
        
        const response = await IngredientDal.updateIngredient(ingredientData);
 
         res.status(200).json(
             response
         );
     } catch (error) {
         console.error('[updateIngredients.controller[updateIngredients][Error] ', error);
         res.status(500).json({
             message: 'There was an error when fetching restaurants'
         })
     }

}

export const deleteIngredient = async (req: Request , res: Response) => {
    console.log('[ingredient.controller][deleteIngredient][CON] ');


    try {
        let ingredientId = Number(req.params.ingredientId);
        let restaurantId = Number(req.params.restaurantId);

        console.log("restaurantId: ", restaurantId);
        console.log("ingredientId: ", ingredientId);

        const response = await IngredientDal.deleteIngredient(ingredientId, restaurantId);
 
         res.status(200).json(
             response
         );
     } catch (error) {
         console.error('[ingredient.controller[deleteIngredient][Error] ', error);
         res.status(500).json({
             message: 'There was an error when fetching restaurants'
         })
     }
}