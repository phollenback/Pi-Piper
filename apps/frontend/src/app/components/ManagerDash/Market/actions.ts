import { Group } from '@/app/types/models/Group';

export const getGroups = async (restaurantId: number): Promise<Group[]> => {
  const response = await fetch(`http://localhost:3000/groups/${restaurantId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch groups');
  }
  return response.json();
}; 