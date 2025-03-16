import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

// Define types based on your actual database schema
export interface PrepItem {
  prepItemId: number;
  prepItemName: string;
  description: string | null;
  itemCategory: number | null;
  kitchenDepartmentId: number | null;
  restaurantId: number | null;
}

export interface PrepItemIngredient {
  prepIngredientId: number;
  prepItemId: number;
  ingredientId: number;
  quantity: number;
  unit: string | null;
  ingredient?: Ingredient;
}

export interface Ingredient {
  ingredientId: number;
  ingredientName: string;
  unit: string | null;
  unitPrice: number | null;
  isActive: boolean | null;
}

export interface Recipe extends PrepItem {
  ingredients: PrepItemIngredient[];
  procedure: string;
}

// Type for creating/updating recipes
export interface RecipeInput {
  recipe: Partial<Omit<PrepItem, 'prepItemId'>>;
  ingredients: Array<{
    ingredientId: number;
    quantity: number;
    unit: string | null;
  }>;
}

// Fetch all recipes
export const useRecipes = (restaurantId?: number) => {
  return useQuery<Recipe[]>({
    queryKey: ['recipes', restaurantId],
    queryFn: async () => {
      if (!restaurantId) {
        return [];
      }
      
      const { data } = await axios.get<Recipe[]>(
        `http://localhost:3001/recipes/${restaurantId}`
      );
      return data;
    },
    enabled: !!restaurantId
  });
};

// Fetch a single recipe
export const useRecipe = (recipeId?: number) => {
  return useQuery<Recipe>({
    queryKey: ['recipe', recipeId],
    queryFn: async () => {
      const { data } = await axios.get<Recipe>(`http://localhost:3001/recipes/detail/${recipeId}`);
      return data;
    },
    enabled: !!recipeId
  });
};

// Create a new recipe
export const useCreateRecipe = () => {
  const queryClient = useQueryClient();
  
  return useMutation<Recipe, Error, RecipeInput>({
    mutationFn: async (newRecipe) => {
      const { data } = await axios.post<Recipe>('http://localhost:3001/recipes', newRecipe);
      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['recipes'] });
      queryClient.setQueryData(['recipe', data.prepItemId], data);
    }
  });
};

// Update an existing recipe
export const useUpdateRecipe = (recipeId: number) => {
  const queryClient = useQueryClient();
  
  return useMutation<Recipe, Error, RecipeInput>({
    mutationFn: async (updatedRecipe) => {
      const { data } = await axios.put<Recipe>(`http://localhost:3001/recipes/${recipeId}`, updatedRecipe);
      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['recipes'] });
      queryClient.setQueryData(['recipe', recipeId], data);
    }
  });
};

// Delete a recipe
export const useDeleteRecipe = () => {
  const queryClient = useQueryClient();
  
  return useMutation<void, Error, number>({
    mutationFn: async (recipeId) => {
        await axios.delete(`http://localhost:3001/recipes/${recipeId}`);
    },
    onSuccess: (_, recipeId) => {
      queryClient.invalidateQueries({ queryKey: ['recipes'] });
      queryClient.removeQueries({ queryKey: ['recipe', recipeId] });
    }
  });
}; 