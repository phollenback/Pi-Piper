import PrepListItem from "@/app/types/models/PrepListItem";
import { RootState } from "@/redux/lib/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DailyPrepItem from "./DailyPrepItem";

interface DailyPrepProps {
    list: PrepListItem[];
    handleCardClick: (item: PrepListItem) => void;
}

const DailyPrepList: React.FC<DailyPrepProps> = ({list, handleCardClick}: DailyPrepProps) => {
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
        <div className="p-3 max-h-[650px] overflow-y-auto"> {/* Tailwind classes for max height and scroll */}
          {filteredList.length > 0 ? (
            filteredList.map((item, index) => (
              <DailyPrepItem
                key={index} // Always use a unique key
                prepItem={item}
                onButtonClick={() => handleCardClick(item)} // Pass the item as a parameter to handleCardClick
              />
            ))
          ) : (
            <p>No items to display.</p>
          )}
        </div>
    );
}

export default DailyPrepList;