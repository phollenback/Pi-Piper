'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Ingredient from '@/app/types/models/Ingredient';
import { PrepItem } from '@/app/types/models/PrepItem';
import { GroupWithItems } from '@/app/types/models/Group';
import ButtonGroup from '../../Elements/ButtonGroup';
import Category from '@/app/types/models/Category';
import { getIngredients, getPrepItems } from './actions';

interface GrouperContainerProps {
  initialGroups?: GroupWithItems[];
}

export default function GrouperContainer({ initialGroups = [] }: GrouperContainerProps) {
  const [activeTab, setActiveTab] = useState<'ingredients' | 'prep_items'>('ingredients');
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());
  const RESTAURANT_ID = 1;

  const { data: ingredientItems = [] } = useQuery({
    queryKey: ['ingredients', RESTAURANT_ID],
    queryFn: () => getIngredients(RESTAURANT_ID),
    enabled: activeTab === 'ingredients',
  });

  const { data: prepItems = [] } = useQuery({
    queryKey: ['prepItems', RESTAURANT_ID],
    queryFn: () => getPrepItems(RESTAURANT_ID),
    enabled: activeTab === 'prep_items',
  });

  const currentItems = activeTab === 'ingredients' ? ingredientItems : prepItems;

  const tabCategories: Category[] = [
    { category_id: 1, category_name: 'Ingredients', category_type: 'tab', description: 'Ingredient list' },
    { category_id: 2, category_name: 'Prep Items', category_type: 'tab', description: 'Prep item list' }
  ];

  const getItemName = (item: Ingredient | PrepItem): string => {
    if (activeTab === 'ingredients') {
      return (item as Ingredient).ingredient_name;
    }
    return (item as PrepItem).name;
  };

  return (
    <div className="p-4">
      <ButtonGroup
        items={tabCategories}
        buttonWidth="150px"
        buttonHeight="40px"
        onButtonClick={(item) => setActiveTab(item.category_name === 'Ingredients' ? 'ingredients' : 'prep_items')}
        selectedButton={activeTab === 'ingredients' ? 'Ingredients' : 'Prep Items'}
        getButtonColor={() => '#ffffff'}
      />

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="border rounded p-4">
          <h2 className="text-lg font-semibold mb-4">Available Items</h2>
          <ul className="space-y-2">
            {currentItems.map((item) => (
              <li
                key={activeTab === 'ingredients' ? 
                  (item as Ingredient).ingredient_id : 
                  (item as PrepItem).prep_item_id}
                className={`p-2 border rounded cursor-pointer ${
                  selectedItems.has(activeTab === 'ingredients' ? 
                    (item as Ingredient).ingredient_id : 
                    (item as PrepItem).prep_item_id) 
                    ? 'bg-blue-100' 
                    : ''
                }`}
                onClick={() => {
                  const itemId = activeTab === 'ingredients' ? 
                    (item as Ingredient).ingredient_id : 
                    (item as PrepItem).prep_item_id;
                  const newSelected = new Set(selectedItems);
                  if (selectedItems.has(itemId)) {
                    newSelected.delete(itemId);
                  } else {
                    newSelected.add(itemId);
                  }
                  setSelectedItems(newSelected);
                }}
              >
                {getItemName(item)}
              </li>
            ))}
          </ul>
        </div>

        <div className="border rounded p-4">
          <h2 className="text-lg font-semibold mb-4">Groups</h2>
          <ul className="space-y-2">
            {initialGroups.map((group) => (
              <li key={group.group_id} className="p-2 border rounded">
                <h3 className="font-medium">{group.group_name}</h3>
                <div className="mt-2">
                  {group.items.map((item) => (
                    <span
                      key={item.id}
                      className="inline-block bg-gray-100 rounded px-2 py-1 text-sm mr-2 mb-2"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 