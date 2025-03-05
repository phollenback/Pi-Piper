import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Category } from '@/app/types/models/Category';

export const useCategories = (restaurantId?: number) => {
  return useQuery({
    queryKey: ['categories', restaurantId],
    queryFn: async (): Promise<Category[]> => {
      const { data } = await axios.get('http://localhost:3001/categories', {
        params: { restaurantId }
      });
      return data as Category[];
    },
    enabled: !!restaurantId
  });
}; 