import { eq, and, lte, sql } from 'drizzle-orm';
import { db } from '../db/connection';
import { dimIngredient, factInventory, factPrepItemIngredients, factInventoryTransaction } from '../db/schema';
import { PrepItemIngredient, InventoryStatusItem } from '../types/db.types';
import { logger } from '../middleware/winston.middleware';

export class IngredientService {
    static async completePrepItem(prepItemId: number, restaurantId: number): Promise<void> {
        await db.transaction(async (tx) => {
            // Get the required ingredients and quantities for the prep item
            const ingredients = await tx.select()
                .from(factPrepItemIngredients)
                .where(eq(factPrepItemIngredients.prepItemId, prepItemId));

            // Update the inventory for each ingredient
            for (const ingredient of ingredients) {
                // Get current quantity before update
                const currentInventory = await tx.select({ quantity: factInventory.quantity })
                    .from(factInventory)
                    .where(and(
                        eq(factInventory.ingredientId, ingredient.ingredientId),
                        eq(factInventory.restaurantId, restaurantId)
                    ));
                
                const currentQuantity = currentInventory[0]?.quantity ? Number(currentInventory[0].quantity) : 0;
                const requiredQuantity = Number(ingredient.quantity);
                
                // Check if there's enough inventory
                if (currentQuantity < requiredQuantity) {
                    throw new Error(`Insufficient stock for ingredient ${ingredient.ingredientId}. Required: ${requiredQuantity}, Available: ${currentQuantity}`);
                }
                
                await tx.update(factInventory)
                    .set({
                        quantity: sql`quantity - ${ingredient.quantity}`
                    })
                    .where(and(
                        eq(factInventory.ingredientId, ingredient.ingredientId),
                        eq(factInventory.restaurantId, restaurantId)
                    ));
            }
        });
    }

    static async getInventoryStatus(restaurantId: number): Promise<InventoryStatusItem[]> {
        try {
            const inventoryData = await db.select({
                ingredientId: dimIngredient.ingredientId,
                ingredientName: dimIngredient.ingredientName,
                quantity: factInventory.quantity,
                quantityThreshold: dimIngredient.reorderPoint,
                unit: dimIngredient.unit,
                maxStock: dimIngredient.parLevel,
                lastUpdated: dimIngredient.updatedAt
            })
                .from(dimIngredient)
                .leftJoin(factInventory, eq(dimIngredient.ingredientId, factInventory.ingredientId))
                .where(eq(dimIngredient.restaurantId, restaurantId));

            return inventoryData as unknown as InventoryStatusItem[];
        } catch (error) {
            console.error('Error fetching inventory status:', error);
            throw new Error('Failed to fetch inventory status');
        }
    }

    static async updateIngredientThreshold(ingredientId: number, restaurantId: number, newThreshold: number): Promise<void> {
        try {
            await db.update(dimIngredient)
                .set({ reorderPoint: String(newThreshold) })
                .where(and(
                    eq(dimIngredient.ingredientId, ingredientId),
                    eq(dimIngredient.restaurantId, restaurantId)
                ));
        } catch (error) {
            console.error('Error updating ingredient threshold:', error);
            throw new Error('Failed to update ingredient threshold');
        }
    }

    static async getLowStockIngredients(restaurantId: number): Promise<InventoryStatusItem[]> {
        try {
            const lowStockItems = await db.select({
                ingredientId: dimIngredient.ingredientId,
                ingredientName: dimIngredient.ingredientName,
                quantity: factInventory.quantity,
                quantityThreshold: dimIngredient.reorderPoint,
                unit: dimIngredient.unit,
                maxStock: dimIngredient.parLevel,
                lastUpdated: dimIngredient.updatedAt
            })
                .from(dimIngredient)
                .leftJoin(factInventory, eq(dimIngredient.ingredientId, factInventory.ingredientId))
                .where(and(
                    eq(dimIngredient.restaurantId, restaurantId),
                    lte(factInventory.quantity, dimIngredient.reorderPoint)
                ));

            return lowStockItems as unknown as InventoryStatusItem[];
        } catch (error) {
            console.error('Error fetching low stock ingredients:', error);
            throw new Error('Failed to fetch low stock ingredients');
        }
    }

