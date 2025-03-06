import PrepListItem, { PrepItem } from "./prepitem.model";
import { logger } from '../middleware/winston.middleware';
import { addDays, format } from "date-fns";
import { db } from '../db/connection';
import { dimPrepItem, factDailyPrepList } from "../db/schema";
import { eq, and, sql } from 'drizzle-orm';
import { PrepItem as DrizzlePrepItem, PrepItemInsert, DailyPrepListInsert } from '../types/db.types';

// Retrieves all prep items for a given restaurant.
export const getPrepItems = async (restaurantId: number): Promise<PrepItem[]> => {
    logger.info('[prepitem.dao][getPrepItems][START]', { restaurantId });
    try {
        const prepItems = await db.select()
            .from(dimPrepItem)
            .where(eq(dimPrepItem.restaurantId, restaurantId));
        
        // Map Drizzle PrepItem to the expected PrepItem format
        const formattedPrepItems = prepItems.map(item => ({
            prep_item_id: item.prepItemId,
            name: item.name,
            description: item.description || '',
            category: item.itemCategory || 0,
            kitchen_department_id: item.kitchenDepartmentId || 0,
            restaurant_id: item.restaurantId || 0,
        }));
        
        logger.info('[prepitem.dao][getPrepItems][SUCCESS]', { prepItemsCount: formattedPrepItems.length });
        return formattedPrepItems;
    } catch (error) {
        const err = error as any; // Type cast to any to access properties
        logger.error('[prepitem.dao][getPrepItems][ERROR]', { 
            error, 
            message: err.message,
            stack: err.stack
        });
        throw error;
    }
};

// Retrieves daily prep items for a given restaurant.
export const getDailyPrepItems = async (restaurantId: number): Promise<PrepListItem[]> => {
    logger.info('[prepitem.dao][getDailyPrepItems][START]', { restaurantId });
    try {
        const today = format(new Date(), 'yyyy-MM-dd');
        const dateId = parseInt(today.replace(/-/g, ''));

        const dailyPrepItems = await db.select({
            prep_list_id: factDailyPrepList.prepListId,
            name: dimPrepItem.name,
            description: dimPrepItem.description || '',
            note: factDailyPrepList.notes || '',
            quantity: factDailyPrepList.quantity,
            unit: factDailyPrepList.unit || 'units',
            status: factDailyPrepList.status,
            category: dimPrepItem.itemCategory || 0,
            restaurant_id: dimPrepItem.restaurantId || 0,
            date: sql<string>`DATE_FORMAT(${factDailyPrepList.dateId}, '%Y-%m-%d')`
        })
        .from(factDailyPrepList)
        .innerJoin(
            dimPrepItem,
            eq(factDailyPrepList.prepItemId, dimPrepItem.prepItemId)
        )
        .where(
            and(
                eq(dimPrepItem.restaurantId, restaurantId),
                eq(factDailyPrepList.dateId, dateId)
            )
        );

        return dailyPrepItems.map(item => ({
            ...item,
            quantity: parseFloat(item.quantity),
            description: item.description || '',
            note: item.note || '',
            unit: item.unit || 'units',
            status: item.status as 'todo' | 'complete' | 'in-progress' || 'todo',
            category: item.category || 0,
            restaurant_id: item.restaurant_id || 0
        }));
    } catch (error) {
        logger.error('[prepitem.dao][getDailyPrepItems][ERROR]', { error });
        throw error;
    }
};

// Creates a new prep item.
export const createPrepItem = async (restaurantId: number, item: PrepItem): Promise<PrepItem[]> => {
    logger.info('[prepitem.dao][createPrepItem][START]', { restaurantId, item });
    try {
        const prepItemData = {
            name: item.name,
            description: item.description,
            itemCategory: item.category,
            kitchenDepartmentId: item.kitchen_department_id,
            restaurantId: restaurantId,
        };
        
        await db.insert(dimPrepItem).values(prepItemData);
        
        const newPrepItems = await db.select()
            .from(dimPrepItem)
            .where(
                and(
                    eq(dimPrepItem.name, item.name),
                    eq(dimPrepItem.restaurantId, restaurantId)
                )
            )
            .orderBy(sql`${dimPrepItem.prepItemId} DESC`)
            .limit(1);
        
        const formattedPrepItems = newPrepItems.map(item => ({
            prep_item_id: item.prepItemId,
            name: item.name,
            description: item.description || '',
            category: item.itemCategory || 0,
            kitchen_department_id: item.kitchenDepartmentId || 0,
            restaurant_id: item.restaurantId || 0,
        }));
        
        logger.info('[prepitem.dao][createPrepItem][SUCCESS]', { formattedPrepItems });
        return formattedPrepItems;
    } catch (error) {
        logger.error('[prepitem.dao][createPrepItem][ERROR]', { error });
        throw error;
    }
};

