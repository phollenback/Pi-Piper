import { db } from '../db/connection';
import { dimRestaurantSettings } from '../db/schema';
import { eq } from 'drizzle-orm';
import { logger } from '../middleware/winston.middleware';
import { RestaurantSettings } from '../types/db.types';

/**
 * Service for managing restaurant settings
 */
export class RestaurantSettingsService {
  /**
   * Get settings for a restaurant
   * @param restaurantId - The restaurant ID
   * @returns The restaurant settings or null if not found
   */
  static async getSettings(restaurantId: number): Promise<RestaurantSettings | null> {
    try {
      logger.info('[restaurant-settings.service][getSettings][START]', { restaurantId });
      
      const settings = await db.select()
        .from(dimRestaurantSettings)
        .where(eq(dimRestaurantSettings.restaurantId, restaurantId))
        .limit(1);
      
      if (settings.length === 0) {
        // Create default settings if none exist
        const newSettings = await this.createDefaultSettings(restaurantId);
        logger.info('[restaurant-settings.service][getSettings][DEFAULT_CREATED]', { restaurantId, settings: newSettings });
        return newSettings;
      }
      
      logger.info('[restaurant-settings.service][getSettings][SUCCESS]', { restaurantId, settings: settings[0] });
      return settings[0];
    } catch (error) {
      logger.error('[restaurant-settings.service][getSettings][ERROR]', { restaurantId, error });
      throw error;
    }
  }
  
  /**
   * Update the low stock threshold for a restaurant
   * @param restaurantId - The restaurant ID
   * @param threshold - The new threshold percentage (0-100)
   * @returns The updated settings
   */
  static async updateLowStockThreshold(restaurantId: number, threshold: number): Promise<RestaurantSettings | null> {
    try {
      logger.info('[restaurant-settings.service][updateLowStockThreshold][START]', { restaurantId, threshold });
      
      // Ensure threshold is within valid range
      const validThreshold = Math.max(0, Math.min(100, threshold));
      
      // Check if settings exist
      const existingSettings = await db.select()
        .from(dimRestaurantSettings)
        .where(eq(dimRestaurantSettings.restaurantId, restaurantId))
        .limit(1);
      
      if (existingSettings.length === 0) {
        // Create new settings
        await db.insert(dimRestaurantSettings)
          .values({
            restaurantId,
            lowStockThreshold: validThreshold
          });
        
        logger.info('[restaurant-settings.service][updateLowStockThreshold][CREATED]', { restaurantId, threshold: validThreshold });
      } else {
        // Update existing settings
        await db.update(dimRestaurantSettings)
          .set({ lowStockThreshold: validThreshold })
          .where(eq(dimRestaurantSettings.restaurantId, restaurantId));
        
        logger.info('[restaurant-settings.service][updateLowStockThreshold][UPDATED]', { restaurantId, threshold: validThreshold });
      }
      
      // Fetch and return the updated settings
      const updatedSettings = await db.select()
        .from(dimRestaurantSettings)
        .where(eq(dimRestaurantSettings.restaurantId, restaurantId))
        .limit(1);
      
      return updatedSettings.length > 0 ? updatedSettings[0] : null;
    } catch (error) {
      logger.error('[restaurant-settings.service][updateLowStockThreshold][ERROR]', { restaurantId, threshold, error });
      throw error;
    }
  }
  
  /**
   * Create default settings for a restaurant
   * @param restaurantId - The restaurant ID
   * @returns The created settings
   */
  private static async createDefaultSettings(restaurantId: number): Promise<RestaurantSettings | null> {
    try {
      await db.insert(dimRestaurantSettings)
        .values({
          restaurantId,
          lowStockThreshold: 40 // Default 40%
        });
      
      // Fetch the newly created settings
      const settings = await db.select()
        .from(dimRestaurantSettings)
        .where(eq(dimRestaurantSettings.restaurantId, restaurantId))
        .limit(1);
      
      return settings.length > 0 ? settings[0] : null;
    } catch (error) {
      logger.error('[restaurant-settings.service][createDefaultSettings][ERROR]', { restaurantId, error });
      throw error;
    }
  }
} 