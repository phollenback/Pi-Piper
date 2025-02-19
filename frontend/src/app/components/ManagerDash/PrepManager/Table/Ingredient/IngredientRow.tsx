import React from 'react';
import Ingredient from '@/app/types/models/Ingredient';
import Button from '@/app/components/Elements/Button';

interface IngredientRowProps {
  item: Ingredient;
  categoryOptions: { label: string; value: number }[];
  onEditClick: (item: Ingredient) => void;
  onDeleteClick: (item: Ingredient) => void;
}

const IngredientRow: React.FC<IngredientRowProps> = ({ item, categoryOptions, onEditClick, onDeleteClick }) => {
  const categoryName = categoryOptions.find(option => option.value === item.ingredient_category)?.label || 'Unknown';

  return (
    <tr key={item.ingredient_id}>
      <td className="border px-4 py-2">{item.ingredient_name}</td>
      <td className="border px-4 py-2">{item.unit_of_measure}</td>
      <td className="border px-4 py-2 text-center">{item.cost_per_unit}</td>
      <td className="border px-4 py-2 text-center">{categoryName}</td>
      <td className="border px-4 py-2 text-right">
        <Button
          label={"Delete"}
          onClick={() => onDeleteClick(item)}
          size="small"
          style={{
            backgroundColor: "red",
            color: "white",
          }}
        />
      </td>
      <td className="border px-4 py-2 text-right">
        <Button
          label={"Edit"}
          onClick={() => onEditClick(item)}
          size="small"
          style={{
            backgroundColor: "blue",
            color: "white",
          }}
        />
      </td>
    </tr>
  );
};

export default IngredientRow;