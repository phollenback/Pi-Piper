import React, { useEffect, useState } from "react";
import PotentialPrepItem from "./PotentialPrepItem";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/lib/store";
import PrepListItem from "@/app/util/data";


interface AppPrepProps {
  prepList: PrepListItem[];
  category: number | null;
  onAddToDailyPrep: (item: PrepListItem) => void;
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
    <div className="flex flex-wrap">
      <div className="w-50">
        {filteredPrepList.map((item) => (
        <PotentialPrepItem
          key={item.prep_list_id}
          prepItem={item}
          onAdd={() => onAddToDailyPrep(item)}
        />
        ))}
      </div>
    </div>
  );
};

export default AllPrepList;