import IngredientDetails from "@/app/types/models/IngredientDetails";
import IngredientCard from "./IngredientCard";

interface MarketListProps {
    list: IngredientDetails[];
}

const MarketList: React.FC<MarketListProps> = ({list} : MarketListProps) => {
    return(
        <div className="p-4">
            {/* Title */}
            <h2 className="font-bold text-xl mb-2 text-center">All Ingredients</h2>

            {/* List of all ingredients */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-4">
                    {list.map((ingredient, index) => (
                        <IngredientCard 
                            key={index}
                            item={ingredient}
                        />
                    ))}
            </div>
        </div>
    );
}

export default MarketList;