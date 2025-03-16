import { IngredientService } from '../services/ingredient.service';
import { db } from '../db/connection';
import { dimIngredient, factInventory, factPrepItemIngredients, factInventoryTransaction, dimPrepItem } from '../db/schema';
import { eq, and, sql } from 'drizzle-orm';

/**
 * Script to test the inventory tracking functionality
 * This script will:
 * 1. Create a test ingredient and prep item
 * 2. Test normal inventory update
 * 3. Test inventory going below zero
 * 4. Test inventory reaching zero exactly
 * 5. Test inventory running low
 * 6. Clean up test data
 */
async function testInventoryTracking() {
  console.log('Starting inventory tracking tests...');
  
  // Test data
  const testRestaurantId = 999;
  const testIngredientId = 9999;
  const testPrepItemId = 9999;
  const testIngredientName = 'Test Ingredient';
  const testPrepItemName = 'Test Prep Item';
  
  try {
    // Step 1: Create test data
    console.log('\n1. Setting up test data...');
    
    // Check if test data already exists and clean it up
    await cleanupTestData(testIngredientId, testPrepItemId, testRestaurantId);
    
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
    console.log('- Created test ingredient');
    
    // Create test prep item
    await db.insert(dimPrepItem).values({
      prepItemId: testPrepItemId,
      name: testPrepItemName,
      restaurantId: testRestaurantId,
      kitchenDepartmentId: 1
    });
    console.log('- Created test prep item');
    
    // Create test inventory record
    await db.insert(factInventory).values({
      ingredientId: testIngredientId,
      restaurantId: testRestaurantId,
      dateId: parseInt(new Date().toISOString().split('T')[0].replace(/-/g, '')),
      quantity: '10',
      unit: 'units'
    });
    console.log('- Created test inventory record');
    
    // Create test prep item ingredient relationship
    await db.insert(factPrepItemIngredients).values({
      prepItemId: testPrepItemId,
      ingredientId: testIngredientId,
      quantity: '5',
      unit: 'units'
    });
    console.log('- Created test prep item ingredient relationship');
    
    // Step 2: Test normal inventory update
    console.log('\n2. Testing normal inventory update...');
    await resetInventory(testIngredientId, testRestaurantId, '10');
    
    const normalResult = await IngredientService.updateInventoryFromPrepItem(testPrepItemId, testRestaurantId, 'complete');
    console.log('- Result:', normalResult);
    
    const normalInventory = await getInventoryQuantity(testIngredientId, testRestaurantId);
    console.log('- Updated inventory quantity:', normalInventory);
    
    const normalTransactions = await getLatestTransaction(testIngredientId, testRestaurantId);
    console.log('- Transaction recorded:', normalTransactions);
    
    // Step 3: Test inventory going below zero
    console.log('\n3. Testing inventory going below zero...');
    await resetInventory(testIngredientId, testRestaurantId, '3');
    await updatePrepItemQuantity(testPrepItemId, testIngredientId, '5');
    
    const belowZeroResult = await IngredientService.updateInventoryFromPrepItem(testPrepItemId, testRestaurantId, 'complete');
    console.log('- Result:', belowZeroResult);
    
    const belowZeroInventory = await getInventoryQuantity(testIngredientId, testRestaurantId);
    console.log('- Updated inventory quantity:', belowZeroInventory);
    
    const belowZeroTransactions = await getLatestTransaction(testIngredientId, testRestaurantId);
    console.log('- Transaction recorded:', belowZeroTransactions);
    
    // Step 4: Test inventory reaching zero exactly
    console.log('\n4. Testing inventory reaching zero exactly...');
    await resetInventory(testIngredientId, testRestaurantId, '5');
    await updatePrepItemQuantity(testPrepItemId, testIngredientId, '5');
    
    const zeroResult = await IngredientService.updateInventoryFromPrepItem(testPrepItemId, testRestaurantId, 'complete');
    console.log('- Result:', zeroResult);
    
    const zeroInventory = await getInventoryQuantity(testIngredientId, testRestaurantId);
    console.log('- Updated inventory quantity:', zeroInventory);
    
    const zeroTransactions = await getLatestTransaction(testIngredientId, testRestaurantId);
    console.log('- Transaction recorded:', zeroTransactions);
    
    // Step 5: Test inventory running low
    console.log('\n5. Testing inventory running low...');
    await resetInventory(testIngredientId, testRestaurantId, '7');
    await updatePrepItemQuantity(testPrepItemId, testIngredientId, '5');
    
    const lowResult = await IngredientService.updateInventoryFromPrepItem(testPrepItemId, testRestaurantId, 'complete');
    console.log('- Result:', lowResult);
    
    const lowInventory = await getInventoryQuantity(testIngredientId, testRestaurantId);
    console.log('- Updated inventory quantity:', lowInventory);
    
    const lowTransactions = await getLatestTransaction(testIngredientId, testRestaurantId);
    console.log('- Transaction recorded:', lowTransactions);
    
    // Step 6: Clean up test data
    console.log('\n6. Cleaning up test data...');
    await cleanupTestData(testIngredientId, testPrepItemId, testRestaurantId);
    console.log('- Test data cleaned up');
    
    console.log('\nInventory tracking tests completed successfully!');
  } catch (error) {
    console.error('Error during inventory tracking tests:', error);
  } finally {
    process.exit(0);
  }
}

