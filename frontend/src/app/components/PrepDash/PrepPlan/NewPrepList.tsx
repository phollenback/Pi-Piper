import PrepListItem from "@/app/types/models/PrepListItem";
import { RootState } from "@/redux/lib/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NewPrepItem from "../../Elements/NewPrepItem";

interface NewPrepProps {
  list: PrepListItem[];
  handleCardClick: (item: PrepListItem) => void;
}

const NewPrepList: React.FC<NewPrepProps> = ({ list, handleCardClick }: NewPrepProps) => {
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
      item.name?.toLowerCase().includes(lowercasedTerm) ||
      item.description?.toLowerCase().includes(lowercasedTerm)
    );
  });

  return (
    <>
      {filteredList.length > 0 ? (
        filteredList.map((item, index) => (
          <NewPrepItem
            key={index}
            prepItem={item}
            onButtonClick={() => handleCardClick(item)} // Pass the item as a parameter to handleCardClick
          />
        ))
      ) : (
        <p>No items to display.</p>
      )}
    </>
  );
};

export default NewPrepList;