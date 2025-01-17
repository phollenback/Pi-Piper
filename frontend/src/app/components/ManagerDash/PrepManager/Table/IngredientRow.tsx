import React from 'react';
import Ingredient from '@/app/types/models/Ingredient';

interface IngredientRowProps {
  item: Ingredient;
}

const IngredientRow: React.FC<IngredientRowProps> = ({ item }) => {
  return (
    <tr key={item.ingredient_id}>
      <td className="border px-4 py-2">{item.ingredient_name}</td>
      <td className="border px-4 py-2">{item.unit_of_measure}</td>
      <td className="border px-4 py-2">{item.cost_per_unit}</td>
      <td className="border px-4 py-2">{item.ingredient_category}</td>
      <td className="border px-4 py-2">{item.restaurant_id}</td>
    </tr>
  );
};

export default IngredientRow;