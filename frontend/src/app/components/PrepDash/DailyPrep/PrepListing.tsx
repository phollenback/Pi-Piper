import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/lib/store";
import PrepItemCard from "./PrepItemCard";
import PrepListItem from "../../../types/models/PrepListItem";

interface PrepListingProps {
  list: PrepListItem[];
  handleCardClick: (item: PrepListItem) => void;
}

// Filtered list of prep items that syncs with global search state
const PrepListing: React.FC<PrepListingProps> = ({ list, handleCardClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const prepSearchTerm = useSelector((state: RootState) => state.search.prepSearchTerm);

  // Sync local search state with Redux store
  useEffect(() => {
    setSearchTerm(prepSearchTerm);
    console.log(list);
  }, [prepSearchTerm, list]);

  // Filter items by name and description
  const filteredList = list.filter((item) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    return (
      item.name?.toLowerCase().includes(lowercasedTerm) ||
      item.description?.toLowerCase().includes(lowercasedTerm)
    );
  });

  return (
    <div>
      {filteredList.length > 0 ? (
        filteredList.map((item, index) => (
          <PrepItemCard
            key={index}
            item={item}
            onButtonClick={() => handleCardClick(item)}
          />
        ))
      ) : (
        <p>No items to display.</p>
      )}
    </div>
  );
};

export default PrepListing;