// Creates daily prep items. Uses Promise.all for better performance.
export const createDailyPrepItems = async (restaurantId: number, items: PrepListItem[]): Promise<any[]> => {
    logger.info('[prepitem.dao][createDailyPrepItems][START]', { restaurantId, itemsCount: items.length });
    try {
        const tomorrow = format(addDays(new Date(), 1), 'yyyy-MM-dd');
        const dateId = parseInt(tomorrow.replace(/-/g, ''));
        
        const results = await Promise.all(items.map(async (item) => {
            // Get prep item ID
            const prepItems = await db.select()
                .from(dimPrepItem)
                .where(
                    and(
                        eq(dimPrepItem.name, item.name),
                        eq(dimPrepItem.restaurantId, restaurantId)
                    )
                )
                .limit(1);
            
            if (!prepItems || prepItems.length === 0) {
                logger.error('[prepitem.dao][createDailyPrepItems][PREP_ITEM_NOT_FOUND]', { itemName: item.name, restaurantId });
                throw new Error(`PrepItem "${item.name}" not found for restaurant ${restaurantId}`);
            }
            
            const prepItemId = prepItems[0].prepItemId;
            
            // Create daily prep item
            const dailyPrepItemData: DailyPrepListInsert = {
                prepItemId: prepItemId,
                restaurantId: restaurantId,
                dateId: dateId,
                quantity: String(item.quantity),
                status: item.status as 'complete' | 'todo' | 'in-progress' | 'pending',
                notes: item.note || null,
            };
            
            return db.insert(factDailyPrepList).values(dailyPrepItemData);
        }));
        
        logger.info('[prepitem.dao][createDailyPrepItems][SUCCESS]', { results });
        return results;
    } catch (error) {
        logger.error('[prepitem.dao][createDailyPrepItems][ERROR]', { error });
        throw error;
    }
};

// Updates an existing prep item.
export const updatePrepItem = async (prepItemId: number, itemData: PrepItem): Promise<PrepItem[]> => {
    logger.info('[prepitem.dao][updatePrepItem][START]', { prepItemId, itemData });
    try {
        await db.update(dimPrepItem)
            .set({
                name: itemData.name,
                description: itemData.description,
                itemCategory: itemData.category,
                kitchenDepartmentId: itemData.kitchen_department_id,
            })
            .where(eq(dimPrepItem.prepItemId, prepItemId));
        
        const updatedPrepItems = await db.select()
            .from(dimPrepItem)
            .where(eq(dimPrepItem.prepItemId, prepItemId));
        
        const formattedPrepItems = updatedPrepItems.map(item => ({
            prep_item_id: item.prepItemId,
            name: item.name,
            description: item.description || '',
            category: item.itemCategory || 0,
            kitchen_department_id: item.kitchenDepartmentId || 0,
            restaurant_id: item.restaurantId || 0,
        }));
        
        logger.info('[prepitem.dao][updatePrepItem][SUCCESS]', { formattedPrepItems });
        return formattedPrepItems;
    } catch (error) {
        logger.error('[prepitem.dao][updatePrepItem][ERROR]', { error });
        throw error;
    }
};

// Deletes a prep item.
export const deletePrepItem = async (prepItemId: number, restaurantId: number): Promise<PrepItem[]> => {
    logger.info('[prepitem.dao][deletePrepItem][START]', { prepItemId, restaurantId });
    try {
        // Get the prep item before deletion for return value
        const prepItemsToDelete = await db.select()
            .from(dimPrepItem)
            .where(
                and(
                    eq(dimPrepItem.prepItemId, prepItemId),
                    eq(dimPrepItem.restaurantId, restaurantId)
                )
            );
        
        // Delete the prep item
        await db.delete(dimPrepItem)
            .where(
                and(
                    eq(dimPrepItem.prepItemId, prepItemId),
                    eq(dimPrepItem.restaurantId, restaurantId)
                )
            );
        
        // Map to expected format
        const formattedPrepItems = prepItemsToDelete.map(item => ({
            prep_item_id: item.prepItemId,
            name: item.name,
            description: item.description || '',
            category: item.itemCategory || 0,
            kitchen_department_id: item.kitchenDepartmentId || 0,
            restaurant_id: item.restaurantId || 0,
        }));
        
        logger.info('[prepitem.dao][deletePrepItem][SUCCESS]', { formattedPrepItems });
        return formattedPrepItems;
    } catch (error) {
        logger.error('[prepitem.dao][deletePrepItem][ERROR]', { error });
        throw error;
    }
};

