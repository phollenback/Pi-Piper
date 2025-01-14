import React, { useEffect, useState } from "react";
import PotentialPrepItem from "./PotentialPrepItem";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/lib/store";

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
  const [searchTerm, setSearchTerm] = useState("");
  
  // Get the search term from Redux (updated dynamically by other components)
  const prepSearchTerm = useSelector((state: RootState) => state.search.prepSearchTerm);

  // Filter the prepList based on the category and search term
  const filteredPrepList = prepList.filter((item) => {
    const matchesCategory = category ? item.category === category : true;
    const matchesSearchTerm =
      item.name.toLowerCase().includes(prepSearchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(prepSearchTerm.toLowerCase());

    return matchesCategory && matchesSearchTerm;
  });

  // Update local state for search term when the global search term changes
  useEffect(() => {
    setSearchTerm(prepSearchTerm);
    console.log(searchTerm);
  }, [prepSearchTerm]);

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