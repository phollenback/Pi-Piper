"use client";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import SelectBox from "../../components/Elements/ui/SelectBox";
import RecipeDisplay from "@/app/components/PrepDash/Recipebook/RecipeDisplay";
import RecipeListing from "@/app/components/PrepDash/Recipebook/RecipeListing"; 
import { fetchRecipes } from "@/app/util/data";
import { useDispatch } from "react-redux";
import { setPrepSearchTerm } from "@/redux/features/search/searchSlice";
import Category from "@/app/types/models/Category";

// Recipe data structure.
interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  category: number;
  procedure: string;
}

// RecipeBookContainer component: allows filtering and displaying recipes.
export default function RecipeBookContainer() {
  const [selectedCategory, setSelectedCategory] = useState<string | number>(""); 
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null); // Selected recipe state.
  const dispatch = useDispatch();
  const recipes = fetchRecipes(); // Fetch recipes (this should likely be a useQuery)
  const qc = useQueryClient();
  const categories : Category[] = []; //This should probably be fetched as well.
  
  qc.setQueryData(["categories"], () => categories)

  // Filters recipes based on the selected category.
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCategory = selectedCategory
      ? recipe.category === (typeof selectedCategory === "string" ? parseInt(selectedCategory) : selectedCategory)
      : true;
    return matchesCategory;
  });

  // Creates options for the category select box.
  const categoryOptions = categories.map((category: Category) => ({
    label: category.category_name,
    value: category.category_id,
  }));

  // Resets the selected category and search term.
  const handleReset = () => {
    setSelectedCategory(""); 
    dispatch(setPrepSearchTerm("")); 
  };

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
          {selectedCategory && <p className="mt-4">Selected Category: {selectedCategory}</p>}
          
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
