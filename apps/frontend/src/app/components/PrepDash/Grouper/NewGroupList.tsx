'use client';

 import { PrepItem } from '@/app/types/models/PrepItem';

interface NewGroupListProps {
  items: PrepItem[];
  onItemSelect: (item: PrepItem) => void;
  selectedItems: PrepItem[];
}

export default function NewGroupList({ items, onItemSelect, selectedItems }: NewGroupListProps) {
  return (
    <div className="border rounded-lg p-4 max-h-[400px] overflow-y-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className={`p-2 border-b cursor-pointer hover:bg-gray-50 flex justify-between items-center ${
            selectedItems.some((selected) => selected.prep_item_id === item.prep_item_id)
              ? 'bg-blue-50'
              : ''
          }`}
          onClick={() => onItemSelect(item)}
        >
          <span>{item.name}</span>
          <span className="text-sm text-gray-500">{item.description}</span>
        </div>
      ))}
    </div>
  );
} 