import { execute } from '../services/pg.connector';
import { Group } from './group.model';
import { GROUP_QUERIES } from './group.queries';

export const createGroup = async (
  name: string,
  restaurant_id: number,
  items: Array<{ prep_item_id: number | null; ingredient_id: number | null; }>
): Promise<number> => {
  // First create the group
  const result = await execute<{insertId: number}>(
    GROUP_QUERIES.CREATE_GROUP,
    [name, restaurant_id]
  );
  
  const groupId = result.insertId;

  // Then create the group items using the new group ID
  if (items.length > 0) {
    for (const item of items) {
      await execute(
        GROUP_QUERIES.ADD_GROUP_ITEM,
        [
          groupId, 
          item.prep_item_id === null ? undefined : item.prep_item_id,
          item.ingredient_id === null ? undefined : item.ingredient_id
        ]
      );
    }
  }

  return groupId;
};

export const getGroups = async (restaurantId: string): Promise<Group[]> => {
  return await execute<Group[]>(
    GROUP_QUERIES.GET_GROUPS,
    [restaurantId]
  );
}; 