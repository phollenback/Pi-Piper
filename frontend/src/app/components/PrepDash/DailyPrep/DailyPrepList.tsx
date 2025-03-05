import { PrepListItem } from "@/app/types/models/PrepListItem";
import { RootState } from "@/redux/lib/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DailyPrepItem from "./DailyPrepItem";

// DailyPrepList component: displays a list of daily prep items, filtering based on search term.
interface DailyPrepProps {
    list: PrepListItem[]; // Array of prep list items.
    handleCardClick: (item: PrepListItem) => void; // Callback function for item clicks.
}

const DailyPrepList: React.FC<DailyPrepProps> = ({list, handleCardClick}: DailyPrepProps) => {
    const [searchTerm, setSearchTerm] = useState(""); // Local search term state.
    const prepSearchTerm = useSelector((state: RootState) => state.search.prepSearchTerm); // Redux search term.

    // Syncs the local searchTerm with the Redux prepSearchTerm.
    useEffect(() => {
        setSearchTerm(prepSearchTerm);

        console.log("DailyPrepList", list);
    }, [prepSearchTerm]);
    
    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];

    // Filters the list of prep items based on the search term and today's date
    const filteredList = list.filter((item) => {
        const lowercasedTerm = searchTerm.toLowerCase();
        
        console.log('Today:', today);
        console.log('Item Date:', item.date);
        console.log('Item:', item);

        return (
            // Temporarily remove date filter for testing
            item.name?.toLowerCase().includes(lowercasedTerm) ||
            item.description?.toLowerCase().includes(lowercasedTerm)
        );
    });

    return (
        <div className="p-3 max-h-[580px] overflow-y-auto"> 
          {filteredList.length > 0 ? (
            filteredList.map((item, index) => (
              <DailyPrepItem
                key={index} 
                prepItem={item}
                onButtonClick={() => handleCardClick(item)} 
              />
            ))
          ) : (
            <p>No items to display.</p>
          )}
        </div>
    );
}

export default DailyPrepList;