// Retrieves prep item ID by name and restaurant ID.  Improved error handling.
export const getPrepItemId = async (itemName: string, restaurantId: number): Promise<number | null> => {
    logger.info('[prepitem.dao][getPrepItemId][START]', { itemName, restaurantId });
    try {
        const prepItems = await db.select()
            .from(dimPrepItem)
            .where(
                and(
                    eq(dimPrepItem.name, itemName),
                    eq(dimPrepItem.restaurantId, restaurantId)
                )
            )
            .limit(1);
        
        if (prepItems && prepItems.length > 0) {
            return prepItems[0].prepItemId;
        } else {
            logger.warn('[prepitem.dao][getPrepItemId][PREP_ITEM_NOT_FOUND]', { itemName, restaurantId });
            return null; // Return null if not found, instead of throwing an error
        }
    } catch (error) {
        logger.error('[prepitem.dao][getPrepItemId][ERROR]', { error });
        throw error;
    }
};

// Updates a daily prep item.
export const updateDailyPrepItem = async (restaurantId: number, item: PrepListItem): Promise<PrepListItem[]> => {
    logger.info('[prepitem.dao][updateDailyPrepItem][START]', { item, restaurantId });
    try {
        // First get the prep item ID
        const prepItems = await db.select()
            .from(dimPrepItem)
            .where(
                and(
                    eq(dimPrepItem.name, item.name),
                    eq(dimPrepItem.restaurantId, restaurantId)
                )
            )
            .limit(1);
        
        if (!prepItems || prepItems.length === 0) {
            throw new Error(`PrepItem "${item.name}" not found for restaurant ${restaurantId}`);
        }
        
        const prepItemId = prepItems[0].prepItemId;
        
        // Update the daily prep item
        await db.update(factDailyPrepList)
            .set({
                quantity: String(item.quantity),
                status: item.status as 'complete' | 'todo' | 'in-progress' | 'pending',
                updatedAt: new Date()
            })
            .where(
                and(
                    eq(factDailyPrepList.restaurantId, restaurantId),
                    eq(factDailyPrepList.prepItemId, prepItemId)
                )
            );
        
        // Get the updated daily prep items
        const updatedItems = await db.select({
            dailyPrepId: factDailyPrepList.prepListId,
            name: dimPrepItem.name,
            description: dimPrepItem.description,
            quantity: factDailyPrepList.quantity,
            status: factDailyPrepList.status,
            category: dimPrepItem.itemCategory,
            restaurantId: dimPrepItem.restaurantId,
            dateId: factDailyPrepList.dateId
        })
        .from(factDailyPrepList)
        .innerJoin(
            dimPrepItem,
            eq(factDailyPrepList.prepItemId, dimPrepItem.prepItemId)
        )
        .where(
            and(
                eq(factDailyPrepList.restaurantId, restaurantId),
                eq(dimPrepItem.name, item.name)
            )
        );
        
        logger.info('[prepitem.dao][updateDailyPrepItem][SUCCESS]', { updatedItems });
        return updatedItems as unknown as PrepListItem[];
    } catch (error) {
        logger.error('[prepitem.dao][updateDailyPrepItem][ERROR]', { error });
        throw error;
    }
};

export const populateDailyPrepItems = async (restaurantId: number, dateId: number): Promise<void> => {
    logger.info('[prepitem.dao][populateDailyPrepItems][START]', { restaurantId, dateId });
    try {
        // Fetch all prep items for the restaurant
        const prepItems = await db.select()
            .from(dimPrepItem)
            .where(eq(dimPrepItem.restaurantId, restaurantId));

        // Create daily prep items for each prep item
        await Promise.all(prepItems.map(async (item) => {
            const dailyPrepItemData: DailyPrepListInsert = {
                prepItemId: item.prepItemId,
                restaurantId: restaurantId,
                dateId: dateId,
                quantity: '0', // Default quantity
                status: 'todo', // Default status
                notes: null, // No notes initially
            };
            await db.insert(factDailyPrepList).values(dailyPrepItemData);
        }));

        logger.info('[prepitem.dao][populateDailyPrepItems][SUCCESS]', { prepItemsCount: prepItems.length });
    } catch (error) {
        logger.error('[prepitem.dao][populateDailyPrepItems][ERROR]', { error });
        throw error;
    }
};