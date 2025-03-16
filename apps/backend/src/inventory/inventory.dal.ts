import { ingredientQueries } from "../ingredients/ingredient.queries";
import { logger } from "../middleware/winston.middleware";
import { execute } from "../services/pg.connector";


export const completeInventoryTransaction = async (itemName: string, restaurantId: number) => {
    logger.info('[prepitem.dao][getPrepItemId][START]', { itemName, restaurantId });
    try {
        const prepItemId = await execute(ingredientQueries.getPrepItemId, [itemName, restaurantId]);
        const prepItems = await execute(prepQueries.getDailyPrepItems, [restaurantId]);
        logger.info('[prepitem.dao][createDailyPrepItems][SUCCESS]', { prepItems });
        return prepItems;
    } catch (error) {
        logger.error('[prepitem.dao][createDailyPrepItems][ERROR]', { error });
        throw error;
    }
};

export const cancelInventoryTransaction = async (restaurantId: number, item : PrepListItem) => {
    logger.info('[prepitem.dao][updateDailyPrepItem][START]', { item, restaurantId });
    try {
        const result = await execute(prepQueries.updateDailyPrepItem, [item.quantity, item.status, restaurantId, item.name]);
        logger.info('[prepitem.dao][updateDailyPrepItems][SUCCESS]', { result });
        return result;
    } catch (error) {
        logger.error('[prepitem.dao][updateDailyPrepItems][ERROR]', { error });
        throw error;
    }
}
