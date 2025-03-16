import React from 'react';
import Ingredient from '@/app/types/models/Ingredient';
import Button from '@/app/components/Elements/Button';

interface IngredientRowProps {
  item: Ingredient;
  onEditClick: (item: Ingredient) => void;
  onDeleteClick: (item: Ingredient) => void;
}

const IngredientRow: React.FC<IngredientRowProps> = ({ item, onEditClick, onDeleteClick }) => {

  return (
    <tr key={item.ingredientId}>
      <td className="border px-4 py-2">{item.ingredientName}</td>
      <td className="border px-4 py-2">{item.unit}</td>
      <td className="border px-4 py-2 text-center">{item.unitPrice}</td>
      <td className="border px-4 py-2 text-center">{item.ingredientCategory}</td>
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