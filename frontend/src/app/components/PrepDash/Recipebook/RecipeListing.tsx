import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "../../Elements/Button";
import { RootState } from "@/redux/lib/store";

// Recipe data structure.
interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  category: number;
  procedure: string;
}

// RecipeListing component: displays a list of recipes, allowing selection.
interface RecipeListingProps {
  recipes: Recipe[]; // Array of recipe objects.
  onRecipeSelect: (recipe: Recipe) => void; // Callback function for selecting a recipe.
}

const RecipeListing: React.FC<RecipeListingProps> = ({ recipes, onRecipeSelect }) => {
  const [searchTerm, setSearchTerm] = useState<string>(""); // Local search term state.
  const prepSearchTerm = useSelector((state: RootState) => state.search.prepSearchTerm); // Redux search term.

  // Filters recipes based on the search term.
  const filteredRecipes = recipes.filter((recipe) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    return (
      recipe.name.toLowerCase().includes(lowercasedTerm) ||
      recipe.description.toLowerCase().includes(lowercasedTerm)
    );
  });

  // Updates the local search term when the Redux search term changes.
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
            onClick={() => onRecipeSelect(recipe)} 
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