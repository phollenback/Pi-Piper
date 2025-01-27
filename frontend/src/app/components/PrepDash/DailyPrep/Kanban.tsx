"use client"
import { useEffect, useState } from 'react';
import PrepListItem from '../../../types/models/PrepListItem';
import DailyPrepList from './DailyPrepList';
import KanbanManager from '@/app/types/manager/KanbanManager';

interface KanbanProps {
    prepItems: PrepListItem[];
    category: number | null | undefined;
}

const Kanban: React.FC<KanbanProps> = ({ prepItems, category }) => {
    const [kanban, setKanban] = useState<KanbanManager | null>(null);
    const [todoItems, setTodoItems] = useState<PrepListItem[]>([]);
    const [completeItems, setCompleteItems] = useState<PrepListItem[]>([]);

    useEffect(() => {
        // Create a new KanbanManager instance
        const newKanban = new KanbanManager(prepItems, category);
        setKanban(newKanban);
        setTodoItems(newKanban.getTodoItems());
        setCompleteItems(newKanban.getCompleteItems());
    }, [prepItems, category]);

    const handleCardClick = (prepItem: PrepListItem) => {
        if (kanban) {
            kanban.toggleItemStatus(prepItem);
            setTodoItems(kanban.getTodoItems());
            setCompleteItems(kanban.getCompleteItems());
        }
    };

    return (
        <div className="flex">
            {/* Todo Items */}
            <div className="flex-1 text-gray-700 bg-gray-200 px-4 py-2 m-2 border-2 border-black">
                <h3 className="font-bold text-lg mb-2">To-Do</h3>
                <DailyPrepList list={todoItems} handleCardClick={handleCardClick}/>
            </div>

            {/* Completed Items */}
            <div className="flex-1 text-gray-700 bg-gray-200 px-4 py-2 m-2 border-2 border-black">
                <h3 className="font-bold text-lg mb-2">Completed</h3>
                <DailyPrepList list={completeItems} handleCardClick={handleCardClick}/>
            </div>
        </div>
    );
};

export default Kanban;