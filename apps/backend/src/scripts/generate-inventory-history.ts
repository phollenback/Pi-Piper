import { db } from '../db/connection';
import { factInventoryTransaction, dimIngredient, factInventory } from '../db/schema';
import { eq, and, sql } from 'drizzle-orm';
import { format, subDays } from 'date-fns';

/**
 * Script to generate mock historical inventory data
 * This will create realistic inventory transactions over the past 30 days
 */
async function generateInventoryHistory() {
  try {
    console.log('Starting to generate mock inventory history...');
    
    // Get all active ingredients
    const ingredients = await db.select({
      ingredientId: dimIngredient.ingredientId,
      ingredientName: dimIngredient.ingredientName,
      restaurantId: dimIngredient.restaurantId,
      currentStock: dimIngredient.currentStock,
      parLevel: dimIngredient.parLevel
    })
    .from(dimIngredient)
    .where(eq(dimIngredient.isActive, true));
    
    console.log(`Found ${ingredients.length} active ingredients`);
    
    // For each ingredient, generate a series of transactions over the past 30 days
    for (const ingredient of ingredients) {
      console.log(`Generating history for ${ingredient.ingredientName} (ID: ${ingredient.ingredientId})`);
      
      // Start with the current stock as the end point
      let currentQuantity = Number(ingredient.currentStock) || 0;
      const parLevel = Number(ingredient.parLevel) || 20; // Default par level if not set
      
      // Generate transactions for the past 30 days
      for (let i = 0; i < 30; i++) {
        const date = subDays(new Date(), i);
        const dateId = parseInt(format(date, 'yyyyMMdd'));
        
        // Randomly decide if there was usage on this day (70% chance)
        if (Math.random() < 0.7) {
          // Usage amount is between 5% and 25% of par level
          const usageAmount = -(Math.random() * 0.2 + 0.05) * parLevel;
          const roundedUsage = Math.round(usageAmount * 100) / 100; // Round to 2 decimal places
          
          const previousQuantity = currentQuantity;
          currentQuantity += roundedUsage;
          
          // If stock would go below zero, adjust it
          if (currentQuantity < 0) {
            currentQuantity = 0;
          }
          
          // Create a usage transaction
          await db.insert(factInventoryTransaction).values({
            ingredientId: ingredient.ingredientId,
            restaurantId: ingredient.restaurantId,
            dateId: dateId,
            quantityChange: String(roundedUsage),
            transactionType: 'usage',
            referenceId: null,
            previousQuantity: String(previousQuantity),
            newQuantity: String(currentQuantity),
            notes: 'Daily usage',
            createdBy: null,
            createdAt: new Date()
          });
          
          console.log(`Created usage transaction: ${roundedUsage} on ${format(date, 'yyyy-MM-dd')}`);
          
          // If stock is below 20% of par level, create a replenishment transaction (80% chance)
          if (currentQuantity < parLevel * 0.2 && Math.random() < 0.8) {
            // Replenishment brings stock back to 80-100% of par level
            const replenishmentFactor = Math.random() * 0.2 + 0.8; // 0.8 to 1.0
            const replenishmentAmount = (parLevel * replenishmentFactor) - currentQuantity;
            const roundedReplenishment = Math.round(replenishmentAmount * 100) / 100;
            
            const previousQuantityAfterUsage = currentQuantity;
            currentQuantity += roundedReplenishment;
            
            // Create a replenishment transaction
            await db.insert(factInventoryTransaction).values({
              ingredientId: ingredient.ingredientId,
              restaurantId: ingredient.restaurantId,
              dateId: dateId,
              quantityChange: String(roundedReplenishment),
              transactionType: 'order',
              referenceId: null,
              previousQuantity: String(previousQuantityAfterUsage),
              newQuantity: String(currentQuantity),
              notes: 'Inventory replenishment',
              createdBy: null,
              createdAt: new Date(date.setHours(date.getHours() + 2)) // 2 hours after usage
            });
            
            console.log(`Created replenishment transaction: +${roundedReplenishment} on ${format(date, 'yyyy-MM-dd')}`);
          }
        }
      }
    }
    
    console.log('Mock inventory history generation completed successfully!');
  } catch (error) {
    console.error('Error generating mock inventory history:', error);
  } finally {
    process.exit(0);
  }
}

// Run the script
generateInventoryHistory(); 