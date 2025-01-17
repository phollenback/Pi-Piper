import React from 'react';
import SelectBox from '@/app/components/Elements/ui/SelectBox';
import Button from '@/app/components/Elements/Button';
import PrepItem from '@/app/types/models/PrepItem';

interface PrepItemRowProps {
  item: PrepItem;
  categoryOptions: { label: string; value: number }[];
  departmentOptions: { label: string; value: number }[];
  handleSelection: (prepItemId: number, value: string | number, field: 'category' | 'kitchen_department_id' | 'ingredient_category') => void;
  handleEditClick: (item: PrepItem) => void;
}

const PrepItemRow: React.FC<PrepItemRowProps> = ({ item, categoryOptions, departmentOptions, handleSelection, handleEditClick }) => {
  return (
    <tr key={item.prep_item_id}>
      <td className="border px-4 py-2">{item.prep_item_name}</td>
      <td className="border px-4 py-2">{item.description}</td>
      <td className="border px-4 py-2 text-center">
        <SelectBox
            value={item.category}
            onChange={(value) => handleSelection(item.prep_item_id, value, 'category')}
            options={categoryOptions}
            title={item.prep_item_name}
        />
      </td>
      <td className="border px-4 py-2 text-center">
      <SelectBox
        value={item.kitchen_department_id}
        onChange={(value) => handleSelection(item.prep_item_id, value, 'kitchen_department_id')}
        options={departmentOptions}
        title={item.prep_item_name}
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