import React from "react";
import NumberSelect from "@/app/components/Elements/ui/NumberSelect";
import Button from "../../Elements/Button";
import PrepListItem from "@/app/types/models/PrepListItem";

interface PotentialPrepItemProps {
  prepItem: PrepListItem;
  onAdd: () => void;
  onQuantityChange: (id: number, quantity: number) => void;
  step: number; // Add step prop
}

const PotentialPrepItem: React.FC<PotentialPrepItemProps> = ({ prepItem, onAdd, onQuantityChange, step }) => {
  const handleQuantityChange = (quantity: number) => {
    onQuantityChange(prepItem.prep_list_id, quantity);
  };

  return (
    <div className="w-full p-4 border rounded-md bg-white shadow-sm flex items-center justify-between mb-2">
      <div className="flex-1">
        <h3 className="text-md font-semibold">{prepItem.name}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">{prepItem.description}</p>
      </div>
      <div className="flex items-center space-x-2">
        <NumberSelect
          min={0}
          max={100} // Set a reasonable max value
          step={step} // Use the step value
          onChange={handleQuantityChange}
          label="Qty"
          value={prepItem.quantity}
        />
        <div className="text-sm font-medium text-gray-700">
          {prepItem.unit}
        </div>
        <Button
          label="ADD"
          onClick={onAdd}
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