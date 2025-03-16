export const fetchAllRestaurants = async () => {
  const response = await fetch('http://localhost:3001/restaurants');
  if (!response.ok) throw new Error('Failed to fetch restaurants');
  return response.json();
};

export interface Restaurant {
  restaurantId: number;
  restaurantName: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  phone?: string;
  email?: string;
  isActive: boolean;
}

export interface RestaurantDetails {
  restaurant: Restaurant;
  metrics: {
    inventory: {
      totalItems: number;
      outOfStock: number;
      lowStock: number;
      inStock: number;
    }
  }
}

export const fetchRestaurantDetails = async (restaurantId: number): Promise<RestaurantDetails> => {
  const response = await fetch(`http://localhost:3001/restaurants/details/${restaurantId}`);
  if (!response.ok) throw new Error('Failed to fetch restaurant details');
  return response.json();
};

export const fetchRestaurantComparison = async (restaurantIds: number[]) => {
  const response = await fetch('http://localhost:3001/restaurants/compare', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ restaurantIds }),
  });
  
  if (!response.ok) throw new Error('Failed to fetch restaurant comparison data');
  return response.json();
}; 