"use client"
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { TableCellsIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
import SelectBox from '@/app/components/Elements/ui/SelectBox';
import Button from '@/app/components/Elements/Button';
import { PrepItem } from '@/app/types/models/PrepItem';
import Ingredient from '@/app/types/models/Ingredient';
import { createGroup } from '../../actions/groupActions';
import {Category} from '@/app/types/models/Category';
import { toast } from 'react-hot-toast';
import { fetchCategories, getPrepItems } from '@/app/actions/prepItemActions';
import { getIngredients } from '@/app/actions/ingredientActions';
import { RootState } from "@/redux/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { setPrepSearchTerm } from "@/redux/features/search/searchSlice";




type ItemType = 'ingredients' | 'prep_items';
type ViewMode = 'table' | 'badge';

export default function GrouperPage() {
  const [selectedType, setSelectedType] = useState<ItemType>('ingredients');
  const [viewMode, setViewMode] = useState<ViewMode>('table');
  const [groupName, setGroupName] = useState('');
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const RESTAURANT_ID = 1;

  const dispatch = useDispatch();
  const { prepSearchTerm } = useSelector((state: RootState) => state.search);

  const { data: categories = [] } = useQuery<Category[]>({
    queryKey: ['categories', RESTAURANT_ID],
    queryFn: () => fetchCategories(RESTAURANT_ID),
    enabled: !!RESTAURANT_ID,
    staleTime: 1000 * 60 * 5
  });

  const { data: ingredientItems = [] } = useQuery({
    queryKey: ['ingredients', RESTAURANT_ID],
    queryFn: () => getIngredients(RESTAURANT_ID),
    enabled: selectedType === 'ingredients',
  });

  const { data: prepItems = [] } = useQuery({
    queryKey: ['prepItems', RESTAURANT_ID],
    queryFn: () => getPrepItems(RESTAURANT_ID),
    enabled: selectedType === 'prep_items',
  });

  const currentItems = selectedType === 'ingredients' ? ingredientItems : prepItems;

  const filteredItems = (selectedCategory
    ? currentItems.filter(item => 
        selectedType === 'ingredients' 
          ? (item as Ingredient).ingredientCategory === selectedCategory
          : (item as PrepItem).category === selectedCategory
      )
    : currentItems).filter(item => {
      const name = selectedType === 'ingredients' 
        ? (item as Ingredient).ingredientName 
        : (item as PrepItem).name;
      return name.toLowerCase().includes(prepSearchTerm.toLowerCase());
    });

  const categoryOptions = categories.map((category: Category) => ({
    label: category.categoryName,
    value: category.categoryId,
  }));

  const handleReset = () => {
    setSelectedCategory(null);
    dispatch(setPrepSearchTerm(""));
  };

  const getItemName = (item: Ingredient | PrepItem): string => {
    if (selectedType === 'ingredients') {
      return (item as Ingredient).ingredientName;
    }
    return (item as PrepItem).name;
  };

  const getItemId = (item: Ingredient | PrepItem): number => {
    if (selectedType === 'ingredients') {
      return (item as Ingredient).ingredientId;
    }
    return (item as PrepItem).prep_item_id;
  };

  const handleItemSelect = (item: Ingredient | PrepItem) => {
    const itemId = getItemId(item);
    const newSelected = new Set(selectedItems);
    if (selectedItems.has(itemId)) {
      newSelected.delete(itemId);
    } else {
      newSelected.add(itemId);
    }
    setSelectedItems(newSelected);
  };

  const handleCreateGroup = async () => {
    if (!groupName || selectedItems.size === 0) return;

    try {
      const mappedItems = Array.from(selectedItems).map(itemId => ({
        prep_item_id: selectedType === 'prep_items' ? itemId : null,
        ingredient_id: selectedType === 'ingredients' ? itemId : null
      }));

      await createGroup(
        groupName,
        RESTAURANT_ID,
        mappedItems,
      );

      toast.success('Group created successfully!', {
        duration: 3000,
        position: 'top-right',
      });

      // Reset form
      setGroupName('');
      setSelectedItems(new Set());
    } catch (error) {
      console.error('Error creating group:', error);
      
      toast.error('Failed to create group. Please try again.', {
        duration: 4000,
        position: 'top-right',
      });
    }
  };

  useEffect(() => {
    if (selectedType === 'ingredients' && ingredientItems.length > 0) {
      console.log('Ingredients List:', ingredientItems);
    }
  }, [selectedType, ingredientItems]);

  return (
    <div className="container mx-auto px-4 h-screen max-h-screen py-2">
      <div className="flex items-center gap-4 mb-2">
        <h1 className="text-4xl font-bold">Create a New</h1>
        <SelectBox
          value={selectedType}
          onChange={(value) => setSelectedType(value as ItemType)}
          options={[
            { value: 'ingredients', label: 'Ingredients' },
            { value: 'prep_items', label: 'Prep Items' },
          ]}
        />
        <h1 className="text-4xl font-bold">Group</h1>
      </div>
      
      <div className="flex flex-col gap-2 h-[calc(100vh-80px)]">
        <div className="flex gap-4 flex-1 min-h-0 max-h-[calc(100vh-90px)]">
          {/* Left Side - Available Items */}
          <div className="w-1/2 border border-zinc-200 bg-white rounded-lg p-3 shadow-sm flex flex-col">
            <div className="mb-2 pb-2 border-b border-zinc-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                  All {selectedType === 'ingredients' ? 'Ingredients' : 'Prep Items'}
                </h2>
                <div className="flex gap-2 items-center">
                  <SelectBox
                    value={selectedCategory || ''}
                    onChange={(value) => setSelectedCategory(value ? Number(value) : null)}
                    options={categoryOptions}
                    placeholder="Select category"
                  />
                  <Button
                    label="×"
                    onClick={handleReset}
                    style={{
                      backgroundColor: '#ef4444',
                      color: 'white',
                      padding: '4px 8px',
                      minWidth: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px',
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-auto">
              {filteredItems.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 mb-3 rounded-lg flex justify-between items-center cursor-pointer border ${
                    selectedItems.has(getItemId(item)) 
                      ? 'bg-blue-50 border-blue-200' 
                      : 'bg-white border-zinc-200 hover:bg-zinc-50'
                  }`}
                  onClick={() => handleItemSelect(item)}
                >
                  <span className="text-lg">
                    {selectedType === 'ingredients' 
                      ? (item as Ingredient).ingredientName 
                      : (item as PrepItem).name}
                  </span>
                  <Button
                    label={selectedItems.has(getItemId(item)) ? "Remove" : "Add"}
                    onClick={() => handleItemSelect(item)}
                    style={{
                      backgroundColor: selectedItems.has(getItemId(item)) ? '#ef4444' : '#4CAF50',
                      padding: '8px 16px',
                      fontSize: '1rem',
                      fontWeight: 500,
                      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                      border: '1px solid rgba(0,0,0,0.1)'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Selected Items */}
          <div className="w-1/2 border border-zinc-200 bg-white rounded-lg p-3 shadow-sm flex flex-col">
            {/* Selected Items Header */}
            <div className="flex justify-between items-center mb-2 pb-2 border-b border-zinc-200">
              <h2 className="text-xl font-semibold">Selected Items ({selectedItems.size})</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('table')}
                  className={`p-2 rounded ${viewMode === 'table' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
                  title="Table View"
                >
                  <TableCellsIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('badge')}
                  className={`p-2 rounded ${viewMode === 'badge' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
                  title="Badge View"
                >
                  <Squares2X2Icon className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Selected Items List - Made shorter */}
            <div className="flex-1 overflow-auto max-h-[calc(100vh-280px)]">
              {viewMode === 'table' ? (
                <div className="divide-y">
                  {Array.from(selectedItems).map((itemId) => {
                    const item = currentItems.find((i) => getItemId(i) === itemId);
                    if (!item) return null;
                    
                    return (
                      <div
                        key={itemId}
                        className="py-2 flex justify-between items-center border-gray-200"
                      >
                        <span className="text-lg">{getItemName(item)}</span>
                        <Button
                          label="Remove"
                          onClick={() => handleItemSelect(item)}
                          style={{
                            backgroundColor: '#ef4444',
                            padding: '6px 12px',
                            fontSize: '0.875rem',
                            fontWeight: 500,
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {Array.from(selectedItems).map((itemId) => {
                    const item = currentItems.find((i) => getItemId(i) === itemId);
                    if (!item) return null;
                    
                    return (
                      <div
                        key={itemId}
                        className="bg-blue-100 border border-blue-300 rounded-full px-4 py-2 flex items-center gap-2 text-lg"
                      >
                        <span>{getItemName(item)}</span>
                        <button
                          onClick={() => handleItemSelect(item)}
                          className="text-red-500 hover:text-red-700 text-xl font-bold"
                        >
                          ×
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Group Name Input - Made more prominent */}
            <div className="mt-4 border border-zinc-200 rounded-lg p-4 bg-gray-50">
              <h2 className="text-xl font-semibold mb-3">Group Name</h2>
              <div className="flex gap-4 items-end">
                <div className="flex-1">
                  <input
                    type="text"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    placeholder="Enter group name"
                    className="w-full p-2 border border-zinc-200 rounded bg-white text-lg"
                  />
                </div>
                <Button
                  label="Create"
                  onClick={handleCreateGroup}
                  style={{
                    backgroundColor: !groupName || selectedItems.size === 0 ? '#ccc' : '#4CAF50',
                    cursor: !groupName || selectedItems.size === 0 ? 'not-allowed' : 'pointer',
                    padding: '8px 16px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 