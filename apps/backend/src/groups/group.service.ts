import * as GroupDal from './group.dal';
import { Group } from './group.model';

export const getGroups = async (restaurantId: string): Promise<Group[]> => {
  return await GroupDal.getGroups(restaurantId);
};

export const createGroup = async (
  name: string,
  restaurant_id: number,
  items: Array<{ prep_item_id: number | null; ingredient_id: number | null; }>
): Promise<Group> => {
  const groupId = await GroupDal.createGroup(name, restaurant_id, items);
  return { group_id: groupId, group_name: name, restaurant_id, items: [] };
}; 