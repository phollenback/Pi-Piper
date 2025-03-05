import { logger } from '../middleware/winston.middleware';
import { db } from '../db/connection';
import { dimRestaurant } from "../db/schema";
import { Restaurant } from '../types/db.types';
import { eq, desc } from 'drizzle-orm';

export const getRestaurants = async (): Promise<Restaurant[]> => {
    logger.info('[restaurant.dao][getRestaurants][START]');
    try {
        const restaurants = await db.select()
            .from(dimRestaurant);
        
        logger.info('[restaurant.dao][getRestaurants][SUCCESS]');
        return restaurants;
    } catch (error) {
        logger.error('[restaurant.dao][getRestaurants][ERROR]', { error });
        throw error;
    }
};

export const getRestaurantById = async (restaurantId: number): Promise<Restaurant | undefined> => {
    logger.info('[restaurant.dao][getRestaurantById][START]', { restaurantId });
    try {
        const restaurants = await db.select()
            .from(dimRestaurant)
            .where(eq(dimRestaurant.restaurantId, restaurantId))
            .limit(1);
        
        const restaurant = restaurants[0];
        logger.info('[restaurant.dao][getRestaurantById][SUCCESS]', { restaurant });
        return restaurant;
    } catch (error) {
        logger.error('[restaurant.dao][getRestaurantById][ERROR]', { error, restaurantId });
        throw error;
    }
};

export const createRestaurant = async (restaurantData: Omit<Restaurant, 'restaurantId' | 'createdAt' | 'updatedAt'>): Promise<Restaurant> => {
    logger.info('[restaurant.dao][createRestaurant][START]', { restaurantData });
    try {
        await db.insert(dimRestaurant)
            .values(restaurantData);
        
        // Get the newly created restaurant by name (since we don't have the ID)
        const restaurants = await db.select()
            .from(dimRestaurant)
            .where(eq(dimRestaurant.restaurantName, restaurantData.restaurantName))
            .limit(1);
        
        const newRestaurant = restaurants[0];
        if (!newRestaurant) {
            throw new Error('Failed to retrieve created restaurant');
        }
        
        logger.info('[restaurant.dao][createRestaurant][SUCCESS]', { newRestaurant });
        return newRestaurant;
    } catch (error) {
        logger.error('[restaurant.dao][createRestaurant][ERROR]', { error, restaurantData });
        throw error;
    }
};

export const updateRestaurant = async (restaurantId: number, restaurantData: Partial<Omit<Restaurant, 'restaurantId' | 'createdAt' | 'updatedAt'>>): Promise<Restaurant> => {
    logger.info('[restaurant.dao][updateRestaurant][START]', { restaurantId, restaurantData });
    try {
        await db.update(dimRestaurant)
            .set(restaurantData)
            .where(eq(dimRestaurant.restaurantId, restaurantId));
        
        // Get the updated restaurant
        const updatedRestaurant = await getRestaurantById(restaurantId);
        if (!updatedRestaurant) {
            throw new Error('Failed to retrieve updated restaurant');
        }
        
        logger.info('[restaurant.dao][updateRestaurant][SUCCESS]', { updatedRestaurant });
        return updatedRestaurant;
    } catch (error) {
        logger.error('[restaurant.dao][updateRestaurant][ERROR]', { error, restaurantId, restaurantData });
        throw error;
    }
};

export const deleteRestaurant = async (restaurantId: number): Promise<boolean> => {
    logger.info('[restaurant.dao][deleteRestaurant][START]', { restaurantId });
    try {
        await db.delete(dimRestaurant)
            .where(eq(dimRestaurant.restaurantId, restaurantId));
        
        logger.info('[restaurant.dao][deleteRestaurant][SUCCESS]', { restaurantId });
        return true;
    } catch (error) {
        logger.error('[restaurant.dao][deleteRestaurant][ERROR]', { error, restaurantId });
        throw error;
    }
};