    static async updateInventoryFromPrepItem(prepItemId: number, restaurantId: number, status: string): Promise<{ success: boolean; message?: string }> {
        try {
            // If the prep item is not completed, do nothing
            if (status !== 'complete') {
                return { success: true };
            }
            
            // Get the ingredients for this prep item
            const ingredients = await db.select()
                .from(factPrepItemIngredients)
                .where(eq(factPrepItemIngredients.prepItemId, prepItemId));
            
            // Process ingredients and update inventory
            const warnings: string[] = [];
            
            for (const ingredient of ingredients) {
                // Get current quantity before update
                const currentInventory = await db.select({
                    quantity: factInventory.quantity,
                    ingredientName: dimIngredient.ingredientName
                })
                .from(factInventory)
                .innerJoin(dimIngredient, eq(factInventory.ingredientId, dimIngredient.ingredientId))
                .where(and(
                    eq(factInventory.ingredientId, ingredient.ingredientId),
                    eq(factInventory.restaurantId, restaurantId)
                ));
                
                const ingredientName = currentInventory[0]?.ingredientName || `Ingredient #${ingredient.ingredientId}`;
                const previousQuantity = currentInventory[0]?.quantity ? Number(currentInventory[0].quantity) : 0;
                const quantityChange = -Number(ingredient.quantity);
                let newQuantity = previousQuantity + quantityChange;
                
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
                
                // Check if inventory is at zero
                if (newQuantity === 0) {
                    const warning = `Alert: ${ingredientName} is now out of stock.`;
                    warnings.push(warning);
                    logger.warn(warning, { ingredientId: ingredient.ingredientId });
                }
                // Check if inventory is low (below 20% of par level)
                else if (newQuantity <= 2) {
                    const warning = `Alert: ${ingredientName} is running low (${newQuantity} remaining).`;
                    warnings.push(warning);
                    logger.warn(warning, { ingredientId: ingredient.ingredientId, currentStock: newQuantity });
                }
                
                // Update inventory with the corrected quantity
                await db.update(factInventory)
                    .set({
                        quantity: String(newQuantity)
                    })
                    .where(and(
                        eq(factInventory.ingredientId, ingredient.ingredientId),
                        eq(factInventory.restaurantId, restaurantId)
                    ));
                
                // Log the transaction in the factInventoryTransaction table
                await db.insert(factInventoryTransaction).values({
                    ingredientId: ingredient.ingredientId,
                    restaurantId,
                    dateId: parseInt(new Date().toISOString().split('T')[0].replace(/-/g, '')),
                    quantityChange: String(quantityChange),
                    transactionType: 'prep',
                    referenceId: prepItemId,
                    previousQuantity: String(previousQuantity),
                    newQuantity: String(newQuantity),
                    notes: `Used in prep item #${prepItemId}${newQuantity < previousQuantity + quantityChange ? ' (Adjusted to prevent negative inventory)' : ''}`
                });
            }
            
            return { 
                success: true, 
                message: warnings.length > 0 ? warnings.join('\n') : 'Inventory updated successfully' 
            };
        } catch (error) {
            const err = error as Error;
            logger.error('Error updating inventory from prep item:', { error: err.message, stack: err.stack });
            return { success: false, message: `Failed to update inventory: ${err.message}` };
        }
    }

    static async getOutOfStockItems(restaurantId: number): Promise<InventoryStatusItem[]> {
        try {
            const outOfStockItems = await db.select({
                ingredientId: dimIngredient.ingredientId,
                ingredientName: dimIngredient.ingredientName,
                quantity: factInventory.quantity,
                quantityThreshold: dimIngredient.reorderPoint,
                unit: dimIngredient.unit,
                maxStock: dimIngredient.parLevel,
                lastUpdated: dimIngredient.updatedAt
            })
                .from(dimIngredient)
                .leftJoin(factInventory, eq(dimIngredient.ingredientId, factInventory.ingredientId))
                .where(and(
                    eq(dimIngredient.restaurantId, restaurantId),
                    eq(factInventory.quantity, "0")
                ));

            return outOfStockItems as unknown as InventoryStatusItem[];
        } catch (error) {
            console.error('Error fetching out of stock items:', error);
            throw new Error('Failed to fetch out of stock items');
        }
    }
}