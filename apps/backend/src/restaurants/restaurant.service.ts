import { getRestaurants, getRestaurantById } from './restaurant.dao';
import { Restaurant, InventoryStatusItem } from '../types/db.types';
import { IngredientService } from '../services/ingredient.service';

export class RestaurantService {
  static async getAllRestaurants(): Promise<Restaurant[]> {
    // Implementation to get all restaurants
    const restaurants = await getRestaurants();
    return restaurants;
  }
  
  static async getRestaurantById(restaurantId: number): Promise<Restaurant | undefined> {
    const restaurant = await getRestaurantById(restaurantId);
    return restaurant;
  }
  
  static async getRestaurantDetails(restaurantId: number) {
    // Get comprehensive details for a single restaurant
    const restaurant = await getRestaurantById(restaurantId);
    
    if (!restaurant) {
      throw new Error(`Restaurant with ID ${restaurantId} not found`);
    }
    
    // Get inventory status
    const inventoryStatus = await IngredientService.getInventoryStatus(restaurantId);
    
    // Calculate inventory metrics
    const outOfStockCount = inventoryStatus.filter(item => 
      item.quantityAfter === null || item.quantityAfter === '0.00' || parseFloat(item.quantityAfter) === 0
    ).length;
    
    const lowStockCount = inventoryStatus.filter(item => {
      if (item.quantityAfter === null || item.quantityAfter === '0.00' || parseFloat(item.quantityAfter) === 0) {
        return false;
      }
      const quantity = parseFloat(item.quantityAfter);
      const threshold = item.quantityThreshold || 0;
      return quantity <= threshold;
    }).length;
    
    // Return comprehensive restaurant details
    return {
      restaurant,
      metrics: {
        inventory: {
          totalItems: inventoryStatus.length,
          outOfStock: outOfStockCount,
          lowStock: lowStockCount,
          inStock: inventoryStatus.length - outOfStockCount - lowStockCount
        }
      }
    };
  }
  
  static async getRestaurantComparison(restaurantIds: number[]) {
    // Get comparison data for multiple restaurants
    const comparisonData: {
      restaurants: Restaurant[];
      inventoryComparison: any[];
      prepComparison: any[];
      performanceMetrics: any[];
    } = {
      restaurants: [],
      inventoryComparison: [],
      prepComparison: [],
      performanceMetrics: []
    };
    
    // Get basic restaurant info
    for (const id of restaurantIds) {
      const restaurant = await getRestaurantById(id);
      if (restaurant) {
        comparisonData.restaurants.push(restaurant);
      }
    }
    
    // Additional comparison data would be fetched here
    // This would involve calling other services to get inventory, prep, and performance data
    
    return comparisonData;
  }
} 