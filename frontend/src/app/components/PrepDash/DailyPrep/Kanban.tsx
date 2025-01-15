"use client"
import { useEffect, useState } from 'react';
import PrepListing from './PrepListing';
import PrepListItem from '../../../types/models/PrepListItem';

interface KanbanProps {
    prepItems: PrepListItem[];
    category: number | null | undefined;
}

const Kanban: React.FC<KanbanProps> = ({ prepItems, category }) => {
    const [todoItems, setTodoItems] = useState<PrepListItem[]>([]);
    const [completeItems, setCompleteItems] = useState<PrepListItem[]>([]);

    const splitItems = (items: PrepListItem[], category: number | null | undefined) => {
        const todos: PrepListItem[] = [];
        const completed: PrepListItem[] = [];

        items.forEach(item => {
            if (category === null || category === undefined || item.category === category || item.category == 6) {
                if (item.status === 'complete') {
                    completed.push(item);
                } else if (item.status === 'in-progress' || item.status === 'todo') {
                    todos.push(item);
                }
            }
        });
        console.log("todos", todos);
        console.log("completes", completed);

        setTodoItems(todos);
        setCompleteItems(completed);
    };

    const handleCardClick = (prepItem: PrepListItem) => {
        const updatedItem: PrepListItem = { ...prepItem, status: prepItem.status === 'complete' ? 'todo' : 'complete' };
        
        // Update the item status in the prepItems array
        const updatedItems = prepItems.map(item =>
            item.prep_list_id === updatedItem.prep_list_id ? updatedItem : item
        );

        // Re-filter the items
        splitItems(updatedItems, category);
    }

    useEffect(() => {
        console.log('prepItems:', prepItems); // Log the prepItems being passed in

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