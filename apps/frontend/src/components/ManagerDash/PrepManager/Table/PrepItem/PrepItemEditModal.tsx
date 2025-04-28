import React, { useState } from 'react';
import SelectBox from '@/components/Elements/ui/SelectBox';
import Button from '@/components/Elements/Button';
import { PrepItem } from '@/app/types/models/PrepItem';
import { editPrepItem } from '@/app/actions/prepItemActions';
import { SelectBoxOption } from '@/app/types/models/SelectBoxOption';

interface PrepItemEditModalProps {
  item: PrepItem;
  tableOptions: {
    categories: SelectBoxOption[];
    departments: SelectBoxOption[];
  };
  handleClose: () => void;
}

const PrepItemEditModal: React.FC<PrepItemEditModalProps> = ({ item, tableOptions, handleClose }) => {
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [selectedCategory, setSelectedCategory] = useState(item.category);
  const [selectedDepartment, setSelectedDepartment] = useState(item.kitchen_department_id);

  const handleSaveClick = async () => {
    const updatedItem = {
      ...item,
      name,
      description,
      category: selectedCategory,
      kitchen_department_id: selectedDepartment,
    };
    try {
      await editPrepItem(item.prep_item_id, updatedItem, 1);
      handleClose();
    } catch (error) {
      console.error('Error updating prep item:', error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Edit Prep Item</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="prep-name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              id="prep-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              title="Prep Item Name"
              placeholder="Enter prep item name"
            />
          </div>
          <div>
            <label htmlFor="prep-description" className="block text-sm font-medium text-gray-700">Description</label>
            <input
              id="prep-description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              title="Prep Item Description"
              placeholder="Enter prep item description"
            />
          </div>
          <div>
            <label htmlFor="prep-category" className="block text-sm font-medium text-gray-700">Category</label>
            <SelectBox
              value={selectedCategory}
              onChange={(value) => setSelectedCategory(Number(value))}
              options={tableOptions.categories}
              title="Category Selection"
            />
          </div>
          <div>
            <label htmlFor="prep-department" className="block text-sm font-medium text-gray-700">Department</label>
            <SelectBox
              value={selectedDepartment}
              onChange={(value) => setSelectedDepartment(Number(value))}
              options={tableOptions.departments}
              title="Department Selection"
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

export default PrepItemEditModal;