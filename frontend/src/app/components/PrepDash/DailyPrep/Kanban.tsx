import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import PrepListItem from "../../../types/models/PrepListItem";
import DailyPrepList from "./DailyPrepList";

interface KanbanProps {
  prepItems: PrepListItem[];
  category: number | null | undefined;
}

const Kanban: React.FC<KanbanProps> = ({ prepItems, category }) => {
  const [todoItems, setTodoItems] = useState<PrepListItem[]>([]);
  const [completeItems, setCompleteItems] = useState<PrepListItem[]>([]);
  const queryClient = useQueryClient();

  useEffect(() => {
    const filteredItems = prepItems.filter(
      (item) =>
        category === null || category === undefined || item.category === category || item.category === 6
    );

    setTodoItems(filteredItems.filter((item) => item.status === "todo" || item.status === "in-progress"));
    setCompleteItems(filteredItems.filter((item) => item.status === "complete"));
  }, [prepItems, category]);

  const updateStatusMutation = useMutation({
    mutationFn: async (prepItem: PrepListItem) => {
      const updatedItem: PrepListItem = {
        ...prepItem,
        status: prepItem.status === "complete" ? "todo" : "complete",
      };
  
      console.log("Updating:", updatedItem); // Debugging
  
      const response = await fetch(`http://localhost:3000/prepitems/daily/1`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedItem), // Remove the wrapping {}
      });
  
      if (!response.ok) {
        throw new Error("Failed to update item status");
      }
  
      return response.json();
    },
    onSuccess: (data) => {
      console.log("Mutation success:", data);
      queryClient.invalidateQueries({ queryKey: ["prepItems"] }); // Ensure fresh data
    },
  });

  const handleCardClick = (prepItem: PrepListItem) => {
    updateStatusMutation.mutate(prepItem);
  };

  return (
    <div className="flex">
      {/* Todo Items */}
      <div className="flex-1 text-gray-700 bg-gray-200 px-4 py-2 m-2 border-2 border-black">
        <h3 className="font-bold text-lg mb-2">To-Do</h3>
        <DailyPrepList list={todoItems} handleCardClick={handleCardClick} />
      </div>

      {/* Completed Items */}
      <div className="flex-1 text-gray-700 bg-gray-200 px-4 py-2 m-2 border-2 border-black">
        <h3 className="font-bold text-lg mb-2">Completed</h3>
        <DailyPrepList list={completeItems} handleCardClick={handleCardClick} />
      </div>
    </div>
  );
};

export default Kanban;
