import PrepListItem, { PrepItem } from "./prepitem.model";
import { execute } from '../services/pg.connector';
import { prepQueries } from './prepitems.queries';
import { logger } from '../middleware/winston.middleware';
import { addDays } from "date-fns";

export const getPrepItems = async (restaurantId: number) => {
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

export const getDailyPrepItems = async (restaurantId: number) => {
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

export const createPrepItem = async (restaurantId: number, item: PrepItem) => {
    logger.info('[prepitem.dao][createPrepItems][START]', { restaurantId, item });
    try {
        const results = execute<PrepItem[]>(prepQueries.createPrepItem, [
                item.name,
                item.description,
                item.category,
                item.kitchen_department_id,
                restaurantId
            ]);
        logger.info('[prepitem.dao][createPrepItems][SUCCESS]', { results });
        return results; 
    } catch (error) {
        logger.error('[prepitem.dao][createPrepItems][ERROR]', { error });
        throw error;
    }
};

export const createDailyPrepItems = async (restaurantId: number, items: PrepListItem[]) => {
    console.log('[prepitem.dao][createDailyPrepItems][START]', { restaurantId });

    try {
        const prepItems = [];

        for (let item of items) {
            console.log('[prepitem.dao][createDailyPrepItems][ITEM]', { item });

            const prepItemIds = await execute<any[]>(prepQueries.getPrepItemId, [item.name, restaurantId]);
            console.log('[prepitem.dao][createDailyPrepItems][PREP_ITEM_IDS]', { prepItemIds });

            if (!prepItemIds || prepItemIds.length === 0) {
                console.error('[prepitem.dao][createDailyPrepItems][PREP_ITEM_NOT_FOUND]', {
                    itemName: item.name,
                    restaurantId,
                });
                throw new Error(`PrepItem "${item.name}" not found for restaurant ${restaurantId}`);
            }

            const prepItemId = Number(prepItemIds[0].prep_item_id);
            console.log('[prepitem.dao][createDailyPrepItems][PREP_ITEM_ID]', { prepItemId });

            const tomorrow = addDays(new Date(), 1); // Get tomorrow's date
            const formattedDate = tomorrow.toISOString().split('T')[0]; // Format date as YYYY-MM-DD

            const result = await execute(prepQueries.createDailyPrepItems, [
                item.prep_list_id,
                restaurantId,
                prepItemId,
                item.quantity,
                item.unit,
                item.status,
                formattedDate // Pass the formatted date
            ]);
            console.log('[prepitem.dao][createDailyPrepItems][INSERT_RESULT]', { result });

            prepItems.push(result);
        }

        console.log('[prepitem.dao][createDailyPrepItems][SUCCESS]', { prepItems });
        return prepItems;
    } catch (error) {
        console.error('[prepitem.dao][createDailyPrepItems][ERROR]', { error });
        throw error;
    }
};


export const updatePrepItem = async (prepItemId: number, itemData: PrepItem) => {
    logger.info('[prepitem.dao][updatePrepItem][START]', { prepItemId, itemData });
    try {
        const prepItems = await execute<PrepItem[]>(prepQueries.updatePrepItem, [
            itemData.name,
            itemData.description,
            itemData.category,
            itemData.kitchen_department_id,
            itemData.restaurant_id,
            prepItemId
        ]);
        logger.info('[prepitem.dao][updatePrepItem][SUCCESS]', { prepItems });
        return prepItems;
    } catch (error) {
        logger.error('[prepitem.dao][updatePrepItem][ERROR]', { error });
        throw error;
    }
};

export const deletePrepItem = async (prepItemId: number, restaurantId: number) => {
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


export const getPrepItemId = async (itemName: string, restaurantId: number) => {
    logger.info('[prepitem.dao][getPrepItemId][START]', { itemName, restaurantId });
    try {
        const prepItemId = await execute<number>(prepQueries.getPrepItemId, [itemName, restaurantId]);
        const prepItems = await execute<PrepItem[]>(prepQueries.getDailyPrepItems, [restaurantId]);
        logger.info('[prepitem.dao][createDailyPrepItems][SUCCESS]', { prepItems });
        return prepItems;
    } catch (error) {
        logger.error('[prepitem.dao][createDailyPrepItems][ERROR]', { error });
        throw error;
    }
};

export const updateDailyPrepItem = async (restaurantId: number, item : PrepListItem) => {
    logger.info('[prepitem.dao][updateDailyPrepItem][START]', { item, restaurantId });
    try {
        const result = await execute<PrepListItem[]>(prepQueries.updateDailyPrepItem, [item.quantity, item.status, restaurantId, item.prep_list_id]);
        logger.info('[prepitem.dao][updateDailyPrepItems][SUCCESS]', { result });
        return result;
    } catch (error) {
        logger.error('[prepitem.dao][updateDailyPrepItems][ERROR]', { error });
        throw error;
    }
}
