import IngredientDetails from '@/app/types/models/IngredientDetails';
import React from 'react';
import IngredientCard from './IngredientCard';

interface DailySuggestionsProps {
    list: IngredientDetails[];
}

const DailySuggestions: React.FC<DailySuggestionsProps> = ({ list }: DailySuggestionsProps) => {
    return (
        <div className="p-4 text-center">
            {/* Thin layer that says "Today's Suggestions" */}
            <div className="font-bold text-xl mb-2">Todays Suggestions</div>
            
            {/* Create a flex container to center the grid */}
            <div className="flex w-full justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-4">
                    {list.map((ingredient, index) => (
                        <IngredientCard 
                            key={index} 
                            item={ingredient}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DailySuggestions;