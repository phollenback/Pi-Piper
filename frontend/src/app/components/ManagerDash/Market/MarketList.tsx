import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import IngredientDetails from "@/app/types/models/IngredientDetails";
import IngredientCard from "./IngredientCard";
import SelectBox from '@/app/components/Elements/ui/SelectBox';
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

    return(
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-xl">All Ingredients</h2>
                <div className="w-64">
                    <SelectBox
                        value={selectedGroup}
                        onChange={(value) => setSelectedGroup(value)}
                        options={groupOptions}
                        placeholder="Filter by group"
                        title="Select group filter"
                    />
                </div>
            </div>

            {/* List of all ingredients */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-4">
                {filteredList.map((ingredient, index) => (
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