import React from "react";
import NumberSelect from "@/app/components/Elements/ui/NumberSelect";
import Button from "../../Elements/Button";

interface DailyPrepItem {
  prep_list_id: number;
  name: string;
  description: string;
  quantity: number;
  unit: string;
  category: number;
  status: string;
}

interface PotentialPrepItemProps {
  prepItem: DailyPrepItem;
  onAdd: () => void;
}

const PotentialPrepItem: React.FC<PotentialPrepItemProps> = ({ prepItem, onAdd }) => {
  return (
    <div className="w-full p-4 border rounded-md bg-white shadow-sm flex items-center justify-between mb-2">
      <div>
        <h3 className="text-md font-semibold">{prepItem.name}</h3>
        <p className="text-sm text-gray-500">{prepItem.description}</p>
      </div>
      <div className="flex items-center space-x-2">
        <NumberSelect
          min={1}
          max={prepItem.quantity}
          step={0.5}
          onChange={() => {}}
          label="Qty"
        />
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