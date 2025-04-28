import { logger } from '../middleware/winston.middleware';
import { db } from '../db/connection';
import { dimCategory } from "../db/schema";
import { Category } from '../types/db.types';
import { eq, desc, sql } from 'drizzle-orm';

// Get all categories from the database
export const getCategories = async (): Promise<Category[]> => {
    logger.info('[category.dao][getCategories][START]');
    try {
        const categories = await db.select()
            .from(dimCategory);
        
        logger.info('[category.dao][getCategories][SUCCESS]');
        return categories;
    } catch (error) {
        logger.error('[category.dao][getCategories][ERROR]', { error });
        throw error;
    }
};

// Get a category by ID
export const getCategoryById = async (categoryId: number): Promise<Category | undefined> => {
    logger.info('[category.dao][getCategoryById][START]', { categoryId });
    try {
        const categories = await db.select()
            .from(dimCategory)
            .where(eq(dimCategory.categoryId, categoryId))
            .limit(1);
        
        const category = categories[0];
        logger.info('[category.dao][getCategoryById][SUCCESS]', { category });
        return category;
    } catch (error) {
        logger.error('[category.dao][getCategoryById][ERROR]', { error, categoryId });
        throw error;
    }
};

// Create a new category
export const createCategory = async (categoryData: Omit<Category, 'categoryId' | 'createdAt' | 'updatedAt'>): Promise<Category> => {
    logger.info('[category.dao][createCategory][START]', { categoryData });
    try {
        await db.insert(dimCategory)
            .values(categoryData);
        
        // Get the newly created category by name
        const categories = await db.select()
            .from(dimCategory)
            .where(eq(dimCategory.categoryName, categoryData.categoryName))
            .orderBy(desc(dimCategory.createdAt))
            .limit(1);
        
        const newCategory = categories[0];
        if (!newCategory) {
            throw new Error('Failed to retrieve created category');
        }
        
        logger.info('[category.dao][createCategory][SUCCESS]', { newCategory });
        return newCategory;
    } catch (error) {
        logger.error('[category.dao][createCategory][ERROR]', { error, categoryData });
        throw error;
    }
};

// Update a category
export const updateCategory = async (categoryId: number, categoryData: Partial<Omit<Category, 'categoryId' | 'createdAt' | 'updatedAt'>>): Promise<Category> => {
    logger.info('[category.dao][updateCategory][START]', { categoryId, categoryData });
    try {
        await db.update(dimCategory)
            .set(categoryData)
            .where(eq(dimCategory.categoryId, categoryId));
        
        // Get the updated category
        const updatedCategory = await getCategoryById(categoryId);
        if (!updatedCategory) {
            throw new Error('Failed to retrieve updated category');
        }
        
        logger.info('[category.dao][updateCategory][SUCCESS]', { updatedCategory });
        return updatedCategory;
    } catch (error) {
        logger.error('[category.dao][updateCategory][ERROR]', { error, categoryId, categoryData });
        throw error;
    }
};

// Delete a category
export const deleteCategory = async (categoryId: number): Promise<boolean> => {
    logger.info('[category.dao][deleteCategory][START]', { categoryId });
    try {
        await db.delete(dimCategory)
            .where(eq(dimCategory.categoryId, categoryId));
        
        logger.info('[category.dao][deleteCategory][SUCCESS]', { categoryId });
        return true;
    } catch (error) {
        logger.error('[category.dao][deleteCategory][ERROR]', { error, categoryId });
        throw error;
    }
};

// Add this new function to your DAL
export const getUniqueCategories = async (restaurantId: number): Promise<Category[]> => {
    logger.info('[category.dao][getUniqueCategories][START]', { restaurantId });

    try {
        const categories = await db
            .select({
                categoryId: dimCategory.categoryId,
                categoryName: dimCategory.categoryName,
                restaurantId: dimCategory.restaurantId,
                description: dimCategory.description,
                createdAt: dimCategory.createdAt,
                updatedAt: dimCategory.updatedAt
            })
            .from(dimCategory)
            .where(eq(dimCategory.restaurantId, restaurantId))
            .orderBy(dimCategory.categoryName);

        logger.info('[category.dao][getUniqueCategories][SUCCESS]', { categories });
        return categories;
    } catch (error) {
        logger.error('[category.dao][getUniqueCategories][ERROR]', { error, restaurantId });
        throw error;
    }
};