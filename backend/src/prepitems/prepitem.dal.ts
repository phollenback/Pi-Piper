import PrepListItem, { PrepItem } from "./prepitem.model";
import { execute } from '../services/pg.connector';
import { prepQueries } from './prepitems.queries';
import { logger } from '../middleware/winston.middleware';
import { addDays, format } from "date-fns";

// Retrieves all prep items for a given restaurant.
export const getPrepItems = async (restaurantId: number): Promise<PrepItem[]> => {
    logger.info('[prepitem.dao][getPrepItems][START]', { restaurantId });
    try {
        const prepItems = await execute<PrepItem[]>(prepQueries.getPrepItems, [restaurantId]);
        logger.info('[prepitem.dao][getPrepItems][SUCCESS]', { prepItems });
        return prepItems;
    } catch (error) {
        logger.error('[prepitem.dao][getPrepItems][ERROR]', { error });
        throw error;
    }
};

// Retrieves daily prep items for a given restaurant.
export const getDailyPrepItems = async (restaurantId: number): Promise<PrepItem[]> => {
    logger.info('[prepitem.dao][getDailyPrepItems][START]', { restaurantId });
    try {
        const prepItems = await execute<PrepItem[]>(prepQueries.getDailyPrepItems, [restaurantId]);
        logger.info('[prepitem.dao][getDailyPrepItems][SUCCESS]', { prepItems });
        return prepItems;
    } catch (error) {
        logger.error('[prepitem.dao][getDailyPrepItems][ERROR]', { error });
        throw error;
    }
};

// Creates a new prep item.
export const createPrepItem = async (restaurantId: number, item: PrepItem): Promise<PrepItem[]> => {
    logger.info('[prepitem.dao][createPrepItem][START]', { restaurantId, item });
    try {
        const results = await execute<PrepItem[]>(prepQueries.createPrepItem, [
            item.name,
            item.description,
            item.category,
            item.kitchen_department_id,
            restaurantId,
        ]);
        logger.info('[prepitem.dao][createPrepItem][SUCCESS]', { results });
        return results;
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
        const results = await Promise.all(items.map(async (item) => {
            const prepItemIds = await execute<{ prep_item_id: number }[]>(prepQueries.getPrepItemId, [item.name, restaurantId]);

            if (!prepItemIds || prepItemIds.length === 0) {
                logger.error('[prepitem.dao][createDailyPrepItems][PREP_ITEM_NOT_FOUND]', { itemName: item.name, restaurantId });
                throw new Error(`PrepItem "${item.name}" not found for restaurant ${restaurantId}`);
            }

            const prepItemId = prepItemIds[0].prep_item_id;

            return execute(prepQueries.createDailyPrepItems, [
                item.prep_list_id,
                restaurantId,
                prepItemId,
                item.quantity,
                item.unit,
                item.status,
                tomorrow,
            ]);
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
        const prepItems = await execute<PrepItem[]>(prepQueries.updatePrepItem, [
            itemData.name,
            itemData.description,
            itemData.category,
            itemData.kitchen_department_id,
            itemData.restaurant_id,
            prepItemId,
        ]);
        logger.info('[prepitem.dao][updatePrepItem][SUCCESS]', { prepItems });
        return prepItems;
    } catch (error) {
        logger.error('[prepitem.dao][updatePrepItem][ERROR]', { error });
        throw error;
    }
};

// Deletes a prep item.
export const deletePrepItem = async (prepItemId: number, restaurantId: number): Promise<PrepItem[]> => {
    logger.info('[prepitem.dao][deletePrepItem][START]', { prepItemId, restaurantId });
    try {
        const prepItems = await execute<PrepItem[]>(prepQueries.deletePrepItem, [prepItemId, restaurantId]);
        logger.info('[prepitem.dao][deletePrepItem][SUCCESS]', { prepItems });
        return prepItems;
    } catch (error) {
        logger.error('[prepitem.dao][deletePrepItem][ERROR]', { error });
        throw error;
    }
};

// Retrieves prep item ID by name and restaurant ID.  Improved error handling.
export const getPrepItemId = async (itemName: string, restaurantId: number): Promise<number | null> => {
    logger.info('[prepitem.dao][getPrepItemId][START]', { itemName, restaurantId });
    try {
        const prepItemIds = await execute<{ prep_item_id: number }[]>(prepQueries.getPrepItemId, [itemName, restaurantId]);
        if (prepItemIds && prepItemIds.length > 0) {
            return prepItemIds[0].prep_item_id;
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
        const result = await execute<PrepListItem[]>(prepQueries.updateDailyPrepItem, [item.quantity, item.status, restaurantId, item.name]);
        logger.info('[prepitem.dao][updateDailyPrepItem][SUCCESS]', { result });
        return result;
    } catch (error) {
        logger.error('[prepitem.dao][updateDailyPrepItem][ERROR]', { error });
        throw error;
    }
};