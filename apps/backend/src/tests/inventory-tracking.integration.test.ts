import { db } from '../db/connection';
import { IngredientService } from '../services/ingredient.service';
import { dimIngredient, factInventory, factPrepItemIngredients, factInventoryTransaction, dimPrepItem } from '../db/schema';
import { eq, and, desc } from 'drizzle-orm';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// This is an integration test that tests the inventory tracking system with real database interactions
// To run this test, you need to have a test database set up with the required tables and data

describe('Inventory Tracking Integration Tests', () => {
  // Test data
  const testRestaurantId = 999;
  const testIngredientId = 9999;
  const testPrepItemId = 9999;
  const testIngredientName = 'Test Ingredient';
  const testPrepItemName = 'Test Prep Item';
  
  // Setup test data before tests
  beforeAll(async () => {
    try {
      // Create test ingredient
      await db.insert(dimIngredient).values({
        ingredientId: testIngredientId,
        ingredientName: testIngredientName,
        restaurantId: testRestaurantId,
        unit: 'units',
        unitPrice: '1.00',
        parLevel: '10',
        currentStock: '10',
        reorderPoint: '2',
        isActive: true
      });
      
      // Create test prep item
      await db.insert(dimPrepItem).values({
        prepItemId: testPrepItemId,
        name: testPrepItemName,
        restaurantId: testRestaurantId,
        kitchenDepartmentId: 1
      });
      
      // Create test inventory record
      await db.insert(factInventory).values({
        ingredientId: testIngredientId,
        restaurantId: testRestaurantId,
        dateId: parseInt(new Date().toISOString().split('T')[0].replace(/-/g, '')),
        quantity: '10',
        unit: 'units'
      });
      
      // Create test prep item ingredient relationship
      await db.insert(factPrepItemIngredients).values({
        prepItemId: testPrepItemId,
        ingredientId: testIngredientId,
        quantity: '5',
        unit: 'units'
      });
    } catch (error) {
      console.error('Error setting up test data:', error);
    }
  });
  
  // Clean up test data after tests
  afterAll(async () => {
    try {
      // Delete test data
      await db.delete(factInventoryTransaction)
        .where(and(
          eq(factInventoryTransaction.ingredientId, testIngredientId),
          eq(factInventoryTransaction.restaurantId, testRestaurantId)
        ));
      
      await db.delete(factPrepItemIngredients)
        .where(eq(factPrepItemIngredients.prepItemId, testPrepItemId));
      
      await db.delete(factInventory)
        .where(and(
          eq(factInventory.ingredientId, testIngredientId),
          eq(factInventory.restaurantId, testRestaurantId)
        ));
      
      await db.delete(dimPrepItem)
        .where(eq(dimPrepItem.prepItemId, testPrepItemId));
      
      await db.delete(dimIngredient)
        .where(eq(dimIngredient.ingredientId, testIngredientId));
    } catch (error) {
      console.error('Error cleaning up test data:', error);
    }
  });
  
  // Reset inventory quantity before each test
  beforeEach(async () => {
    try {
      await db.update(factInventory)
        .set({ quantity: '10' })
        .where(and(
          eq(factInventory.ingredientId, testIngredientId),
          eq(factInventory.restaurantId, testRestaurantId)
        ));
    } catch (error) {
      console.error('Error resetting inventory quantity:', error);
    }
  });
  
  it('should update inventory when completing a prep item', async () => {
    // Complete the prep item
    const result = await IngredientService.updateInventoryFromPrepItem(testPrepItemId, testRestaurantId, 'complete');
    
    // Check that the operation was successful
    expect(result.success).toBe(true);
    
    // Check that the inventory was updated
    const updatedInventory = await db.select({ quantity: factInventory.quantity })
      .from(factInventory)
      .where(and(
        eq(factInventory.ingredientId, testIngredientId),
        eq(factInventory.restaurantId, testRestaurantId)
      ));
    
    expect(updatedInventory[0].quantity).toBe('5'); // 10 - 5 = 5
    
    // Check that a transaction was recorded
    const transactions = await db.select()
      .from(factInventoryTransaction)
      .where(and(
        eq(factInventoryTransaction.ingredientId, testIngredientId),
        eq(factInventoryTransaction.restaurantId, testRestaurantId)
      ));
    
    expect(transactions.length).toBe(1);
    expect(transactions[0].quantityChange).toBe('-5');
    expect(transactions[0].previousQuantity).toBe('10');
    expect(transactions[0].newQuantity).toBe('5');
    expect(transactions[0].transactionType).toBe('prep');
  });
  
  it('should handle inventory going below zero by setting it to zero', async () => {
    // Set the prep item to require more than available inventory
    await db.update(factPrepItemIngredients)
      .set({ quantity: '15' }) // Requires 15, but only 10 available
      .where(and(
        eq(factPrepItemIngredients.prepItemId, testPrepItemId),
        eq(factPrepItemIngredients.ingredientId, testIngredientId)
      ));
    
    // Complete the prep item
    const result = await IngredientService.updateInventoryFromPrepItem(testPrepItemId, testRestaurantId, 'complete');
    
    // Check that the operation was successful but with a warning
    expect(result.success).toBe(true);
    expect(result.message).toContain('Warning: Test Ingredient inventory would go below zero');
    
    // Check that the inventory was set to zero, not negative
    const updatedInventory = await db.select({ quantity: factInventory.quantity })
      .from(factInventory)
      .where(and(
        eq(factInventory.ingredientId, testIngredientId),
        eq(factInventory.restaurantId, testRestaurantId)
      ));
    
    expect(updatedInventory[0].quantity).toBe('0');
    
    // Check that a transaction was recorded with the adjustment
    const transactions = await db.select()
      .from(factInventoryTransaction)
      .where(and(
        eq(factInventoryTransaction.ingredientId, testIngredientId),
        eq(factInventoryTransaction.restaurantId, testRestaurantId)
      ))
      .orderBy(desc(factInventoryTransaction.transactionId))
      .limit(1);
    
    expect(transactions[0].quantityChange).toBe('-15');
    expect(transactions[0].previousQuantity).toBe('10');
    expect(transactions[0].newQuantity).toBe('0');
    expect(transactions[0].notes).toContain('(Adjusted to prevent negative inventory)');
    
    // Reset the prep item quantity for other tests
    await db.update(factPrepItemIngredients)
      .set({ quantity: '5' })
      .where(and(
        eq(factPrepItemIngredients.prepItemId, testPrepItemId),
        eq(factPrepItemIngredients.ingredientId, testIngredientId)
      ));
  });
  
  it('should provide a warning when inventory reaches zero exactly', async () => {
    // Set inventory to exactly match the required amount
    await db.update(factInventory)
      .set({ quantity: '5' })
      .where(and(
        eq(factInventory.ingredientId, testIngredientId),
        eq(factInventory.restaurantId, testRestaurantId)
      ));
    
    // Complete the prep item
    const result = await IngredientService.updateInventoryFromPrepItem(testPrepItemId, testRestaurantId, 'complete');
    
    // Check that the operation was successful but with a warning
    expect(result.success).toBe(true);
    expect(result.message).toContain('Alert: Test Ingredient is now out of stock');
    
    // Check that the inventory is zero
    const updatedInventory = await db.select({ quantity: factInventory.quantity })
      .from(factInventory)
      .where(and(
        eq(factInventory.ingredientId, testIngredientId),
        eq(factInventory.restaurantId, testRestaurantId)
      ));
    
    expect(updatedInventory[0].quantity).toBe('0');
  });
  
  it('should provide a warning when inventory is running low', async () => {
    // Set inventory to a level where it will be low after the update
    await db.update(factInventory)
      .set({ quantity: '7' })
      .where(and(
        eq(factInventory.ingredientId, testIngredientId),
        eq(factInventory.restaurantId, testRestaurantId)
      ));
    
    // Complete the prep item
    const result = await IngredientService.updateInventoryFromPrepItem(testPrepItemId, testRestaurantId, 'complete');
    
    // Check that the operation was successful but with a warning
    expect(result.success).toBe(true);
    expect(result.message).toContain('Alert: Test Ingredient is running low (2 remaining)');
    
    // Check that the inventory is low but not zero
    const updatedInventory = await db.select({ quantity: factInventory.quantity })
      .from(factInventory)
      .where(and(
        eq(factInventory.ingredientId, testIngredientId),
        eq(factInventory.restaurantId, testRestaurantId)
      ));
    
    expect(updatedInventory[0].quantity).toBe('2');
  });
}); 