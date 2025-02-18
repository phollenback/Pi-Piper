import React from 'react';
import SelectBox from '@/app/components/Elements/ui/SelectBox';
import Button from '@/app/components/Elements/Button';
import { PrepItem } from '@/app/types/models/PrepItem';

// PrepItemRow component: displays a single row in a prep item table, allowing for editing.
interface PrepItemRowProps {
  item: PrepItem; // Prep item data.
  categoryOptions: { label: string; value: number }[]; // Options for the category select box.
  departmentOptions: { label: string; value: number }[]; // Options for the department select box.
  handleSelection: (prepItemId: number, value: string | number, field: 'category' | 'kitchen_department_id' | 'ingredient_category') => void; // Callback for select box changes.
  handleEditClick: (item: PrepItem) => void; // Callback for edit button click.
}

const PrepItemRow: React.FC<PrepItemRowProps> = ({ item, categoryOptions, departmentOptions, handleSelection, handleEditClick }) => {
  return (
    <tr key={item.prep_item_id}>
      <td className="border px-4 py-2">{item.name}</td>
      <td className="border px-4 py-2">{item.description}</td>
      <td className="border px-4 py-2 text-center">
        <SelectBox
            value={item.category}
            onChange={(value) => handleSelection(item.prep_item_id, value, 'category')}
            options={categoryOptions}
            title={item.name}
        />
      </td>
      <td className="border px-4 py-2 text-center">
      <SelectBox
        value={item.kitchen_department_id}
        onChange={(value) => handleSelection(item.prep_item_id, value, 'kitchen_department_id')}
        options={departmentOptions}
        title={item.name}
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

export default PrepItemRow;