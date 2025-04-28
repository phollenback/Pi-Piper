import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { IngredientDetails } from "@/app/types/models/IngredientDetails";
import IngredientCard from "./IngredientCard";
import SelectBox from '@/components/Elements/ui/SelectBox';
import { getGroups } from './actions';

// MarketList component: displays a list of ingredient cards.
interface MarketListProps {
    list: IngredientDetails[]; // Array of ingredient details.
}

const MarketList: React.FC<MarketListProps> = ({list}) => {
    const [selectedGroup, setSelectedGroup] = useState<number | string>('');
    const RESTAURANT_ID = 1;

    const { data: groups = [] } = useQuery({
        queryKey: ['groups', RESTAURANT_ID],
        queryFn: () => getGroups(RESTAURANT_ID)
    });

    const groupOptions = [
        { label: 'All Items', value: '' },
        ...groups.map(group => ({
            label: group.group_name,
            value: group.group_id
        }))
    ];

    const filteredList = selectedGroup 
        ? list.filter(ingredient => {
            const group = groups.find(g => g.group_id === selectedGroup);
            return group?.items.some(item => 
                item.ingredient?.id === ingredient.ingredientId
            );
        })
        : list;

    if (filteredList.length === 0) {
        return (
            <div className="w-full p-4 text-center text-gray-500">
                No ingredients found
            </div>
        );
    }

    return (
        <div className="w-full p-4">
            <h2 className="text-xl font-bold mb-4">Available Ingredients</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredList.map((item) => (
                    <div key={item.ingredientId} className="border p-4 rounded-lg bg-white shadow-sm">
                        <h3 className="font-semibold">{item.ingredientName}</h3>
                        <div className="mt-2">
                            <p>Sysco Price: ${item.syscoPrice?.toFixed(2) || 'N/A'}</p>
                            <p>US Foods Price: ${item.usFoodsPrice?.toFixed(2) || 'N/A'}</p>
                            <p className="text-sm text-gray-500">
                                Last Updated: {item.lastUpdated ? new Date(item.lastUpdated).toLocaleDateString() : 'N/A'}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MarketList;