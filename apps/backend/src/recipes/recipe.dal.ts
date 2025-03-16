import { logger } from '../middleware/winston.middleware';
import { db } from '../db/connection';
import { 
  dimPrepItem, 
  factPrepItemIngredients, 
  dimIngredient, 
  dimCategory 
} from '../db/schema';
import { eq, and, inArray } from 'drizzle-orm';
import { sql } from 'drizzle-orm';

// Define types for better type safety
export interface Recipe {
  prepItemId: number;
  name: string;
  description: string | null;
  itemCategory: number | null;
  kitchenDepartmentId: number | null;
  restaurantId: number | null;
  ingredients: RecipeIngredient[];
  procedure?: string;
}

export interface RecipeIngredient {
  prepIngredientId: number;
  prepItemId: number;
  ingredientId: number;
  quantity: number;
  unit: string | null;
  ingredient?: {
    ingredientId: number;
    ingredientName: string;
    unit: string | null;
    unitPrice: number | null;
    isActive: boolean | null;
  };
}

// Get all recipes with their ingredients
export const getRecipes = async (restaurantId?: number, categoryId?: number): Promise<Recipe[]> => {
  logger.info('[recipe.dal][getRecipes][START]', { restaurantId, categoryId });
  try {
    // Build the query conditions
    let conditions = [];
    if (restaurantId) {
      conditions.push(eq(dimPrepItem.restaurantId, restaurantId));
    }
    if (categoryId) {
      conditions.push(eq(dimPrepItem.itemCategory, categoryId));
    }
    
    // Get all prep items matching the conditions
    const prepItems = conditions.length > 0
      ? await db.select().from(dimPrepItem).where(and(...conditions))
      : await db.select().from(dimPrepItem);
    
    // Get all prep item IDs
    const prepItemIds = prepItems.map(item => item.prepItemId);
    
    // Get all ingredients for these prep items in a single query
    const allIngredients = prepItemIds.length > 0
      ? await db
          .select({
            prepIngredientId: factPrepItemIngredients.prepIngredientId,
            prepItemId: factPrepItemIngredients.prepItemId,
            ingredientId: factPrepItemIngredients.ingredientId,
            quantity: factPrepItemIngredients.quantity,
            unit: factPrepItemIngredients.unit,
            ingredient: {
              ingredientId: dimIngredient.ingredientId,
              ingredientName: dimIngredient.ingredientName,
              unit: dimIngredient.unit,
              unitPrice: dimIngredient.unitPrice,
              isActive: dimIngredient.isActive
            }
          })
          .from(factPrepItemIngredients)
          .leftJoin(dimIngredient, eq(factPrepItemIngredients.ingredientId, dimIngredient.ingredientId))
          .where(inArray(factPrepItemIngredients.prepItemId, prepItemIds))
      : [];
    
    // Group ingredients by prep item ID
    const ingredientsByPrepItemId = allIngredients.reduce((acc, ingredient) => {
      const prepItemId = ingredient.prepItemId;
      if (!acc[prepItemId]) {
        acc[prepItemId] = [];
      }
      acc[prepItemId].push(ingredient);
      return acc;
    }, {} as Record<number, typeof allIngredients>);
    
    // Combine prep items with their ingredients
    const recipesWithIngredients = prepItems.map(prepItem => {
      // Add procedure field from description
      const procedure = prepItem.description || '';
      
      return {
        ...prepItem,
        ingredients: ingredientsByPrepItemId[prepItem.prepItemId] || [],
        procedure
      };
    });
    logger.info('[recipe.dal][getRecipes][SUCCESS]', { count: recipesWithIngredients.length });
    return recipesWithIngredients as unknown as Recipe[];
  } catch (error) {
    logger.error('[recipe.dal][getRecipes][ERROR]', { error });
    throw error;
  }
};

