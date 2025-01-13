"use client";

import AllPrepList from "../../components/PrepDash/PrepPlan/AllPrepList";
import SelectBox from "@/app/components/Elements/ui/SelectBox";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setPrepSearchTerm } from "@/redux/features/search/searchSlice";
import PrepListing from "@/app/components/PrepDash/DailyPrep/PrepListing";
import { fetchPrepItemCards } from "@/app/util/data";

interface Category {
  id: number;
  name: string;
  description: string;
}

interface DailyPrepItem {
  prep_list_id: number;
  name: string;
  description: string;
  quantity: number;
  unit: string;
  category: number;
  status: string;
}

// Helper function to get tomorrow's date
const getTomorrowDate = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function PlanPage() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [prepItems, setPrepItems] = useState<DailyPrepItem[]>([]);
  const [dailyPrepItems, setDailyPrepItems] = useState<DailyPrepItem[]>([]);
  const dispatch = useDispatch();

  // Fetch categories
  const { data: categories = [], isLoading, isError, refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/categories/categories");
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      return response.json();
    },
  });

  useEffect(() => {
    // Fetch all prep items
    setPrepItems(fetchPrepItemCards());
  }, []);

  // Add item to daily prep items
  const handleAddToDailyPrep = (item: DailyPrepItem) => {
    setDailyPrepItems((prev) => [...prev, item]);
  };

  // Prepare category options for SelectBox
  const categoryOptions = categories.map((category: Category) => ({
    label: category.name,
    value: category.id,
  }));

  // Handle reset action
  const handleReset = () => {
    dispatch(setPrepSearchTerm(""));
    refetch();
    setSelectedCategory(null);
  };

  // Handle loading and error states
  if (isLoading) {
    return <p>Loading plan...</p>;
  }

  if (isError) {
    return <p>Error loading plan...</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {/* Left column (1/3 of the space) */}
      <div className="col-span-1 bg-gray-100 p-4">
        <div className="flex items-center space-x-4 mb-4">
          {/* SelectBox */}
          <SelectBox
            value={selectedCategory || ""}
            onChange={(value) => setSelectedCategory(value ? Number(value) : null)}
            options={categoryOptions}
            placeholder="Select a category"
          />
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600"
          >
            Reset
          </button>
        </div>

        {/* Pass filtered prep items to AllPrepList */}
        <AllPrepList
          prepList={prepItems}
          category={selectedCategory}
          onAddToDailyPrep={handleAddToDailyPrep}
        />
      </div>

      {/* Right column (2/3 of the space) */}
      <div className="col-span-2 bg-gray-200 p-4">
        <h2 className="text-lg font-bold mb-4">
          Daily Prep Items for Tomorrow ({getTomorrowDate()})
        </h2>
        <PrepListing list={dailyPrepItems} handleCardClick={() => {}} />
      </div>
    </div>
  );
}