import { Request, Response } from 'express';
import { getRestaurants } from './restaurant.dao';
import { logger } from '../middleware/winston.middleware';
import { eq } from 'drizzle-orm';
import { dimRestaurant } from '../db/schema';
import { db } from '../db/connection';
import { RestaurantService } from './restaurant.service';

export const readRestaurants = async (req: Request, res: Response) => {
    logger.info('[restaurant.controller][readRestaurants][START]');

    try {
        const restaurants = await db.select().from(dimRestaurant);
        logger.info('[restaurant.controller][readRestaurants][SUCCESS]', { restaurants });

        res.status(200).json(restaurants);
    } catch (error) {
        logger.error('[restaurant.controller][readRestaurants][ERROR]', { error });
        res.status(500).json({
            message: 'Failed to fetch restaurants',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

export const readRestaurantById = async (req: Request, res: Response) => {
    const { restaurantId } = req.params;
    const restaurant = await db.select().from(dimRestaurant).where(eq(dimRestaurant.restaurantId, Number(restaurantId)));
    res.json(restaurant);
};

export const getRestaurantDetails = async (req: Request, res: Response) => {
    logger.info('[restaurant.controller][getRestaurantDetails][START]');
    
    try {
        const { restaurantId } = req.params;
        
        if (!restaurantId) {
            return res.status(400).json({
                message: 'Restaurant ID is required'
            });
        }
        
        const details = await RestaurantService.getRestaurantDetails(Number(restaurantId));
        
        logger.info('[restaurant.controller][getRestaurantDetails][SUCCESS]', { 
            restaurantId 
        });
        
        res.status(200).json(details);
    } catch (error) {
        logger.error('[restaurant.controller][getRestaurantDetails][ERROR]', { error });
        res.status(500).json({
            message: 'Failed to get restaurant details',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};

export const compareRestaurants = async (req: Request, res: Response) => {
    logger.info('[restaurant.controller][compareRestaurants][START]');
    
    try {
        const { restaurantIds } = req.body;
        
        if (!restaurantIds || !Array.isArray(restaurantIds) || restaurantIds.length === 0) {
            return res.status(400).json({
                message: 'Invalid request. Please provide an array of restaurant IDs.'
            });
        }
        
        // Convert string IDs to numbers if needed
        const numericIds = restaurantIds.map(id => typeof id === 'string' ? parseInt(id, 10) : id);
        
        const comparisonData = await RestaurantService.getRestaurantComparison(numericIds);
        
        logger.info('[restaurant.controller][compareRestaurants][SUCCESS]', { 
            restaurantCount: comparisonData.restaurants.length 
        });
        
        res.status(200).json(comparisonData);
    } catch (error) {
        logger.error('[restaurant.controller][compareRestaurants][ERROR]', { error });
        res.status(500).json({
            message: 'Failed to compare restaurants',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
};