// Get a specific recipe by ID with its ingredients
export const getRecipeWithIngredientsById = async (prepItemId: number): Promise<Recipe | null> => {
  logger.info('[recipe.dal][getRecipeWithIngredientsById][START]', { prepItemId });
  try {
    // Get the prep item
    const prepItem = await db
      .select()
      .from(dimPrepItem)
      .where(eq(dimPrepItem.prepItemId, prepItemId))
      .then(items => items[0]);
    
    if (!prepItem) {
      logger.info('[recipe.dal][getRecipeWithIngredientsById][NOT_FOUND]', { prepItemId });
      return null;
    }
    
    // Get the ingredients for this prep item
    const ingredients = await db
      .select({
        prepIngredientId: factPrepItemIngredients.prepIngredientId,
        prepItemId: factPrepItemIngredients.prepItemId,
        ingredientId: factPrepItemIngredients.ingredientId,
        quantity: factPrepItemIngredients.quantity,
        unit: factPrepItemIngredients.unit,
        ingredient: {
          ingredientId: dimIngredient.ingredientId,
          ingredientName: dimIngredient.ingredientName,
          unit: dimIngredient.unit,
          unitPrice: dimIngredient.unitPrice,
          isActive: dimIngredient.isActive
        }
      })
      .from(factPrepItemIngredients)
      .leftJoin(dimIngredient, eq(factPrepItemIngredients.ingredientId, dimIngredient.ingredientId))
      .where(eq(factPrepItemIngredients.prepItemId, prepItemId));
    
    // Get category information if available
    let category = null;
    if (prepItem.itemCategory) {
      category = await db
        .select()
        .from(dimCategory)
        .where(eq(dimCategory.categoryId, prepItem.itemCategory))
        .then(categories => categories[0] || null);
    }
    
    // Add procedure field from description
    const procedure = prepItem.description || '';
    
    const recipeWithIngredients = {
      ...prepItem,
      ingredients,
      category,
      procedure
    };
    
    logger.info('[recipe.dal][getRecipeWithIngredientsById][SUCCESS]');
    return recipeWithIngredients as unknown as Recipe;
  } catch (error) {
    logger.error('[recipe.dal][getRecipeWithIngredientsById][ERROR]', { error });
    throw error;
  }
};

// Insert a new recipe with ingredients
export const insertRecipe = async (
  recipe: Omit<Recipe, 'prepItemId' | 'ingredients' | 'procedure'>, 
  ingredients: Omit<RecipeIngredient, 'prepIngredientId' | 'prepItemId' | 'ingredient'>[]
): Promise<Recipe | null> => {
  logger.info('[recipe.dal][insertRecipe][START]');
  
  // Start a transaction
  return await db.transaction(async (tx) => {
    try {
      // Insert the prep item
      const result = await tx
        .insert(dimPrepItem)
        .values({
          name: recipe.name,
          description: recipe.description,
          itemCategory: recipe.itemCategory,
          kitchenDepartmentId: recipe.kitchenDepartmentId,
          restaurantId: recipe.restaurantId
        });
      
      // Get the last inserted ID
      const [{ insertId }] = await tx.execute(sql`SELECT LAST_INSERT_ID() as insertId`);
      const prepItemId = Number(insertId);
      
      // Get the newly inserted prep item
      const newPrepItem = await tx
        .select()
        .from(dimPrepItem)
        .where(eq(dimPrepItem.prepItemId, prepItemId))
        .then(items => items[0]);
      
      // Insert the ingredients
      if (ingredients && ingredients.length > 0) {
        await tx
          .insert(factPrepItemIngredients)
          .values(
            ingredients.map(ingredient => ({
              prepItemId: prepItemId,
              ingredientId: ingredient.ingredientId,
              quantity: String(ingredient.quantity),
              unit: ingredient.unit
            }))
          );
      }
      
      // Get the complete recipe with ingredients
      const completeRecipe = await getRecipeWithIngredientsById(prepItemId);
      
      logger.info('[recipe.dal][insertRecipe][SUCCESS]', { prepItemId });
      return completeRecipe;
    } catch (error) {
      logger.error('[recipe.dal][insertRecipe][ERROR]', { error });
      throw error;
    }
  });
};

