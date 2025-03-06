import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "../../Elements/Button";
import { RootState } from "@/redux/lib/store";
import { Recipe } from "@/app/hooks/useRecipes";

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
    const recipeName = recipe.prepItemName || '';
    const description = recipe.description || '';
    
    return (
      recipeName.toLowerCase().includes(lowercasedTerm) ||
      description.toLowerCase().includes(lowercasedTerm)
    );
  });

  // Updates the local search term when the Redux search term changes.
  useEffect(() => {
    setSearchTerm(prepSearchTerm);
    
    console.log('recipes listing',recipes);
  }, [prepSearchTerm, recipes]);

  return (
    <div className="bg-zinc-100 pt-6 pl-8 pr-8">
      <div className="flex flex-col items-center">
        {filteredRecipes.map((recipe) => (
          <Button
            key={recipe.prepItemId}
            label={recipe.prepItemName || 'Unnamed Recipe'}
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