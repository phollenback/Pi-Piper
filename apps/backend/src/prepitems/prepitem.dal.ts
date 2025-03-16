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
            kitchen_department_id: dimPrepItem.kitchenDepartmentId || 0,
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
            restaurant_id: item.restaurant_id || 0,
            kitchen_department_id: item.kitchen_department_id || 0
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
            kitchenDepartmentId: (item as any).kitchen_department_id || 0,
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
    logger.info('[prepitem.dao][updateDailyPrepItem][START]', { 
        restaurantId, 
        item: {
            name: item.name,
            status: item.status,
            quantity: item.quantity,
            note: item.note
        }
    });
    
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
            // If the prep item doesn't exist, create it first
            logger.info('[prepitem.dao][updateDailyPrepItem][CREATING_PREP_ITEM]', { 
                name: item.name, 
                restaurantId 
            });
            
            // Create the prep item
            const prepItemData = {
                name: item.name,
                description: item.description || '',
                itemCategory: item.category || 0,
                kitchenDepartmentId: (item as any).kitchen_department_id || 0,
                restaurantId: restaurantId,
            };
            
            await db.insert(dimPrepItem).values(prepItemData);
            
            // Get the newly created prep item
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
                
            if (!newPrepItems || newPrepItems.length === 0) {
                throw new Error(`Failed to create prep item "${item.name}" for restaurant ${restaurantId}`);
            }
            
            var prepItemId = newPrepItems[0].prepItemId;
        } else {
            var prepItemId = prepItems[0].prepItemId;
        }
        
        logger.info('[prepitem.dao][updateDailyPrepItem][PREP_ITEM_FOUND]', { prepItemId });
        
        // Get the current date in YYYYMMDD format
        const today = new Date();
        const dateId = parseInt(today.toISOString().split('T')[0].replace(/-/g, ''));
        
        // Get the current status before updating
        const currentItems = await db.select({
            status: factDailyPrepList.status,
            prepListId: factDailyPrepList.prepListId
        })
        .from(factDailyPrepList)
        .where(
            and(
                eq(factDailyPrepList.restaurantId, restaurantId),
                eq(factDailyPrepList.prepItemId, prepItemId),
                eq(factDailyPrepList.dateId, dateId)
            )
        )
        .limit(1);
        
        if (!currentItems || currentItems.length === 0) {
            // If the daily prep item doesn't exist, create it
            logger.info('[prepitem.dao][updateDailyPrepItem][CREATING_DAILY_PREP_ITEM]', { 
                name: item.name, 
                restaurantId,
                dateId
            });
            
            // Create the daily prep item with only the essential fields
            const dailyPrepItemData = {
                prepItemId: prepItemId,
                restaurantId: restaurantId,
                dateId: dateId,
                quantity: String(item.quantity || 0),
                status: item.status as 'complete' | 'todo' | 'in-progress' | 'pending',
                notes: item.note || null,
            };
            
            try {
                await db.insert(factDailyPrepList).values(dailyPrepItemData);
                logger.info('[prepitem.dao][updateDailyPrepItem][DAILY_PREP_ITEM_CREATED]');
            } catch (insertError) {
                logger.error('[prepitem.dao][updateDailyPrepItem][INSERT_ERROR]', { 
                    error: insertError instanceof Error ? insertError.message : 'Unknown error',
                    stack: insertError instanceof Error ? insertError.stack : undefined
                });
                
                // Try with a more minimal set of fields if the first attempt failed
                try {
                    const minimalData = {
                        prepItemId: prepItemId,
                        restaurantId: restaurantId,
                        dateId: dateId,
                        quantity: String(item.quantity || 0),
                        status: item.status as 'complete' | 'todo' | 'in-progress' | 'pending'
                    };
                    
                    await db.insert(factDailyPrepList).values(minimalData);
                    logger.info('[prepitem.dao][updateDailyPrepItem][MINIMAL_DAILY_PREP_ITEM_CREATED]');
                } catch (minimalInsertError) {
                    logger.error('[prepitem.dao][updateDailyPrepItem][MINIMAL_INSERT_ERROR]', { 
                        error: minimalInsertError instanceof Error ? minimalInsertError.message : 'Unknown error',
                        stack: minimalInsertError instanceof Error ? minimalInsertError.stack : undefined
                    });
                    throw new Error(`Failed to create daily prep item: ${minimalInsertError instanceof Error ? minimalInsertError.message : 'Unknown error'}`);
                }
            }
            
            var previousStatus = 'todo'; // Default status for new items
        } else {
            var previousStatus = currentItems[0]?.status || 'todo';
        }
        
        const newStatus = item.status;
        
        logger.info('[prepitem.dao][updateDailyPrepItem][STATUS_CHANGE]', { 
            previousStatus, 
            newStatus,
            prepListId: currentItems && currentItems.length > 0 ? currentItems[0].prepListId : 'new'
        });
        
        // Update the daily prep item with only essential fields
        try {
            await db.update(factDailyPrepList)
                .set({
                    quantity: String(item.quantity),
                    status: item.status as 'complete' | 'todo' | 'in-progress' | 'pending',
                    notes: item.note || null,
                    updatedAt: new Date()
                })
                .where(
                    and(
                        eq(factDailyPrepList.restaurantId, restaurantId),
                        eq(factDailyPrepList.prepItemId, prepItemId),
                        eq(factDailyPrepList.dateId, dateId)
                    )
                );
            
            logger.info('[prepitem.dao][updateDailyPrepItem][UPDATE_SUCCESS]');
        } catch (updateError) {
            logger.error('[prepitem.dao][updateDailyPrepItem][UPDATE_ERROR]', { 
                error: updateError instanceof Error ? updateError.message : 'Unknown error',
                stack: updateError instanceof Error ? updateError.stack : undefined
            });
            
            // Try with a more minimal set of fields if the first attempt failed
            try {
                await db.update(factDailyPrepList)
                    .set({
                        quantity: String(item.quantity),
                        status: item.status as 'complete' | 'todo' | 'in-progress' | 'pending'
                    })
                    .where(
                        and(
                            eq(factDailyPrepList.restaurantId, restaurantId),
                            eq(factDailyPrepList.prepItemId, prepItemId),
                            eq(factDailyPrepList.dateId, dateId)
                        )
                    );
                
                logger.info('[prepitem.dao][updateDailyPrepItem][MINIMAL_UPDATE_SUCCESS]');
            } catch (minimalUpdateError) {
                logger.error('[prepitem.dao][updateDailyPrepItem][MINIMAL_UPDATE_ERROR]', { 
                    error: minimalUpdateError instanceof Error ? minimalUpdateError.message : 'Unknown error',
                    stack: minimalUpdateError instanceof Error ? minimalUpdateError.stack : undefined
                });
                throw new Error(`Failed to update daily prep item: ${minimalUpdateError instanceof Error ? minimalUpdateError.message : 'Unknown error'}`);
            }
        }
        
        // If the item is being marked as complete, update inventory
        if (previousStatus !== 'complete' && newStatus === 'complete') {
            logger.info('[prepitem.dao][updateDailyPrepItem] Item marked as complete, updating inventory', { prepItemId, restaurantId });
            
            try {
                // Import and call the IngredientService to update inventory
                const { IngredientService } = require('../services/ingredient.service');
                const result = await IngredientService.updateInventoryFromPrepItem(prepItemId, restaurantId, 'complete');
                
                // Log any warnings or errors
                if (result.message) {
                    if (result.success) {
                        logger.info('[prepitem.dao][updateDailyPrepItem] Inventory update result:', { message: result.message });
                        
                        // If there are warnings about low stock or out of stock, add them to the prep item notes
                        if (result.message !== 'Inventory updated successfully') {
                            const updatedNotes = item.note 
                                ? `${item.note}\n\n${result.message}` 
                                : result.message;
                            
                            try {
                                await db.update(factDailyPrepList)
                                    .set({
                                        notes: updatedNotes
                                    })
                                    .where(
                                        and(
                                            eq(factDailyPrepList.restaurantId, restaurantId),
                                            eq(factDailyPrepList.prepItemId, prepItemId),
                                            eq(factDailyPrepList.dateId, dateId)
                                        )
                                    );
                            } catch (notesUpdateError) {
                                logger.error('[prepitem.dao][updateDailyPrepItem][NOTES_UPDATE_ERROR]', { 
                                    error: notesUpdateError instanceof Error ? notesUpdateError.message : 'Unknown error'
                                });
                                // Continue execution even if notes update fails
                            }
                        }
                    } else {
                        logger.error('[prepitem.dao][updateDailyPrepItem] Inventory update failed:', { message: result.message });
                    }
                }
            } catch (inventoryError) {
                logger.error('[prepitem.dao][updateDailyPrepItem][INVENTORY_UPDATE_ERROR]', { 
                    error: inventoryError instanceof Error ? inventoryError.message : 'Unknown error',
                    stack: inventoryError instanceof Error ? inventoryError.stack : undefined
                });
                // Continue execution even if inventory update fails
            }
        }
        
        // Get the updated daily prep items
        const updatedItems = await db.select({
            prep_list_id: factDailyPrepList.prepListId,
            name: dimPrepItem.name,
            description: dimPrepItem.description,
            quantity: factDailyPrepList.quantity,
            status: factDailyPrepList.status,
            notes: factDailyPrepList.notes,
            category: dimPrepItem.itemCategory,
            restaurant_id: dimPrepItem.restaurantId,
            date: sql<string>`DATE_FORMAT(${factDailyPrepList.dateId}, '%Y-%m-%d')`
        })
        .from(factDailyPrepList)
        .innerJoin(
            dimPrepItem,
            eq(factDailyPrepList.prepItemId, dimPrepItem.prepItemId)
        )
        .where(
            and(
                eq(factDailyPrepList.restaurantId, restaurantId),
                eq(dimPrepItem.name, item.name),
                eq(factDailyPrepList.dateId, dateId)
            )
        );
        
        // Map the response to include the note field
        const formattedItems = updatedItems.map(item => ({
            ...item,
            note: item.notes || '',
            kitchen_department_id: 0, // Default value if not available
            unit: 'units' // Default value if not available
        }));
        
        logger.info('[prepitem.dao][updateDailyPrepItem][SUCCESS]', { 
            itemCount: formattedItems.length 
        });
        
        return formattedItems as unknown as PrepListItem[];
    } catch (error) {
        logger.error('[prepitem.dao][updateDailyPrepItem][ERROR]', { 
            error: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined,
            item: {
                name: item.name,
                status: item.status
            }
        });
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

// Get a daily prep item by prep item ID, restaurant ID, and date ID
export const getDailyPrepItemByPrepId = async (prepItemId: number, restaurantId: number, dateId: number): Promise<any> => {
    logger.info('[prepitem.dao][getDailyPrepItemByPrepId][START]', { prepItemId, restaurantId, dateId });
    try {
        // Only select fields that exist in the database
        const dailyPrepItems = await db.select({
            prepListId: factDailyPrepList.prepListId,
            prepItemId: factDailyPrepList.prepItemId,
            restaurantId: factDailyPrepList.restaurantId,
            dateId: factDailyPrepList.dateId,
            quantity: factDailyPrepList.quantity,
            unit: factDailyPrepList.unit,
            status: factDailyPrepList.status,
            assignedTo: factDailyPrepList.assignedTo,
            completedBy: factDailyPrepList.completedBy,
            notes: factDailyPrepList.notes,
            createdAt: factDailyPrepList.createdAt,
            updatedAt: factDailyPrepList.updatedAt
        })
            .from(factDailyPrepList)
            .where(
                and(
                    eq(factDailyPrepList.prepItemId, prepItemId),
                    eq(factDailyPrepList.restaurantId, restaurantId),
                    eq(factDailyPrepList.dateId, dateId)
                )
            )
            .limit(1);
        
        if (dailyPrepItems && dailyPrepItems.length > 0) {
            logger.info('[prepitem.dao][getDailyPrepItemByPrepId][SUCCESS]', { dailyPrepItem: dailyPrepItems[0] });
            return dailyPrepItems[0];
        } else {
            logger.info('[prepitem.dao][getDailyPrepItemByPrepId][NOT_FOUND]', { prepItemId, restaurantId, dateId });
            return null;
        }
    } catch (error) {
        logger.error('[prepitem.dao][getDailyPrepItemByPrepId][ERROR]', { error });
        throw error;
    }
};

// Create a single daily prep item
export const createDailyPrepItemSingle = async (dailyPrepItemData: DailyPrepListInsert): Promise<any> => {
    logger.info('[prepitem.dao][createDailyPrepItemSingle][START]', { dailyPrepItemData });
    try {
        // Only include fields that exist in the database
        const insertData = {
            prepItemId: dailyPrepItemData.prepItemId,
            restaurantId: dailyPrepItemData.restaurantId,
            dateId: dailyPrepItemData.dateId,
            quantity: dailyPrepItemData.quantity,
            unit: dailyPrepItemData.unit,
            status: dailyPrepItemData.status,
            assignedTo: dailyPrepItemData.assignedTo,
            completedBy: dailyPrepItemData.completedBy,
            notes: dailyPrepItemData.notes,
        };
        
        const result = await db.insert(factDailyPrepList).values(insertData);
        logger.info('[prepitem.dao][createDailyPrepItemSingle][SUCCESS]', { result });
        return result;
    } catch (error) {
        logger.error('[prepitem.dao][createDailyPrepItemSingle][ERROR]', { error });
        throw error;
    }
};