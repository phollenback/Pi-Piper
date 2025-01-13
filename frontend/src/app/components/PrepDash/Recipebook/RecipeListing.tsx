import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "../../Elements/Button";
import { RootState } from "@/redux/lib/store";

interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  category: number;
  procedure: string;
}

interface RecipeListingProps {
  recipes: Recipe[]; // Recipe data passed to the component
  onRecipeSelect: (recipe: Recipe) => void; // Callback to handle recipe selection
}

const RecipeListing: React.FC<RecipeListingProps> = ({ recipes, onRecipeSelect }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const prepSearchTerm = useSelector((state: RootState) => state.search.prepSearchTerm);

  const filteredRecipes = recipes.filter((recipe) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    return (
      recipe.name.toLowerCase().includes(lowercasedTerm) ||
      recipe.description.toLowerCase().includes(lowercasedTerm)
    );
  });

  useEffect(() => {
    setSearchTerm(prepSearchTerm);
  }, [prepSearchTerm]);

  return (
    <div className="bg-zinc-100 pt-6 pl-8 pr-8">
      <div className="flex flex-col items-center">
        {filteredRecipes.map((recipe) => (
          <Button
            key={recipe.id}
            label={recipe.name}
            onClick={() => onRecipeSelect(recipe)} // Pass full recipe object
            size="large"
            style={{
              backgroundColor: "rgb(21, 205, 30)",
              cursor: "pointer",
              width: "90%",
              marginBottom: "10px",
              
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeListing;