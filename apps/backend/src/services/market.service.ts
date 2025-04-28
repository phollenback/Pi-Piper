import { db } from '../db/connection';
import { dimIngredient, factIngredientPricing, factInventory, dimDate } from '../db/schema';
import { eq, and, sql, desc } from 'drizzle-orm';
import { logger } from '../middleware/winston.middleware';

export interface IngredientWithPricing {
    ingredientId: number;
    ingredientName: string;
    syscoPrice: number | null;
    usFoodsPrice: number | null;
    lastUpdated: Date | null;
}

export interface CriticalIngredient {
    ingredientId: number;
    ingredientName: string;
    currentStock: number | null;
    minStock: number | null;
}

export class MarketService {
    static async getAllIngredientsWithPricing(): Promise<IngredientWithPricing[]> {
        try {
            logger.info('[market.service][getAllIngredientsWithPricing][START]');
            
            const ingredients = await db
                .select({
                    ingredientId: dimIngredient.ingredientId,
                    ingredientName: dimIngredient.ingredientName,
                    syscoPrice: sql<number>`CAST(${factIngredientPricing.syscoPrice} AS DECIMAL(10,2))`,
                    usFoodsPrice: sql<number>`CAST(${factIngredientPricing.usfoodsPrice} AS DECIMAL(10,2))`,
                    lastUpdated: dimDate.fullDate
                })
                .from(dimIngredient)
                .leftJoin(
                    factIngredientPricing,
                    eq(dimIngredient.ingredientId, factIngredientPricing.ingredientId)
                )
                .leftJoin(
                    dimDate,
                    eq(factIngredientPricing.dateId, dimDate.dateId)
                )
                .where(
                    eq(
                        factIngredientPricing.dateId,
                        db.select({ maxDate: sql`MAX(${factIngredientPricing.dateId})` })
                            .from(factIngredientPricing)
                            .where(eq(factIngredientPricing.ingredientId, dimIngredient.ingredientId))
                    )
                )
                .orderBy(dimIngredient.ingredientName);

            logger.info('[market.service][getAllIngredientsWithPricing][SUCCESS]', { count: ingredients.length });
            return ingredients;
        } catch (error) {
            logger.error('[market.service][getAllIngredientsWithPricing][ERROR]', { error });
            throw error;
        }
    }

    static async getCriticalItems(): Promise<CriticalIngredient[]> {
        try {
            logger.info('[market.service][getCriticalItems][START]');
            
            const criticalItems = await db
                .select({
                    ingredientId: dimIngredient.ingredientId,
                    ingredientName: dimIngredient.ingredientName,
                    currentStock: sql<number>`CAST(${dimIngredient.currentStock} AS DECIMAL(10,2))`,
                    minStock: sql<number>`CAST(${dimIngredient.parLevel} AS DECIMAL(10,2))`
                })
                .from(dimIngredient)
                .where(
                    sql`${dimIngredient.currentStock} <= ${dimIngredient.parLevel} OR ${dimIngredient.currentStock} IS NULL`
                )
                .orderBy(dimIngredient.ingredientName);

            logger.info('[market.service][getCriticalItems][SUCCESS]', { count: criticalItems.length });
            return criticalItems;
        } catch (error) {
            logger.error('[market.service][getCriticalItems][ERROR]', { error });
            throw error;
        }
    }
} 