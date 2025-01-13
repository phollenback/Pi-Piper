import { PrepItem } from "./prepitem.model";
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

export const createPrepItem = async (restaurantId: number, itemData: PrepItem) => {
    logger.info('[prepitem.dao][createPrepItem][START]', { restaurantId, itemData });
    try {
        const prepItems = await execute<PrepItem[]>(prepQueries.createPrepItem, [
            itemData.prep_item_name,
            itemData.description,
            itemData.item_category,
            itemData.kitchen_department_id,
            restaurantId
        ]);
        logger.info('[prepitem.dao][createPrepItem][SUCCESS]', { prepItems });
        return prepItems;
    } catch (error) {
        logger.error('[prepitem.dao][createPrepItem][ERROR]', { error });
        throw error;
    }
};

export const updatePrepItem = async (prepItemId: number, itemData: PrepItem) => {
    logger.info('[prepitem.dao][updatePrepItem][START]', { prepItemId, itemData });
    try {
        const prepItems = await execute<PrepItem[]>(prepQueries.updatePrepItem, [
            itemData.prep_item_name,
            itemData.description,
            itemData.item_category,
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