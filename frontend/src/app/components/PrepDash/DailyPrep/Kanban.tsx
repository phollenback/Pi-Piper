"use client"
import { useEffect, useState } from 'react';
import PrepListing from './PrepListing';

// interface DailyPrepItem {
//     id: number;
//     name: string;
//     description: string;
//     quantity: number;
//     unit: string;
//     status: string; // Status can be 'todo' or 'complete'
//     category: number;
//     kitchenDepartmentId: number;
//     restaurantId: number;
// }
interface DailyPrepItem {
    prep_list_id: number;
    name: string;
    description: string;
    quantity: number;
    unit: string;
    category: number;
    status: string;
}


interface KanbanProps {
    prepItems: DailyPrepItem[];
    category: number | null | undefined;
}

const Kanban: React.FC<KanbanProps> = ({ prepItems, category }) => {
    const [todoItems, setTodoItems] = useState<DailyPrepItem[]>(prepItems); 
    const [completeItems, setCompleteItems] = useState<DailyPrepItem[]>(prepItems.filter(item => item.status === 'complete'));

    const splitItems = (items: DailyPrepItem[], category: number | null | undefined) => {
        const todos: DailyPrepItem[] = [];
        const completed: DailyPrepItem[] = [];

        items.forEach(item => {
            if (category === null || category === undefined || item.category === category || item.category == 6) {
                if (item.status === 'complete') {
                    completed.push(item);
                } else if (item.status === 'in-progress' || item.status === 'todo') {
                    todos.push(item);
                }
            }
        });

        setTodoItems(todos);
        setCompleteItems(completed);
    };

    const handleCardClick = (prepItem: DailyPrepItem) => {
        const updatedItem = { ...prepItem, status: prepItem.status === 'complete' ? 'todo' : 'complete' };
        
        // Update the item status in the prepItems array
        const updatedItems = prepItems.map(item =>
            item.prep_list_id === updatedItem.prep_list_id ? updatedItem : item
        );

        // Re-filter the items
        splitItems(updatedItems, category);
    }

    useEffect(() => {
        splitItems(prepItems, category); 
    }, [prepItems, category]);

    return (
        <div className="flex">
            {/* Todo Items */}
            <div className="flex-1 text-gray-700 bg-gray-200 px-4 py-2 m-2">
                <h3 className="font-bold text-lg mb-2">To-Do</h3>
                <PrepListing list={todoItems} handleCardClick={handleCardClick}/>
            </div>

            {/* Completed Items */}
            <div className="flex-1 text-gray-700 bg-gray-200 px-4 py-2 m-2">
                <h3 className="font-bold text-lg mb-2">Completed</h3>
                <PrepListing list={completeItems} handleCardClick={handleCardClick}/>
            </div>
        </div>
    );
};

export default Kanban;