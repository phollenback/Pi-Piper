# Inventory Tracking System

This document describes the inventory tracking system implemented in the Pi-Piper application, including its features, edge cases, and how to test it.

## Overview

The inventory tracking system automatically updates ingredient inventory levels when prep items are completed. It includes the following features:

1. **Automatic Inventory Updates**: When a prep item is marked as complete, the system automatically subtracts the required ingredients from inventory.
2. **Transaction Logging**: All inventory changes are logged in the `factInventoryTransaction` table, providing a complete audit trail.
3. **Edge Case Handling**: The system handles various edge cases, such as:
   - Preventing negative inventory (setting to 0 instead)
   - Warning when inventory reaches zero
   - Warning when inventory is running low
4. **Inventory Metrics**: The system calculates inventory turnover metrics based on transaction data.

## Key Components

### Database Tables

- `factInventory`: Stores current inventory levels for each ingredient
- `factInventoryTransaction`: Logs all inventory changes with detailed information
- `factPrepItemIngredients`: Maps prep items to their required ingredients
- `dimIngredient`: Stores ingredient information

### Service Methods

- `IngredientService.updateInventoryFromPrepItem`: Updates inventory when a prep item is completed
- `IngredientService.completePrepItem`: Checks if there's enough inventory before completing a prep item
- `IngredientService.getInventoryStatus`: Gets the current inventory status for all ingredients
- `IngredientService.getLowStockIngredients`: Gets ingredients with stock below their reorder point
- `IngredientService.getOutOfStockItems`: Gets ingredients that are out of stock

## Edge Cases

The system handles the following edge cases:

1. **Insufficient Stock**: When completing a prep item through the transaction API, if there's not enough stock, the system will throw an error.

2. **Inventory Going Below Zero**: When updating inventory through the prep item completion process, if the inventory would go below zero, the system:
   - Sets the inventory to 0 instead of a negative value
   - Adds a warning message to the response
   - Logs the warning in the system logs
   - Adds a note to the transaction record

3. **Inventory Reaching Zero**: When inventory reaches exactly zero, the system:
   - Adds a warning message to the response
   - Logs the warning in the system logs

4. **Low Inventory**: When inventory falls below a threshold (currently set to 2 units), the system:
   - Adds a warning message to the response
   - Logs the warning in the system logs

## Testing

### Unit Tests

Unit tests for the inventory tracking system are in `backend/src/services/ingredient.service.test.ts`. These tests use mocks to test the functionality without requiring a database connection.

To run the unit tests:

```bash
cd backend
npm test -- --testPathPattern=ingredient.service.test.ts
```

### Integration Tests

Integration tests that test the system with a real database are in `backend/src/tests/inventory-tracking.integration.test.ts`. These tests require a test database with the correct schema.

To run the integration tests:

```bash
cd backend
npm test -- --testPathPattern=inventory-tracking.integration.test.ts
```

### Manual Testing Script

A script for manually testing the inventory tracking system is provided in `backend/src/scripts/test-inventory-tracking.ts`. This script:

1. Creates test data in the database
2. Tests normal inventory updates
3. Tests inventory going below zero
4. Tests inventory reaching zero exactly
5. Tests inventory running low
6. Cleans up the test data

To run the manual testing script:

```bash
cd backend
npx ts-node src/scripts/test-inventory-tracking.ts
```

## Implementation Details

### Preventing Negative Inventory

When a prep item is completed, the system:

1. Gets the current inventory level for each required ingredient
2. Calculates the new inventory level after subtracting the required amount
3. If the new level would be negative, sets it to 0 instead
4. Logs a warning and adds it to the response

```typescript
// Check if inventory would go below zero
if (newQuantity < 0) {
  const warning = `Warning: ${ingredientName} inventory would go below zero. Setting to 0.`;
  warnings.push(warning);
  logger.warn(warning, { 
    ingredientId: ingredient.ingredientId, 
    previousQuantity, 
    quantityChange, 
    attemptedNewQuantity: newQuantity 
  });
  newQuantity = 0;
}
```

### Transaction Logging

All inventory changes are logged in the `factInventoryTransaction` table with detailed information:

```typescript
await db.insert(factInventoryTransaction).values({
  ingredientId: ingredient.ingredientId,
  restaurantId: restaurantId,
  dateId: parseInt(new Date().toISOString().split('T')[0].replace(/-/g, '')),
  quantityChange: quantityChange,
  transactionType: 'prep',
  referenceId: prepItemId,
  previousQuantity: previousQuantity,
  newQuantity: newQuantity,
  notes: `Used in prep item #${prepItemId}${newQuantity < previousQuantity + quantityChange ? ' (Adjusted to prevent negative inventory)' : ''}`
});
```

## Future Improvements

1. **Configurable Thresholds**: Make the low inventory threshold configurable per ingredient
2. **Automatic Reordering**: Implement automatic reordering when inventory falls below the reorder point
3. **Inventory Forecasting**: Use historical data to forecast future inventory needs
4. **Batch Processing**: Implement batch processing for high-volume inventory updates
5. **Real-time Alerts**: Send real-time alerts when inventory reaches critical levels 