import React, { useEffect, useState } from "react";
import PotentialPrepItem from "./PotentialPrepItem";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/lib/store";
import PrepListItem from "@/app/types/models/PrepListItem";

interface AppPrepProps {
  prepList: PrepListItem[];
  category: number | null;
  onAddToDailyPrep: (item: PrepListItem) => void;
  step: number; // Add step prop
  onQuantityChange: (id: number, quantity: number) => void; // Add quantity change handler prop
}

const AllPrepList: React.FC<AppPrepProps> = ({ prepList, category, onAddToDailyPrep, step, onQuantityChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  // Get the search term from Redux (updated dynamically by other components)
  const prepSearchTerm = useSelector((state: RootState) => state.search.prepSearchTerm);

  // Filter the prepList based on the category and search term
  const filteredPrepList = prepList.filter((item) => {
    const matchesCategory = category ? item.category === category : true;
    const matchesSearchTerm =
      (item.name && item.name.toLowerCase().includes(prepSearchTerm.toLowerCase())) ||
      (item.description && item.description.toLowerCase().includes(prepSearchTerm.toLowerCase()));

    return matchesCategory && matchesSearchTerm;
  });

  // Update local state for search term when the global search term changes
  useEffect(() => {
    setSearchTerm(prepSearchTerm);
    console.log(searchTerm);
  }, [prepSearchTerm]);

  const handleQuantityChange = (id: number, quantity: number) => {
    setQuantities((prev) => ({ ...prev, [id]: quantity }));
    onQuantityChange(id, quantity); // Call the passed quantity change handler
  };

  return (
    <div>
      {filteredPrepList.map((item) => (
        <PotentialPrepItem
          key={item.prep_list_id}
          prepItem={item}
          onAdd={onAddToDailyPrep}
          step={step}
          onQuantityChange={handleQuantityChange}
          quantity={quantities[item.prep_list_id] || item.quantity}
        />
      ))}
    </div>
  );
};

export default AllPrepList;