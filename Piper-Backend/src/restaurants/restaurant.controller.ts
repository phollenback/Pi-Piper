import { Request, Response } from 'express';
import { getRestaurants } from './restaurant.dal'

export const readRestaurants = async (req: Request , res: Response) => {
    console.log('[restaurant.controller][readRestaurants][CON] ');

    try {
       const response = await getRestaurants();

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
