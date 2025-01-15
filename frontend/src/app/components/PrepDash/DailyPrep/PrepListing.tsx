import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/lib/store"; // Import RootState from store.ts
import PrepItemCard from "./PrepItemCard";
import PrepListItem from "../../../types/models/PrepListItem";

interface PrepListingProps {
  list: PrepListItem[];
  handleCardClick: (item: PrepListItem) => void; // Accept PrepListItem as argument
}

const PrepListing: React.FC<PrepListingProps> = ({ list, handleCardClick }) => {
  const [searchTerm, setSearchTerm] = useState(""); // Local state to hold search term
  const prepSearchTerm = useSelector((state: RootState) => state.search.prepSearchTerm);

  // Sync the local searchTerm with the Redux search term
  useEffect(() => {
    setSearchTerm(prepSearchTerm);
    console.log(list);
  }, [prepSearchTerm, list]);

  // Filter items based on searchTerm
  const filteredList = list.filter((item) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    return (
      item.name.toLowerCase().includes(lowercasedTerm) ||
      item.description.toLowerCase().includes(lowercasedTerm)
    );
  });

  return (
    <div>
      {filteredList.length > 0 ? (
        filteredList.map((item) => (
          <PrepItemCard
            key={item.prep_list_id}
            item={item}
            onButtonClick={() => handleCardClick(item)} // Pass the item directly
          />
        ))
      ) : (
        <p>No items to display.</p>
      )}
    </div>
  );
};

export default PrepListing;