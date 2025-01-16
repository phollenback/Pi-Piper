"use client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import SelectBox from "../../components/Elements/ui/SelectBox";
import RecipeDisplay from "@/app/components/PrepDash/Recipebook/RecipeDisplay";
import RecipeListing from "@/app/components/PrepDash/Recipebook/RecipeListing"; // Import RecipeListing
import { fetchRecipes } from "@/app/util/data";
import { useDispatch } from "react-redux";
import { setPrepSearchTerm } from "@/redux/features/search/searchSlice";
import Category from "@/app/types/models/Category";

interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  category: number;
  procedure: string;
}

export default function RecipeBookContainer() {
  const [selectedCategory, setSelectedCategory] = useState<string | number>(""); // Can be string or number
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const dispatch = useDispatch();
  const recipes = fetchRecipes();

  const { data: categories = [], isLoading, isError, error, refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/categories");
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      return response.json();
    },
  });

  if (isLoading) {
    return <div>Loading categories...</div>;
  }

  if (isError) {
    return <div>Error: {error instanceof Error ? error.message : "An error occurred"}</div>;
  }

  // Filter recipes based on selected category ID
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCategory = selectedCategory
      ? recipe.category === (typeof selectedCategory === "string" ? parseInt(selectedCategory) : selectedCategory)
      : true;
    return matchesCategory;
  });

  // Extract category names and IDs to pass to the SelectBox options
  const categoryOptions = categories.map((category: Category) => ({
    label: category.category_name,
    value: category.category_id,
  }));

  const handleReset = () => {
    setSelectedCategory(""); // Clear selected category
    dispatch(setPrepSearchTerm("")); // Reset search term
    refetch();
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {/* Left column (SelectBox and Reset Button) */}
        <div className="col-span-1 bg-zinc-50 p-4">
          <div className="flex items-center space-x-4 mb-4">
            {/* SelectBox */}
            <SelectBox
              value={selectedCategory}
              onChange={(value) => setSelectedCategory(value)} // Pass value directly
              options={categoryOptions} // Pass category options (ID and name)
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
          {/* Display details of the selected recipe */}
          <RecipeDisplay selectedRecipe={selectedRecipe} />
        </div>
      </div>
    </>
  );
}