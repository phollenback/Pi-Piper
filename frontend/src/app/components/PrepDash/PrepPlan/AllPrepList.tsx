import React from "react";
import PotentialPrepItem from "./PotentialPrepItem";

interface DailyPrepItem {
  prep_list_id: number;
  name: string;
  description: string;
  quantity: number;
  unit: string;
  category: number;
  status: string;
}

interface AppPrepProps {
  prepList: DailyPrepItem[];
  category: number | null;
  onAddToDailyPrep: (item: DailyPrepItem) => void;
}

const AllPrepList: React.FC<AppPrepProps> = ({ prepList, category, onAddToDailyPrep }) => {
  // Filter prepList based on selected category
  const filteredPrepList = category
    ? prepList.filter((item) => item.category === category)
    : prepList;

  return (
    <div>
      {filteredPrepList.map((item) => (
        <PotentialPrepItem
          key={item.prep_list_id}
          prepItem={item}
          onAdd={() => onAddToDailyPrep(item)}
        />
      ))}
    </div>
  );
};

export default AllPrepList;