// Update an existing recipe
export const modifyRecipe = async (
  prepItemId: number, 
  recipe: Partial<Omit<Recipe, 'prepItemId' | 'ingredients' | 'procedure'>>, 
  ingredients?: Omit<RecipeIngredient, 'prepIngredientId' | 'prepItemId' | 'ingredient'>[]
): Promise<Recipe | null> => {
  logger.info('[recipe.dal][modifyRecipe][START]', { prepItemId });
  
  // Start a transaction
  return await db.transaction(async (tx) => {
    try {
      // Check if the recipe exists
      const existingRecipe = await tx
        .select()
        .from(dimPrepItem)
        .where(eq(dimPrepItem.prepItemId, prepItemId))
        .then(items => items[0]);
      
      if (!existingRecipe) {
        logger.info('[recipe.dal][modifyRecipe][NOT_FOUND]', { prepItemId });
        return null;
      }
      
      // Update the prep item
      await tx
        .update(dimPrepItem)
        .set({
          name: recipe.name ?? existingRecipe.name,
          description: recipe.description ?? existingRecipe.description,
          itemCategory: recipe.itemCategory ?? existingRecipe.itemCategory,
          kitchenDepartmentId: recipe.kitchenDepartmentId ?? existingRecipe.kitchenDepartmentId,
          restaurantId: recipe.restaurantId ?? existingRecipe.restaurantId
        })
        .where(eq(dimPrepItem.prepItemId, prepItemId));
      
      // Update ingredients if provided
      if (ingredients) {
        // Delete existing ingredients
        await tx
          .delete(factPrepItemIngredients)
          .where(eq(factPrepItemIngredients.prepItemId, prepItemId));
        
        // Insert new ingredients
        if (ingredients.length > 0) {
          await tx
            .insert(factPrepItemIngredients)
            .values(
              ingredients.map(ingredient => ({
                prepItemId: prepItemId,
                ingredientId: ingredient.ingredientId,
                quantity: String(ingredient.quantity),
                unit: ingredient.unit
              }))
            );
        }
      }
      
      // Get the updated recipe with ingredients
      const updatedRecipe = await getRecipeWithIngredientsById(prepItemId);
      
      logger.info('[recipe.dal][modifyRecipe][SUCCESS]', { prepItemId });
      return updatedRecipe;
    } catch (error) {
      logger.error('[recipe.dal][modifyRecipe][ERROR]', { error });
      throw error;
    }
  });
};

// Delete a recipe
export const removeRecipe = async (prepItemId: number): Promise<boolean> => {
  logger.info('[recipe.dal][removeRecipe][START]', { prepItemId });
  
  // Start a transaction
  return await db.transaction(async (tx) => {
    try {
      // Check if the recipe exists
      const existingRecipe = await tx
        .select()
        .from(dimPrepItem)
        .where(eq(dimPrepItem.prepItemId, prepItemId))
        .then(items => items[0]);
      
      if (!existingRecipe) {
        logger.info('[recipe.dal][removeRecipe][NOT_FOUND]', { prepItemId });
        return false;
      }
      
      // Delete ingredients first (foreign key constraint)
      await tx
        .delete(factPrepItemIngredients)
        .where(eq(factPrepItemIngredients.prepItemId, prepItemId));
      
      // Delete the prep item
      await tx
        .delete(dimPrepItem)
        .where(eq(dimPrepItem.prepItemId, prepItemId));
      
      logger.info('[recipe.dal][removeRecipe][SUCCESS]', { prepItemId });
      return true;
    } catch (error) {
      logger.error('[recipe.dal][removeRecipe][ERROR]', { error });
      throw error;
    }
  });
}; 