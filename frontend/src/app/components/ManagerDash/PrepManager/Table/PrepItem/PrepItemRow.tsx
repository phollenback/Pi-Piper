import React from 'react';
import Button from '@/app/components/Elements/Button';
import { PrepItem } from '@/app/types/models/PrepItem';

interface PrepItemRowProps {
  item: PrepItem;
  categoryOptions: { label: string; value: number }[];
  departmentOptions: { label: string; value: number }[];
  onEditClick: (item: PrepItem) => void;
  onDeleteClick: (item: PrepItem) => void;
}

const PrepItemRow: React.FC<PrepItemRowProps> = ({ item, categoryOptions, departmentOptions, onEditClick, onDeleteClick }) => {
  const categoryName = categoryOptions.find(option => option.value === item.category)?.label || 'Unknown';
  const departmentName = departmentOptions.find(option => option.value === item.kitchen_department_id)?.label || 'Unknown';

  return (
    <tr key={item.prep_item_id}>
      <td className="border px-4 py-2">{item.name}</td>
      <td className="border px-4 py-2">{item.description}</td>
      <td className="border px-4 py-2 text-center">{categoryName}</td>
      <td className="border px-4 py-2 text-center">{departmentName}</td>
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

export default PrepItemRow;