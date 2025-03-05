import { useState, useEffect } from 'react';
import { fetchRestaurants, Restaurant } from '@/actions/restaurants';

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const data = await fetchRestaurants();
        setRestaurants(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to load restaurants');
      } finally {
        setLoading(false);
      }
    };

    getRestaurants();
  }, []);

  return { restaurants, loading, error };
}; 