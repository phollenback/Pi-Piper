import PrepListItem, { PrepItem } from "./prepitem.model";
import { execute } from '../services/pg.connector';
import { prepQueries } from './prepitems.queries';
import { logger } from '../middleware/winston.middleware';

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

export const createPrepItem = async (restaurantId: number, items: PrepItem[]) => {
    logger.info('[prepitem.dao][createPrepItems][START]', { restaurantId, items });
    try {
        const promises = items.map((item) =>
            execute<PrepItem[]>(prepQueries.createDailyPrepItems, [
                item.prep_item_name,
                item.description,
                item.category,
                item.kitchen_department_id,
                restaurantId
            ])
        );
        const results = await Promise.all(promises); // Executes all insertions concurrently
        logger.info('[prepitem.dao][createPrepItems][SUCCESS]', { results });
        return results.flat(); // Flatten results into a single array
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

            // Get the prep_item_id for the given name and restaurant
            const prepItemIds = await execute<any[]>(prepQueries.getPrepItemId, [item.name, restaurantId]);
            console.log('[prepitem.dao][createDailyPrepItems][PREP_ITEM_IDS]', { prepItemIds });

            if (!prepItemIds || prepItemIds.length === 0) {
                console.error('[prepitem.dao][createDailyPrepItems][PREP_ITEM_NOT_FOUND]', {
                    itemName: item.name,
                    restaurantId,
                });
                throw new Error(`PrepItem "${item.name}" not found for restaurant ${restaurantId}`);
            }

            const prepItemId = Number(prepItemIds[0].prep_item_id); // Extract and convert the prep_item_id to a number
            console.log('[prepitem.dao][createDailyPrepItems][PREP_ITEM_ID]', { prepItemId });

            // Insert into fact_daily_prep_list
            const result = await execute(prepQueries.createDailyPrepItems, [
                item.id,
                restaurantId,
                prepItemId, // Ensure this is passed correctly
                item.quantity,
                item.unit,
                item.status,
                item.date, // Use the date from the item
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
            itemData.prep_item_name,
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