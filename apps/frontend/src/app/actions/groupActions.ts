import { Group } from '@/app/types/models/Group';


// Get all groups for a restaurant
export const getGroups = async (restaurantId: number): Promise<Group[]> => {
  const response = await fetch(`http://localhost:3001/groups/${restaurantId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch groups');
  }
  return response.json();
};

// Create a new group
export const createGroup = async (
  name: string,
  restaurantId: number,
  items: Array<{ prep_item_id: number | null; ingredient_id: number | null; }>
): Promise<number> => {
  const response = await fetch(`http://localhost:3001/groups/${restaurantId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      restaurant_id: restaurantId,
      items: items.map(item => ({
        prep_item_id: item.prep_item_id,
        ingredient_id: item.ingredient_id
      }))
    }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to create group');
  }
  return (await response.json()).group_id;
};
