import  { PrepItem }  from "./prepitem.model";
import { execute } from '../services/pg.connector';
import { prepQueries } from './prepitems.queries';


export const getPrepItems = async (prepItemId : number)  => {
    console.log('[restaurant.dao][getPrepItems][DAL] ');
    console.log('fetching prep items for restaurant: ', prepItemId);
    return execute<PrepItem[]>(prepQueries.getPrepItems, [prepItemId]);
};

export const createPrepItem = async (restaurantId : number, itemData: PrepItem)  => {
    console.log('[restaurant.dao][createPrepItem][DAL] ');
    console.log(`Creating new prep item : ${itemData.prep_item_name} for restaurant ${restaurantId}`);
    return execute<PrepItem[]>(prepQueries.createPrepItem, [itemData.prep_item_name, itemData.description, itemData.item_category, itemData.kitchen_department_id, restaurantId]);
};

export const updatePrepItem = async (prepItemId : number, itemData: PrepItem)  => {
    console.log('[restaurant.dao][updatePrepItem][DAL] ');
    console.log(`Updating new prep item : ${itemData.prep_item_name} for item ${prepItemId}`);
    return execute<PrepItem[]>(prepQueries.updatePrepItem, [itemData.prep_item_name, itemData.description, itemData.item_category, itemData.kitchen_department_id, itemData.restaurant_id, prepItemId]);
};

export const deletePrepItem = async (prepItemId : number, restaurantId: number)  => {
    console.log('[prepitem.dao][delete][DAL] ');
    console.log(`Deleting prep item : ${prepItemId} from restaurant : ${restaurantId}`);
    return execute<PrepItem[]>(prepQueries.deletePrepItem, [prepItemId, restaurantId]);
};