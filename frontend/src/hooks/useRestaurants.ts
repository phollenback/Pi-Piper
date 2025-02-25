import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get<Restaurant[]>('/api/restaurants');
        setRestaurants(response.data);
      } catch (err) {
        setError('Failed to load restaurants');
        toast.error('Failed to load restaurants');
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return { restaurants, loading, error };
}; 