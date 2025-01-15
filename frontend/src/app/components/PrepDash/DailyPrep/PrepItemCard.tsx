import React from 'react';
import Button from '../../Elements/Button';
import PrepListItem from '@/app/types/models/PrepListItem';

// interface DailyPrepItem {
//     prep_list_id: number;
//     name: string;
//     description: string;
//     quantity: number;
//     unit: string;
//     category: number;
//     status: string;
// }


interface ItemCardProps {
    item: PrepListItem;
    handleCardClick: (item: PrepListItem) => void;
}

const PrepItemCard: React.FC<ItemCardProps> = ({ item, handleCardClick }) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'complete':
                return 'bg-green-100 border-green-400 text-green-800'; // Green for complete
            case 'in-progress':
                return 'bg-yellow-100 border-yellow-400 text-yellow-800'; // Yellow for in-progress
            case 'todo':
                return 'bg-red-100 border-red-400 text-red-800'; // Red for to-do
            default:
                return 'bg-gray-100 border-gray-400 text-gray-800'; // Default color
        }
    };

    const statusColor = getStatusColor(item.status);

    const onButtonClick = () => {
        handleCardClick(item);  // Trigger the status toggle
    }

    return (
        <div className={`max-w-full w-full lg:max-w-full flex border-l-4 p-4 mb-4 py-4 rounded shadow ${statusColor}`}>
            {/* Name */}
            <div className="flex-2 px-2 my-1 border-r">
                <p className="font-semibold text-lg text-left">{item.name}</p>
                <p className="text-xs font-bold uppercase text-left">Status: {item.status}</p>
            </div>

            {/* Quantity */}
            <div className="flex-1 px-4 my-2 border-r">
                <p className="text-sm font-medium font-bold text-left">
                    Quantity: {item.quantity} {item.unit}
                </p>
            </div>

            {/* Description */}
            <div className="flex-2 px-4">
                <p className="text-sm text-gray-700 text-left">{item.description}</p>
            </div>

            {/* Button */}
            <div className="flex-2 my-6 px-4">
                <Button
                    label={item.status === 'complete' ? 'Cancel' : 'Complete'}
                    onClick={onButtonClick}
                    size="medium"
                    style={{
                        backgroundColor: item.status === 'complete' ? 'rgb(221, 79, 79)' : 'rgb(74, 173, 78)', 
                        border: 'none',
                        cursor: 'pointer',
                        borderRadius: '5px',
                        padding: '10px 20px',
                    }}
                />
            </div>
        </div>
    );
};

export default PrepItemCard;