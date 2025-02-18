import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import PrepListItem from "../../../types/models/PrepListItem";
import DailyPrepList from "./DailyPrepList";

interface KanbanProps {
  prepItems: PrepListItem[];
  category: number | null | undefined;
}

// Kanban board component for managing prep items with todo and complete columns
const Kanban: React.FC<KanbanProps> = ({ prepItems, category }) => {
  const [todoItems, setTodoItems] = useState<PrepListItem[]>([]);
  const [completeItems, setCompleteItems] = useState<PrepListItem[]>([]);
  const queryClient = useQueryClient();

  // Filter and distribute items based on status and category
  useEffect(() => {
    const filteredItems = prepItems.filter(
      (item) =>
        category === null || category === undefined || item.category === category || item.category === 6
    );

    setTodoItems(filteredItems.filter((item) => item.status === "todo" || item.status === "in-progress"));
    setCompleteItems(filteredItems.filter((item) => item.status === "complete"));
  }, [prepItems, category]);

  // Mutation for toggling item status between complete and todo
  const updateStatusMutation = useMutation({
    mutationFn: async (prepItem: PrepListItem) => {
      const updatedItem: PrepListItem = {
        ...prepItem,
        status: prepItem.status === "complete" ? "todo" : "complete",
      };
  
      console.log("Updating:", updatedItem);
  
      const response = await fetch(`http://localhost:3000/prepitems/daily/1`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedItem),
      });
  
      if (!response.ok) {
        throw new Error("Failed to update item status");
      }
  
      return response.json();
    },
    onSuccess: (data) => {
      console.log("Mutation success:", data);
      queryClient.invalidateQueries({ queryKey: ["prepItems"] });
    },
  });

  const handleCardClick = (prepItem: PrepListItem) => {
    updateStatusMutation.mutate(prepItem);
  };

  return (
    <div className="flex">
      <div className="flex-1 text-gray-700 bg-gray-200 px-4 py-2 m-2 border-2 border-black">
        <h3 className="font-bold text-lg mb-2">To-Do</h3>
        <DailyPrepList list={todoItems} handleCardClick={handleCardClick} />
      </div>

      <div className="flex-1 text-gray-700 bg-gray-200 px-4 py-2 m-2 border-2 border-black">
        <h3 className="font-bold text-lg mb-2">Completed</h3>
        <DailyPrepList list={completeItems} handleCardClick={handleCardClick} />
      </div>
    </div>
  );
};

export default Kanban;