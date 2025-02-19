import React, { useState } from 'react';
import Ingredient from '@/app/types/models/Ingredient';
import SelectBox from '@/app/components/Elements/ui/SelectBox';
import Button from '@/app/components/Elements/Button';
import { editIngredient } from './actions';

interface IngredientEditModalProps {
  item: Ingredient;
  categoryOptions: { label: string; value: number }[];
  handleClose: () => void;
}

const IngredientEditModal: React.FC<IngredientEditModalProps> = ({ item, categoryOptions, handleClose }) => {
  const [ingredientName, setIngredientName] = useState(item.ingredient_name);
  const [unitOfMeasure, setUnitOfMeasure] = useState(item.unit_of_measure);
  const [selectedCategory, setSelectedCategory] = useState(item.ingredient_category);

  const handleSaveClick = async () => {
    const updatedItem = {
      ...item,
      ingredient_name: ingredientName,
      unit_of_measure: unitOfMeasure,
      ingredient_category: selectedCategory,
    };
    await editIngredient(updatedItem, 1);
    handleClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Edit Ingredient</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Ingredient Name</label>
            <input
              type="text"
              value={ingredientName}
              onChange={(e) => setIngredientName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Unit of Measure</label>
            <input
              type="text"
              value={unitOfMeasure}
              onChange={(e) => setUnitOfMeasure(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <SelectBox
              value={selectedCategory}
              onChange={(value) => setSelectedCategory(Number(value))}
              options={categoryOptions}
              title={item.ingredient_name}
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button
              label={"Cancel"}
              onClick={handleClose}
              size="small"
              style={{
                backgroundColor: "gray",
                color: "white",
              }}
            />
            <Button
              label={"Save"}
              onClick={handleSaveClick}
              size="small"
              style={{
                backgroundColor: "green",
                color: "white",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientEditModal;