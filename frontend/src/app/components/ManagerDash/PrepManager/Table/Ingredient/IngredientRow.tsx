import React from 'react';
import Ingredient from '@/app/types/models/Ingredient';
import SelectBox from '@/app/components/Elements/ui/SelectBox';
import Button from '@/app/components/Elements/Button';

interface IngredientRowProps {
  item: Ingredient;
  categoryOptions: { label: string; value: number }[];
  handleSelection: (ingredientId: number, value: string | number, field: 'ingredient_category') => void;
  handleEditClick: (item: Ingredient) => void;
}

const IngredientRow: React.FC<IngredientRowProps> = ({ item, categoryOptions, handleSelection, handleEditClick }) => {
  return (
    <tr key={item.ingredient_id}>
      <td className="border px-4 py-2">{item.ingredient_name}</td>
      <td className="border px-4 py-2">{item.unit_of_measure}</td>
      <td className="border px-4 py-2">{item.cost_per_unit}</td>
      <td className="border px-4 py-2 text-center">
        <SelectBox
          value={item.ingredient_category}
          onChange={(value) => handleSelection(item.ingredient_id, value, 'ingredient_category')}
          options={categoryOptions}
          title={item.ingredient_name}
        />
      </td>
      <td className="border">
        <div className="w-full h-full">
          <Button
            label={"Edit"}
            onClick={() => handleEditClick(item)}
            size="large"
            style={{
              backgroundColor: "blue",
              color: "white",
              width: "100%",
            }}
          />
        </div>
      </td>
    </tr>
  );
};

export default IngredientRow;