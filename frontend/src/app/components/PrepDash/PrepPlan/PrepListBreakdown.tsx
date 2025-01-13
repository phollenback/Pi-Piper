import React from "react";

interface DailyPrepItem {
  prep_list_id: number;
  name: string;
  description: string;
  quantity: number;
  unit: string;
  category: number;
  status: string;
}

interface PrepListBreakdownProps {
  list: DailyPrepItem[];
  onClick: () => void;
  categories: { id: number; name: string; description: string }[];
}

export default function PrepListBreakdown({ list, onClick, categories }: PrepListBreakdownProps) {
  // Group items by category
  const groupedItems = list.reduce((acc: { [key: number]: DailyPrepItem[] }, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  // Map category IDs to their names and descriptions
  const getCategoryDetails = (categoryId: number) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? { name: category.name, description: category.description } : { name: "Unknown", description: "" };
  };

  return (
    <div className="bg-white p-4 shadow rounded-md">
      <h2 className="text-xl font-bold mb-4">Prep List Breakdown</h2>
      
      <div className="flex items-center mb-4">
        <input
          title="verify"
          type="checkbox"
          onChange={onClick}
          className="mr-2"
        />
        <label htmlFor="verify-checkbox" className="text-sm font-medium">Verify?</label>
      </div>
      
      {Object.entries(groupedItems).map(([categoryId, items]) => {
        const { name, description } = getCategoryDetails(Number(categoryId));
        return (
          <div key={categoryId} className="mb-6">
            <h3 className="text-lg font-semibold mb-2">{name}</h3>
            <p className="text-sm text-gray-500 mb-2">{description}</p>
            <ul className="list-disc pl-5 space-y-2">
              {items.map((item) => (
                <li key={item.prep_list_id}>
                  <div className="flex justify-between items-center">
                    <div>
                      <strong>{item.name}</strong> - {item.description}
                    </div>
                    <div>
                      {item.quantity} {item.unit}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}