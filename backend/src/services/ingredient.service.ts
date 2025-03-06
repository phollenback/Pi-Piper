import { eq, and, lte, sql } from 'drizzle-orm';
import { db } from '../db/connection';
import { dimIngredient, factInventory, factPrepItemIngredients } from '../db/schema';
import { PrepItemIngredient, InventoryStatusItem } from '../types/db.types';

export class IngredientService {
    static async completePrepItem(prepItemId: number, restaurantId: number): Promise<void> {
        await db.transaction(async (tx) => {
            // Get the required ingredients and quantities for the prep item
            const ingredients = await tx.select()
                .from(factPrepItemIngredients)
                .where(eq(factPrepItemIngredients.prepItemId, prepItemId));

            // Update the inventory for each ingredient
            for (const ingredient of ingredients) {
                await tx.update(factInventory)
                    .set({
                        quantity: sql`quantity - ${ingredient.quantity}`
                    })
                    .where(and(
                        eq(factInventory.ingredientId, ingredient.ingredientId),
                        eq(factInventory.restaurantId, restaurantId)
                    ));
                
                // Get updated quantity to check if it's below zero
                const updatedInventory = await tx.select({ quantity: factInventory.quantity })
                    .from(factInventory)
                    .where(and(
                        eq(factInventory.ingredientId, ingredient.ingredientId),
                        eq(factInventory.restaurantId, restaurantId)
                    ));

                // Check if quantity goes below zero
                if (updatedInventory[0] && Number(updatedInventory[0].quantity) < 0) {
                    throw new Error(`Ingredient ${ingredient.ingredientId} is out of stock`);
                }
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
            console.error('Error updatihng ingredient threshold:', error);
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
}