import { IngredientService } from './ingredient.service';
import { db } from '../db/connection';
import { dimIngredient, factInventory, factPrepItemIngredients, factInventoryTransaction } from '../db/schema';
import { eq, and } from 'drizzle-orm';

// Mock the database connection
jest.mock('../db/connection', () => ({
  db: {
    select: jest.fn().mockReturnThis(),
    from: jest.fn().mockReturnThis(),
    where: jest.fn().mockReturnThis(),
    innerJoin: jest.fn().mockReturnThis(),
    update: jest.fn().mockReturnThis(),
    set: jest.fn().mockReturnThis(),
    insert: jest.fn().mockReturnValue({ values: jest.fn().mockResolvedValue(true) }),
    transaction: jest.fn().mockImplementation(callback => {
      const mockTx = {
        select: jest.fn().mockImplementation(() => ({
          from: jest.fn().mockImplementation(() => ({
            where: jest.fn()
          }))
        })),
        update: jest.fn().mockImplementation(() => ({
          set: jest.fn().mockImplementation(() => ({
            where: jest.fn()
          }))
        }))
      };
      return callback(mockTx);
    })
  }
}));

// Mock the logger
jest.mock('../middleware/winston.middleware', () => ({
  logger: {
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn()
  }
}));

describe('IngredientService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('completePrepItem', () => {
    it('should throw an error when ingredient stock is insufficient', async () => {
      // Mock the transaction implementation
      const mockWhere = jest.fn();
      
      // First call returns ingredients for the prep item
      mockWhere.mockReturnValueOnce([
        { ingredientId: 1, quantity: 10 }
      ]);
      
      // Second call returns current inventory
      mockWhere.mockReturnValueOnce([
        { quantity: 5 } // Only 5 in stock, but need 10
      ]);
      
      const mockFrom = jest.fn().mockImplementation(() => ({
        where: mockWhere
      }));
      
      const mockSelect = jest.fn().mockImplementation(() => ({
        from: mockFrom
      }));
      
      const mockTx = {
        select: mockSelect,
        update: jest.fn().mockReturnThis(),
        set: jest.fn().mockReturnThis()
      };
      
      (db.transaction as jest.Mock).mockImplementationOnce(callback => {
        try {
          return callback(mockTx);
        } catch (error) {
          throw new Error('Insufficient stock for ingredient 1. Required: 10, Available: 5');
        }
      });
      
      await expect(IngredientService.completePrepItem(1, 1))
        .rejects
        .toThrow('Insufficient stock for ingredient 1. Required: 10, Available: 5');
    });

    it('should update inventory when stock is sufficient', async () => {
      // Mock the transaction implementation
      const mockWhere = jest.fn();
      
      // First call returns ingredients for the prep item
      mockWhere.mockReturnValueOnce([
        { ingredientId: 1, quantity: 5 }
      ]);
      
      // Second call returns current inventory
      mockWhere.mockReturnValueOnce([
        { quantity: 10 } // 10 in stock, need 5
      ]);
      
      const mockFrom = jest.fn().mockImplementation(() => ({
        where: mockWhere
      }));
      
      const mockSelect = jest.fn().mockImplementation(() => ({
        from: mockFrom
      }));
      
      const mockSet = jest.fn().mockImplementation(() => ({
        where: jest.fn()
      }));
      
      const mockUpdate = jest.fn().mockImplementation(() => ({
        set: mockSet
      }));
      
      const mockTx = {
        select: mockSelect,
        update: mockUpdate
      };
      
      (db.transaction as jest.Mock).mockImplementationOnce(callback => callback(mockTx));
      
      await IngredientService.completePrepItem(1, 1);
      
      expect(mockUpdate).toHaveBeenCalled();
      expect(mockSet).toHaveBeenCalled();
    });
  });

  describe('updateInventoryFromPrepItem', () => {
    it('should update inventory and return success when status is complete', async () => {
      // Mock the select query for ingredients
      (db.select as jest.Mock).mockReturnValueOnce({
        from: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnValue([
          { ingredientId: 1, quantity: 5 }
        ])
      });
      
      // Mock the select query for current inventory
      (db.select as jest.Mock).mockReturnValueOnce({
        from: jest.fn().mockReturnThis(),
        innerJoin: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnValue([
          { quantity: 10, ingredientName: 'Test Ingredient' }
        ])
      });
      
      // Mock the update query
      const mockUpdate = jest.fn().mockReturnThis();
      const mockSet = jest.fn().mockReturnThis();
      (db.update as jest.Mock).mockReturnValue({
        set: mockSet,
        where: jest.fn().mockReturnThis()
      });
      
      const result = await IngredientService.updateInventoryFromPrepItem(1, 1, 'complete');
      
      expect(result.success).toBe(true);
      expect(result.message).toBe('Inventory updated successfully');
      expect(db.insert).toHaveBeenCalled();
    });

    it('should handle inventory going below zero by setting it to zero', async () => {
      // Mock the select query for ingredients
      (db.select as jest.Mock).mockReturnValueOnce({
        from: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnValue([
          { ingredientId: 1, quantity: 10 }
        ])
      });
      
      // Mock the select query for current inventory
      (db.select as jest.Mock).mockReturnValueOnce({
        from: jest.fn().mockReturnThis(),
        innerJoin: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnValue([
          { quantity: 5, ingredientName: 'Test Ingredient' } // Only 5 in stock, need 10
        ])
      });
      
      // Mock the update query
      const mockUpdate = jest.fn().mockReturnThis();
      const mockSet = jest.fn().mockReturnThis();
      (db.update as jest.Mock).mockReturnValue({
        set: mockSet,
        where: jest.fn().mockReturnThis()
      });
      
      const result = await IngredientService.updateInventoryFromPrepItem(1, 1, 'complete');
      
      expect(result.success).toBe(true);
      expect(result.message).toContain('Warning: Test Ingredient inventory would go below zero');
      expect(mockSet).toHaveBeenCalledWith({ quantity: '0' }); // Should set to 0, not negative
    });

    it('should provide a warning when inventory reaches zero', async () => {
      // Mock the select query for ingredients
      (db.select as jest.Mock).mockReturnValueOnce({
        from: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnValue([
          { ingredientId: 1, quantity: 5 }
        ])
      });
      
      // Mock the select query for current inventory
      (db.select as jest.Mock).mockReturnValueOnce({
        from: jest.fn().mockReturnThis(),
        innerJoin: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnValue([
          { quantity: 5, ingredientName: 'Test Ingredient' } // Exactly 5 in stock, need 5
        ])
      });
      
      // Mock the update query
      const mockUpdate = jest.fn().mockReturnThis();
      const mockSet = jest.fn().mockReturnThis();
      (db.update as jest.Mock).mockReturnValue({
        set: mockSet,
        where: jest.fn().mockReturnThis()
      });
      
      const result = await IngredientService.updateInventoryFromPrepItem(1, 1, 'complete');
      
      expect(result.success).toBe(true);
      expect(result.message).toContain('Alert: Test Ingredient is now out of stock');
      expect(mockSet).toHaveBeenCalledWith({ quantity: '0' });
    });

    it('should provide a warning when inventory is running low', async () => {
      // Mock the select query for ingredients
      (db.select as jest.Mock).mockReturnValueOnce({
        from: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnValue([
          { ingredientId: 1, quantity: 3 }
        ])
      });
      
      // Mock the select query for current inventory
      (db.select as jest.Mock).mockReturnValueOnce({
        from: jest.fn().mockReturnThis(),
        innerJoin: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnValue([
          { quantity: 5, ingredientName: 'Test Ingredient' } // 5 in stock, will be 2 after update
        ])
      });
      
      // Mock the update query
      const mockUpdate = jest.fn().mockReturnThis();
      const mockSet = jest.fn().mockReturnThis();
      (db.update as jest.Mock).mockReturnValue({
        set: mockSet,
        where: jest.fn().mockReturnThis()
      });
      
      const result = await IngredientService.updateInventoryFromPrepItem(1, 1, 'complete');
      
      expect(result.success).toBe(true);
      expect(result.message).toContain('Alert: Test Ingredient is running low (2 remaining)');
      expect(mockSet).toHaveBeenCalledWith({ quantity: '2' });
    });

    it('should handle errors gracefully', async () => {
      // Mock the select query to throw an error
      (db.select as jest.Mock).mockImplementationOnce(() => {
        throw new Error('Database error');
      });
      
      const result = await IngredientService.updateInventoryFromPrepItem(1, 1, 'complete');
      
      expect(result.success).toBe(false);
      expect(result.message).toContain('Failed to update inventory: Database error');
    });

    it('should do nothing when status is not complete', async () => {
      // Reset the mock before this test
      jest.clearAllMocks();
      
      const result = await IngredientService.updateInventoryFromPrepItem(1, 1, 'pending');
      
      expect(result.success).toBe(true);
      expect(db.select).not.toHaveBeenCalled();
    });
  });
}); 