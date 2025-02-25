import type Ingredient from "@/app/types/models/Ingredient";

const TimeVariables: React.FC = () => {
    const ingredients: Ingredient[] = [
        {
          ingredient_id: 1,
          ingredient_name: "Diced Tomatoes",
          unit_of_measure: "kg",
          cost_per_unit: 2.5,
          ingredient_category: 1,
          restaurant_id: 101
        },
        {
          ingredient_id: 2,
          ingredient_name: "Grated Parmesan Cheese",
          unit_of_measure: "grams",
          cost_per_unit: 0.03,
          ingredient_category: 2,
          restaurant_id: 101
        },
        {
          ingredient_id: 3,
          ingredient_name: "Chicken Thighs",
          unit_of_measure: "lbs",
          cost_per_unit: 4.2,
          ingredient_category: 3,
          restaurant_id: 101
        },
        {
          ingredient_id: 4,
          ingredient_name: "Olive Oil",
          unit_of_measure: "liters",
          cost_per_unit: 5.0,
          ingredient_category: 4,
          restaurant_id: 101
        },
        {
          ingredient_id: 5,
          ingredient_name: "Fresh Basil",
          unit_of_measure: "grams",
          cost_per_unit: 0.15,
          ingredient_category: 1,
          restaurant_id: 101
        },
        {
          ingredient_id: 6,
          ingredient_name: "Ground Beef",
          unit_of_measure: "lbs",
          cost_per_unit: 3.8,
          ingredient_category: 3,
          restaurant_id: 101
        },
        {
          ingredient_id: 7,
          ingredient_name: "Mozzarella Cheese",
          unit_of_measure: "grams",
          cost_per_unit: 0.05,
          ingredient_category: 2,
          restaurant_id: 101
        },
        {
          ingredient_id: 8,
          ingredient_name: "Lettuce",
          unit_of_measure: "kg",
          cost_per_unit: 1.2,
          ingredient_category: 1,
          restaurant_id: 101
        },
        {
          ingredient_id: 9,
          ingredient_name: "Avocados",
          unit_of_measure: "each",
          cost_per_unit: 1.75,
          ingredient_category: 1,
          restaurant_id: 101
        },
        {
          ingredient_id: 10,
          ingredient_name: "Cucumbers",
          unit_of_measure: "each",
          cost_per_unit: 0.9,
          ingredient_category: 1,
          restaurant_id: 101
        },
        {
          ingredient_id: 11,
          ingredient_name: "Brown Sugar",
          unit_of_measure: "kg",
          cost_per_unit: 1.8,
          ingredient_category: 5,
          restaurant_id: 101
        },
        {
          ingredient_id: 12,
          ingredient_name: "Balsamic Vinegar",
          unit_of_measure: "liters",
          cost_per_unit: 3.5,
          ingredient_category: 4,
          restaurant_id: 101
        },
        {
          ingredient_id: 13,
          ingredient_name: "Chicken Breast",
          unit_of_measure: "lbs",
          cost_per_unit: 5.0,
          ingredient_category: 3,
          restaurant_id: 101
        },
        {
          ingredient_id: 14,
          ingredient_name: "Garlic Cloves",
          unit_of_measure: "grams",
          cost_per_unit: 0.1,
          ingredient_category: 1,
          restaurant_id: 101
        },
        {
          ingredient_id: 15,
          ingredient_name: "Lemon",
          unit_of_measure: "each",
          cost_per_unit: 0.4,
          ingredient_category: 1,
          restaurant_id: 101
        },
        {
          ingredient_id: 16,
          ingredient_name: "Pineapple",
          unit_of_measure: "each",
          cost_per_unit: 3.0,
          ingredient_category: 1,
          restaurant_id: 101
        },
        {
          ingredient_id: 17,
          ingredient_name: "Eggs",
          unit_of_measure: "dozen",
          cost_per_unit: 1.9,
          ingredient_category: 6,
          restaurant_id: 101
        },
        {
          ingredient_id: 18,
          ingredient_name: "Flour",
          unit_of_measure: "kg",
          cost_per_unit: 1.0,
          ingredient_category: 5,
          restaurant_id: 101
        },
        {
          ingredient_id: 19,
          ingredient_name: "Salt",
          unit_of_measure: "kg",
          cost_per_unit: 0.5,
          ingredient_category: 5,
          restaurant_id: 101
        },
        {
          ingredient_id: 20,
          ingredient_name: "Black Pepper",
          unit_of_measure: "grams",
          cost_per_unit: 0.2,
          ingredient_category: 5,
          restaurant_id: 101
        },
        {
          ingredient_id: 21,
          ingredient_name: "Chili Powder",
          unit_of_measure: "grams",
          cost_per_unit: 0.15,
          ingredient_category: 5,
          restaurant_id: 101
        },
        {
          ingredient_id: 22,
          ingredient_name: "Cinnamon",
          unit_of_measure: "grams",
          cost_per_unit: 0.25,
          ingredient_category: 5,
          restaurant_id: 101
        }
      ];

      // Sorting function to sort ingredients by `cost_per_unit` in ascending order
      const sortIngredients = () => {
            return ingredients.sort((a, b) => a.cost_per_unit - b.cost_per_unit);
      }

      return (
        <div className="overflow-auto max-h-[calc(100vh-350px)] pl-4">
          <table className="w-full mt-4 border border-accent-dark">
            <thead>
              <tr className="bg-secondary">
                <th className="px-4 py-2 border border-accent-dark text-text-primary">Index</th>
                <th className="px-4 py-2 border border-accent-dark text-text-primary">Ingredient Name</th>
                <th className="px-4 py-2 border border-accent-dark text-text-primary">Status</th>
              </tr>
            </thead>
            <tbody>
              {sortIngredients().map((item, idx) => (
                <tr key={idx} className="even:bg-background-light">
                  <td className="px-4 py-2 border border-accent-dark text-text-primary text-center">{item.ingredient_id}</td>
                  <td className="px-4 py-2 border border-accent-dark text-text-primary">{item.ingredient_name}</td>
                  <td className="px-4 py-2 border border-accent-dark text-text-primary text-center">{item.cost_per_unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default TimeVariables;