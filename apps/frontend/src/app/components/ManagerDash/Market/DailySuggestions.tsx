import IngredientDetails from '@/app/types/models/IngredientDetails';
import React from 'react';
import IngredientCard from './IngredientCard';

interface DailySuggestionsProps {
    list: IngredientDetails[];
}

// Responsive grid display of suggested ingredients with adaptive column layout
const DailySuggestions: React.FC<DailySuggestionsProps> = ({ list }: DailySuggestionsProps) => {
    return (
        <div className="p-4 text-center">
            <div className="font-bold text-xl mb-2">Todays Suggestions</div>
            
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