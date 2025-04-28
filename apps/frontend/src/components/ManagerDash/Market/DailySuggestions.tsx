import { IngredientDetails } from "@/app/types/models/IngredientDetails";
import React from 'react';
import IngredientCard from './IngredientCard';

interface DailySuggestionsProps {
    list: IngredientDetails[];
}

// Responsive grid display of suggested ingredients with adaptive column layout
const DailySuggestions: React.FC<DailySuggestionsProps> = ({ list }: DailySuggestionsProps) => {
    if (list.length === 0) {
        return (
            <div className="w-full p-4 text-center text-gray-500">
                No critical items to display
            </div>
        );
    }

    return (
        <div className="w-full p-4">
            <h2 className="text-xl font-bold mb-4">Critical Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {list.map((item) => (
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

export default DailySuggestions;