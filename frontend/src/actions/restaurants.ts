import axios from 'axios';
import toast from 'react-hot-toast';

export interface Restaurant {
  restaurantId: number;
  restaurantName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  email: string;
  logo: string;
  isActive: boolean;
}

export const fetchRestaurants = async (): Promise<Restaurant[]> => {
  try {
    const response = await axios.get<Restaurant[]>('http://localhost:3001/restaurants');
    return response.data;
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    toast.error('Failed to load restaurants');
    throw error;
  }
}; 