import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PrepListItem } from "@/app/types/models/PrepListItem";
import DailyPrepList from "./DailyPrepList";
import { updateDailyPrepItem } from "@/app/actions/prepItemActions";

interface KanbanProps {
  prepItems: PrepListItem[];
  category: number | null | undefined;
}

// Kanban board component for managing prep items with todo and complete columns
const Kanban: React.FC<KanbanProps> = ({ prepItems, category }) => {
  const [todoItems, setTodoItems] = useState<PrepListItem[]>([]);
  const [completeItems, setCompleteItems] = useState<PrepListItem[]>([]);
  const [hasItems, setHasItems] = useState(false);
  const [allComplete, setAllComplete] = useState(false);
  const [previousAllComplete, setPreviousAllComplete] = useState(false);
  const queryClient = useQueryClient();

  // Filter and distribute items based on status and category
  useEffect(() => {
    const filteredItems = prepItems.filter(
      (item) =>
        category === null || category === undefined || item.category === category
    );

    // Set hasItems flag if there are any items
    setHasItems(filteredItems.length > 0);

    // Update todoItems to include all items with status 'todo' or 'in-progress'
    const todoList = filteredItems.filter(
      (item) => item.status === "todo" || item.status === "in-progress"
    );
    setTodoItems(todoList);

    // Update completeItems to include only items with status 'complete'
    const completeList = filteredItems.filter(
      (item) => item.status === "complete"
    );
    setCompleteItems(completeList);

    // Check if all items are complete and there were items to begin with
    const newAllComplete = filteredItems.length > 0 && todoList.length === 0;
    setAllComplete(newAllComplete);

    // If all items just became complete, record the completion time
    if (newAllComplete && !previousAllComplete && filteredItems.length > 0) {
      console.log("All items completed! Filtered items:", filteredItems.length, "Todo items:", todoList.length);
      // Get the restaurant ID from the first item
      const restaurantId = filteredItems[0].restaurant_id;
      recordPrepListCompletion(restaurantId);
    }

    setPreviousAllComplete(newAllComplete);
  }, [prepItems, category, previousAllComplete]);

  // Mutation for recording prep list completion time
  const recordCompletionMutation = useMutation({
    mutationFn: async (restaurantId: number) => {
      console.log("Recording prep list completion for restaurant:", restaurantId);
      const currentDate = new Date();
      const dateId = parseInt(currentDate.toISOString().split('T')[0].replace(/-/g, ''));
      
      console.log("Using dateId:", dateId, "and completion time:", currentDate.toISOString());
      
      const response = await fetch(`http://localhost:3001/metrics/record-prep-completion/${restaurantId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          completionTime: currentDate.toISOString(),
          dateId: dateId
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to record prep list completion time");
      }

      return response.json();
    },
    onSuccess: (data) => {
      console.log("Prep list completion time recorded successfully:", data);
    },
    onError: (error) => {
      console.error("Error recording prep list completion time:", error);
    }
  });

  // Function to record prep list completion time
  const recordPrepListCompletion = (restaurantId: number) => {
    console.log("All prep items completed! Recording completion time for restaurant:", restaurantId);
    recordCompletionMutation.mutate(restaurantId);
  };

  // Mutation for toggling item status
  const updateStatusMutation = useMutation({
    mutationFn: async (prepItem: PrepListItem) => {
      const updatedItem: PrepListItem = {
        ...prepItem,
        status: prepItem.status === "complete" ? "todo" : "complete",
      };
  
      console.log("Updating:", updatedItem);
      
      return updateDailyPrepItem(updatedItem);
    },
    onSuccess: (data) => {
      console.log("Mutation success:", data);
      // Invalidate the correct query key to trigger a refetch
      queryClient.invalidateQueries({ queryKey: ["prepList"] });
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    }
  });

  const handleCardClick = (prepItem: PrepListItem) => {
    updateStatusMutation.mutate(prepItem);
  };

  return (
    <div className="flex flex-col">
      {/* Show completion message when all items are complete */}
      {hasItems && allComplete && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
          <p className="font-bold">Prep List Complete!</p>
          <p>All items for today are completed.</p>
        </div>
      )}
      
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
    </div>
  );
};

export default Kanban;