// Helper functions
async function cleanupTestData(ingredientId: number, prepItemId: number, restaurantId: number) {
  try {
    // Delete test data
    await db.delete(factInventoryTransaction)
      .where(and(
        eq(factInventoryTransaction.ingredientId, ingredientId),
        eq(factInventoryTransaction.restaurantId, restaurantId)
      ));
    
    await db.delete(factPrepItemIngredients)
      .where(eq(factPrepItemIngredients.prepItemId, prepItemId));
    
    await db.delete(factInventory)
      .where(and(
        eq(factInventory.ingredientId, ingredientId),
        eq(factInventory.restaurantId, restaurantId)
      ));
    
    await db.delete(dimPrepItem)
      .where(eq(dimPrepItem.prepItemId, prepItemId));
    
    await db.delete(dimIngredient)
      .where(eq(dimIngredient.ingredientId, ingredientId));
  } catch (error) {
    console.error('Error cleaning up test data:', error);
  }
}

async function resetInventory(ingredientId: number, restaurantId: number, quantity: string) {
  try {
    await db.update(factInventory)
      .set({ quantity: sql`${quantity}` })
      .where(and(
        eq(factInventory.ingredientId, ingredientId),
        eq(factInventory.restaurantId, restaurantId)
      ));
  } catch (error) {
    console.error('Error resetting inventory quantity:', error);
  }
}

async function updatePrepItemQuantity(prepItemId: number, ingredientId: number, quantity: string) {
  try {
    await db.update(factPrepItemIngredients)
      .set({ quantity: sql`${quantity}` })
      .where(and(
        eq(factPrepItemIngredients.prepItemId, prepItemId),
        eq(factPrepItemIngredients.ingredientId, ingredientId)
      ));
  } catch (error) {
    console.error('Error updating prep item quantity:', error);
  }
}

async function getInventoryQuantity(ingredientId: number, restaurantId: number) {
  try {
    const inventory = await db.select({ quantity: factInventory.quantity })
      .from(factInventory)
      .where(and(
        eq(factInventory.ingredientId, ingredientId),
        eq(factInventory.restaurantId, restaurantId)
      ));
    
    return inventory[0]?.quantity;
  } catch (error) {
    console.error('Error getting inventory quantity:', error);
    return null;
  }
}

async function getLatestTransaction(ingredientId: number, restaurantId: number) {
  try {
    const transactions = await db.select()
      .from(factInventoryTransaction)
      .where(and(
        eq(factInventoryTransaction.ingredientId, ingredientId),
        eq(factInventoryTransaction.restaurantId, restaurantId)
      ))
      .orderBy(factInventoryTransaction.transactionId)
      .limit(1);
    
    return transactions[0];
  } catch (error) {
    console.error('Error getting latest transaction:', error);
    return null;
  }
}

// Run the script
testInventoryTracking(); 