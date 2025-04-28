import React, { useEffect, useState } from "react";
import PotentialPrepItem from "./PotentialPrepItem";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/lib/store";
import {PrepItem} from "@/app/types/models/PrepItem";

// AllPrepList component: displays a list of potential prep items, filtered by category and search term.
interface AppPrepProps {
  prepList: PrepItem[]; // Array of prep items to display.
  category: number | null; // Selected category filter (null for no filter).
  onAddToDailyPrep: (item: PrepItem) => void; // Callback to add item to daily prep list.
  step: number; // Current step in the process.
  onQuantityChange: (id: number, quantity: number) => void; // Callback to handle quantity changes.
}

const AllPrepList: React.FC<AppPrepProps> = ({ prepList, category, onAddToDailyPrep, step, onQuantityChange }) => {
  const [, setSearchTerm] = useState(""); // Local search term state.
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({}); //State to store quantities for each item

  // Redux search term (updated dynamically).
  const prepSearchTerm = useSelector((state: RootState) => state.search.prepSearchTerm);

  // Filters the prep list based on category and search term.
  const filteredPrepList = prepList.filter((item) => {
    const matchesCategory = category ? item.category === category : true;
    const matchesSearchTerm =
      (item.name && item.name.toLowerCase().includes(prepSearchTerm.toLowerCase())) ||
      (item.description && item.description.toLowerCase().includes(prepSearchTerm.toLowerCase()));

    return matchesCategory && matchesSearchTerm;
  });

  // Updates the local search term when the Redux search term changes.
  useEffect(() => {
    setSearchTerm(prepSearchTerm);
  }, [prepSearchTerm]);

  // Handles changes to the quantity of a prep item.
  const handleQuantityChange = (id: number, quantity: number) => {
    setQuantities((prev) => ({ ...prev, [id]: quantity }));
    onQuantityChange(id, quantity); 
  };


  return (
    <>
      {filteredPrepList.map((item) => ( // Removed unnecessary index parameter
        <PotentialPrepItem
          key={item.prep_item_id} // Use prep_item_id as key
          prepItem={item}
          onAdd={(item) => onAddToDailyPrep(item)}
          step={step}
          onQuantityChange={handleQuantityChange}
          quantity={quantities[item.prep_item_id] || 0} // Default to 0 if quantity is not in state
        />
      ))}
    </>
  );
};

export default AllPrepList;