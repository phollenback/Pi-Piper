import { useEffect, useState } from "react";
import { Recipe } from "@/app/hooks/useRecipes";

interface RecipeDisplayProps {
  selectedRecipe: Recipe | null;
}

// Detailed recipe display component with sectioned layout for recipe information
const RecipeDisplay: React.FC<RecipeDisplayProps> = ({ selectedRecipe }) => {
  const [recipeDetails, setRecipeDetails] = useState<Recipe | null>(null);

  // Sync local state with selected recipe
  useEffect(() => {
    setRecipeDetails(selectedRecipe);
  }, [selectedRecipe]);

  if (!recipeDetails) {
    return (
      <div className="p-8 bg-zinc-100 rounded-md flex items-center justify-center h-full">
        <p className="text-lg text-gray-500">Select a recipe to view details</p>
      </div>
    );
  }

  // Extract procedure from description
  const procedure = recipeDetails.procedure || recipeDetails.description || "No procedure available";

  return (
    <div className="p-8 bg-zinc-100 grid auto-rows-max rounded-md">
      <div className="bg-blue-50 p-4 rounded-md mb-4 border border-blue-200">
        <h2 className="text-xl font-bold text-blue-600">{recipeDetails.prepItemName}</h2>
      </div>

      <div className="bg-gray-50 p-4 rounded-md mb-4 border border-gray-200">
        <p className="text-lg text-gray-700">{recipeDetails.description || "No description available"}</p>
      </div>

      <div className="bg-green-50 p-4 rounded-md mb-4 border border-green-200">
        <h3 className="text-lg font-semibold text-green-600 mb-2">Ingredients:</h3>
        {recipeDetails.ingredients && recipeDetails.ingredients.length > 0 ? (
          <ul className="list-disc ml-6">
            {recipeDetails.ingredients.map((item) => (
              <li key={item.prepIngredientId} className="text-lg text-gray-600">
                <span className="font-medium">{item.quantity} {item.unit}</span> of {item.ingredient?.ingredientName || `Ingredient #${item.ingredientId}`}
                {item.ingredient?.unitPrice && (
                  <span className="text-sm text-gray-500 ml-2">
                    (Est. cost: ${(item.quantity * item.ingredient.unitPrice).toFixed(2)})
                  </span>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No ingredients listed</p>
        )}
      </div>

      <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200">
        <h3 className="text-lg font-semibold text-yellow-600 mb-2">Procedure:</h3>
        <div className="text-lg text-gray-600">
          {procedure.split("\n").map((step, index) => (
            <p key={index} className="mb-2">
              {step}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeDisplay;