import { Group } from '@/app/types/models/Group';
import { PrepItem } from '@/app/types/models/PrepItem';
import Ingredient from '@/app/types/models/Ingredient';

// Get all groups for a restaurant
export const getGroups = async (restaurantId: number): Promise<Group[]> => {
  const response = await fetch(`http://localhost:3000/groups/${restaurantId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch groups');
  }
  return response.json();
};

// Create a new group
export const createGroup = async (
  name: string,
  restaurant_id: number,
  items: Array<{ prep_item_id: number | null; ingredient_id: number | null; }>
): Promise<number> => {
  try {
    const response = await fetch(`http://localhost:3000/groups/${restaurant_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        group_name: name,
        items: items
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create group');
    }

    const data = await response.json();
    return data.group_id;
  } catch (error) {
    console.error('Error creating group:', error);
    throw error;
  }
};

// Filter items by group
export const filterByGroup = <T extends PrepItem[] | Ingredient[]>(
  items: T, 
  groupId: number | null
): T => {
  if (!groupId) return items;
  
  // Implementation depends on your data structure
  // This is a placeholder - you'll need to implement the actual filtering logic
  // For now, we're just returning the original items
  // When implementing, you'll need to check if each item belongs to the specified group
  return items;
}; 