import { useEffect, useState } from "react";

interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  category: number;
  procedure: string; // Added a procedure property
}

interface RecipeDisplayProps {
  selectedRecipe: Recipe | null;
}

const RecipeDisplay: React.FC<RecipeDisplayProps> = ({ selectedRecipe }) => {
  const [recipeDetails, setRecipeDetails] = useState<Recipe | null>(null);

  useEffect(() => {
    setRecipeDetails(selectedRecipe);
  }, [selectedRecipe]);

  if (!recipeDetails) {
    return <p>Select a recipe to view details</p>;
  }

  return (
    <div className="p-8 bg-zinc-100 grid auto-rows-max rounded-md">
      {/* Title section */}
      <div className="bg-blue-50 p-4 rounded-md mb-4 border border-blue-200">
        <h2 className="text-xl font-bold text-blue-600">{recipeDetails.name}</h2>
      </div>

      {/* Description section */}
      <div className="bg-gray-50 p-4 rounded-md mb-4 border border-gray-200">
        <p className="text-lg text-gray-700">{recipeDetails.description}</p>
      </div>

      {/* Ingredients section */}
      <div className="bg-green-50 p-4 rounded-md mb-4 border border-green-200">
        <h3 className="text-lg font-semibold text-green-600 mb-2">Ingredients:</h3>
        <ul className="list-disc ml-6">
          {recipeDetails.ingredients.map((ingredient, index) => (
            <li key={index} className="text-lg text-gray-600">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>

      {/* Procedure section */}
      <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200">
        <h3 className="text-lg font-semibold text-yellow-600 mb-2">Procedure:</h3>
        <div className="text-lg text-gray-600">
          {recipeDetails.procedure.split("\n").map((step, index) => (
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