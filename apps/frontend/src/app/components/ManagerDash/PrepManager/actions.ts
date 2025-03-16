import { Group } from '@/app/types/models/Group';
import { PrepItem } from '@/app/types/models/PrepItem';
import Ingredient from '@/app/types/models/Ingredient';

export const getGroups = async (restaurantId: number): Promise<Group[]> => {
  const response = await fetch(`http://localhost:3000/groups/${restaurantId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch groups');
  }
  const groups = await response.json();
  return groups;
};

export const filterByGroup = (
  items: PrepItem[] | Ingredient[],
  groupId: number | null,
  type: 'prep_items' | 'ingredients',
  groups: Group[]
): typeof items => {
  if (!groupId) return items;
  
  const group = groups.find(g => g.group_id === groupId);
  if (!group) return items;

  return items.filter(item => {
    const itemId = type === 'prep_items' ? 
      (item as PrepItem).prep_item_id : 
      (item as Ingredient).ingredient_id;
    return group.items.some(groupItem => {
      if (type === 'prep_items') {
        return groupItem.prep_item?.id === itemId;
      } else {
        return groupItem.ingredient?.id === itemId;
      }
    });
  }) as typeof items;
}; 