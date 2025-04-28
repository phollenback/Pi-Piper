import PrepListItem from "@/app/types/models/PrepListItem";
import { RootState } from "@/redux/lib/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NewPrepItem from "../../Elements/NewPrepItem";

// NewPrepList component: displays a filtered list of new prep items.
interface NewPrepProps {
  list: PrepListItem[]; // Array of prep list items.
  handleCardClick: (item: PrepListItem) => void; // Callback for item clicks.
}

const NewPrepList: React.FC<NewPrepProps> = ({ list, handleCardClick }: NewPrepProps) => {
  const [searchTerm, setSearchTerm] = useState(""); // Local search term state.
  const prepSearchTerm = useSelector((state: RootState) => state.search.prepSearchTerm); // Redux search term.

  // Syncs local search state with Redux store.
  useEffect(() => {
    setSearchTerm(prepSearchTerm);
  }, [prepSearchTerm]);

  // Filters the list of prep items based on the search term.
  const filteredList = list.filter((item) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    return (
      item.name?.toLowerCase().includes(lowercasedTerm) ||
      item.description?.toLowerCase().includes(lowercasedTerm)
    );
  });

  return (
    <div className="p-3">
      {filteredList.length > 0 ? (
        filteredList.map((item) => ( 
          <NewPrepItem
            key={item.prep_list_id} 
            prepItem={item}
            onButtonClick={() => handleCardClick(item)}
          />
        ))
      ) : (
        <p>No items to display.</p>
      )}
    </div>
  );
};

export default NewPrepList;