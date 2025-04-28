import React from "react";
import NumberSelect from "@/components/Elements/ui/NumberSelect";
import Button from "@/components/Elements/Button";
import { PrepItem } from "@/app/types/models/PrepItem";

interface PotentialPrepItemProps {
  prepItem: PrepItem;
  onAdd: (item: PrepItem) => void;
  onQuantityChange: (id: number, quantity: number) => void;
  step: number;
  quantity: number
}

// Selectable prep item component with quantity adjustment and add functionality
const PotentialPrepItem: React.FC<PotentialPrepItemProps> = ({ prepItem, onAdd, onQuantityChange, step }) => {
  
  // Updates quantity in parent component
  const handleQuantityChange = (quantity: number) => {
    onQuantityChange(prepItem.prep_item_id, quantity);
  };

  // Triggers item addition in parent component
  const onItemClick = () => {
      onAdd(prepItem);
  }

  return (
    <div className="w-full p-4 border rounded-md bg-white shadow-sm flex items-center justify-between mb-2">
      <div className="flex-1">
        <h3 className="text-md font-semibold">{prepItem.name}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">{prepItem.description}</p>
      </div>
      <div className="flex items-center space-x-2">
        <NumberSelect
          min={0}
          max={100}
          step={step}
          onChange={handleQuantityChange}
          label="Qty"
          value={0}
        />
        <Button
          label="ADD"
          onClick={onItemClick}
          size="large"
          style={{
            backgroundColor: "green",
            color: "white"
          }}
        />
      </div>
    </div>
  );
};

export default PotentialPrepItem;