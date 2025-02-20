import Ingredient from "@/app/types/models/Ingredient";
import { PrepItem } from "@/app/types/models/PrepItem";

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
        name,
        restaurant_id,
        items: items.map(({ prep_item_id, ingredient_id }) => ({
          prep_item_id: prep_item_id || null,
          ingredient_id: ingredient_id || null
        }))
      })
    });

    const data = await response.json().catch(() => null);
    console.log('Response status:', response.status);
    console.log('Response data:', data);
    
    if (!response.ok) {
      throw new Error(
        `Failed to create group: ${response.status} ${response.statusText}${
          data ? ` - ${JSON.stringify(data)}` : ''
        }`
      );
    }

    return data.group_id;
  } catch (error) {
    console.error('Create group error:', error);
    throw error;
  }
};

export const getGroups = async (restaurant_id: number) => {
  const response = await fetch(`http://localhost:3000/groups/${restaurant_id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch groups');
  }
  return response.json();
};

export const getIngredients = async (restaurant_id: number) => {
    const response = await fetch(`http://localhost:3000/ingredients/${restaurant_id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json() as Promise<Ingredient[]>;
}

export const getPrepItems = async (restaurant_id: number) => {
    const response = await fetch(`http://localhost:3000/prepitems/${restaurant_id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json() as Promise<PrepItem[]>;
}