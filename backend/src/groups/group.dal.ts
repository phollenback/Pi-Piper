import { query} from '../db/connection';
import { Group } from './group.model';
import { GROUP_QUERIES } from './group.queries';

export const createGroup = async (
  name: string,
  restaurant_id: number,
  items: Array<{ prep_item_id: number | null; ingredient_id: number | null; }>
): Promise<number> => {
  // First create the group
  const [result] = await query(GROUP_QUERIES.CREATE_GROUP, [name, restaurant_id]);
  const groupId = (result as { insertId: number }).insertId;
  // Then create the group items using the new group ID
  if (items.length > 0) {
    for (const item of items) {
      await query(
        GROUP_QUERIES.ADD_GROUP_ITEM,
        [
          groupId, 
          item.prep_item_id ?? item.ingredient_id,
          item.prep_item_id ? 'prep_item' : 'ingredient'
        ]
      );
    }
  }

  return groupId;
};

export const getGroups = async (restaurantId: string): Promise<Group[]> => {
  const [rows] = await query(GROUP_QUERIES.GET_GROUPS, [restaurantId]);
  return rows as Group[];
}; 