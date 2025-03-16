import { Request, Response } from 'express';
import { RestaurantSettingsService } from '../services/restaurant-settings.service';
import { logger } from '../middleware/winston.middleware';

export class RestaurantSettingsController {
  /**
   * Get settings for a restaurant
   */
  static async getSettings(req: Request, res: Response) {
    try {
      const restaurantId = parseInt(req.params.restaurantId);
      
      if (isNaN(restaurantId)) {
        return res.status(400).json({ message: 'Invalid restaurant ID' });
      }
      
      const settings = await RestaurantSettingsService.getSettings(restaurantId);
      
      if (!settings) {
        return res.status(404).json({ message: 'Settings not found' });
      }
      
      return res.status(200).json(settings);
    } catch (error) {
      logger.error('[restaurant-settings.controller][getSettings][ERROR]', { error });
      return res.status(500).json({ message: 'Failed to retrieve restaurant settings', error });
    }
  }
  
  /**
   * Update the low stock threshold for a restaurant
   */
  static async updateLowStockThreshold(req: Request, res: Response) {
    try {
      const restaurantId = parseInt(req.params.restaurantId);
      const { threshold } = req.body;
      
      if (isNaN(restaurantId)) {
        return res.status(400).json({ message: 'Invalid restaurant ID' });
      }
      
      if (threshold === undefined || isNaN(threshold) || threshold < 0 || threshold > 100) {
        return res.status(400).json({ message: 'Invalid threshold value. Must be a number between 0 and 100.' });
      }
      
      const settings = await RestaurantSettingsService.updateLowStockThreshold(restaurantId, threshold);
      
      if (!settings) {
        return res.status(404).json({ message: 'Failed to update settings' });
      }
      
      return res.status(200).json({
        message: 'Low stock threshold updated successfully',
        settings
      });
    } catch (error) {
      logger.error('[restaurant-settings.controller][updateLowStockThreshold][ERROR]', { error });
      return res.status(500).json({ message: 'Failed to update low stock threshold', error });
    }
  }
} 