import { Request, RequestHandler, Response } from 'express'

export const readIngredients = (req: Request , res: Response) => {
    console.log('[ingredient.controller][readIngredient][CON] ');

}

export const createIngredient = (req: Request , res: Response) => {
    console.log('[ingredient.controller][createIngredient][CON] ');

}

export const updateIngredient = (req: Request , res: Response) => {
    console.log('[ingredient.controller][updateIngredient][CON] ');

}

export const deleteIngredient = (req: Request , res: Response) => {
    console.log('[ingredient.controller][deleteIngredient][CON] ');

}