"use client";

import { useState } from "react";
import SelectBox from "../../components/Elements/ui/SelectBox";
import RecipeDisplay from "@/app/components/PrepDash/Recipebook/RecipeDisplay";
import RecipeListing from "@/app/components/PrepDash/Recipebook/RecipeListing"; 
import { useDispatch, useSelector } from "react-redux";
import { setPrepSearchTerm } from "@/redux/features/search/searchSlice";
import { Category, categoryAdapter } from "@/app/types/models/Category";
import { useRecipes, Recipe } from "@/app/hooks/useRecipes";
import { RootState } from "@/redux/lib/store";
import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '@/app/actions/prepItemActions';

// RecipeBookContainer component: allows filtering and displaying recipes.
export default function RecipeBookContainer() {
  const [selectedCategory, setSelectedCategory] = useState<string | number>(""); 
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const dispatch = useDispatch();
  // const queryClient = useQueryClient();

  // Get restaurant ID from user state or context
  const restaurantId = useSelector((state: RootState) => state.auth.restaurantId) || 1;
  
  // Unified data fetching
  const { data: recipes = [], isLoading: recipesLoading } = useRecipes(restaurantId);
  
  const { data: categories = [], isLoading: categoriesLoading } = useQuery<Category[]>({
    queryKey: ['categories', restaurantId],
    queryFn: () => fetchCategories(restaurantId),
    enabled: !!restaurantId,
    staleTime: 1000 * 60 * 5
  });

  // Filter recipes based on selected category
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCategory = selectedCategory
      ? recipe.itemCategory === (typeof selectedCategory === "string" ? parseInt(selectedCategory) : selectedCategory)
      : true;
    return matchesCategory;
  });

  // Use the category adapter to create options for the category select box
  const categoryOptions = categoryAdapter.toSelectBoxOptions(categories);

  // Resets the selected category and search term
  const handleReset = () => {
    setSelectedCategory(""); 
    dispatch(setPrepSearchTerm("")); 
  };

  if (recipesLoading || categoriesLoading) {
    return <div>Loading recipe data...</div>;
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {/* Left column (SelectBox and Reset Button) */}
        <div className="col-span-1 bg-zinc-50 p-4">
          <div className="flex items-center space-x-4 mb-4">
            {/* SelectBox for category selection. */}
            <SelectBox
              value={selectedCategory}
              onChange={(value) => setSelectedCategory(value)} 
              options={categoryOptions} 
              placeholder="Select a category"
            />
            {/* Reset Button */}
            <button
              onClick={handleReset}
              className="px-8 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600"
            >
              Reset
            </button>
          </div>
          {selectedCategory && <p className="mt-4">Selected Category: {
            categories.find(c => c.categoryId === (
              typeof selectedCategory === "string" ? parseInt(selectedCategory) : selectedCategory
            ))?.categoryName || selectedCategory
          }</p>}
          
          {/* Full-width RecipeListing */}
          <div className="w-full mt-5">
            <RecipeListing
              recipes={filteredRecipes}
              onRecipeSelect={(recipe) => setSelectedRecipe(recipe)}
            />
          </div>
        </div>

        {/* Right column (RecipeDisplay) */}
        <div className="col-span-3">
          {/* Displays the selected recipe. */}
          <RecipeDisplay selectedRecipe={selectedRecipe} />
        </div>
      </div>
    </>
  );
}
