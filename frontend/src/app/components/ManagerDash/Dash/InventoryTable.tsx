"use client";
import { useQuery } from '@tanstack/react-query';

type InventoryItem = {
  ingredientId: number;
  ingredientName: string;
  quantity: string | null;
  quantityThreshold: string;
  unit: string;
  maxStock: string;
  lastUpdated: string;
};

const fetchInventory = async (restaurantId: number): Promise<InventoryItem[]> => {
  const response = await fetch(`http://localhost:3001/ingredients/inventory/${restaurantId}`);
  if (!response.ok) throw new Error('Failed to fetch inventory');
  return response.json();
};

const InventoryTable = () => {
  const restaurantId = 1;
  const { data: inventory = [], isLoading, error } = useQuery({
    queryKey: ['inventory', restaurantId],
    queryFn: () => fetchInventory(restaurantId),
  });

  if (isLoading) return <div className="text-gray-600">Loading inventory...</div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div className="overflow-auto max-h-[calc(100vh-100px)] p-4 bg-gray-50 rounded-lg shadow-sm">
      <table className="w-full rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Ingredient</th>
            <th className="px-6 py-3 text-center text-sm font-medium uppercase tracking-wider">Quantity</th>
            <th className="px-6 py-3 text-center text-sm font-medium uppercase tracking-wider">Unit</th>
            <th className="px-6 py-3 text-center text-sm font-medium uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {inventory.map((item: InventoryItem, idx: number) => (
            <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition-colors`}>
              <td className="px-6 py-4 text-sm text-gray-800 font-medium">{item.ingredientName}</td>
              <td className="px-6 py-4 text-sm text-gray-700 text-center">{item.quantity}</td>
              <td className="px-6 py-4 text-sm text-gray-700 text-center">{item.unit}</td>
              <td className="px-6 py-4 text-center">
                <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                  item.quantity && Number(item.quantity) <= Number(item.quantityThreshold) 
                    ? 'bg-red-100 text-red-700' 
                    : 'bg-green-100 text-green-700'
                }`}>
                  {item.quantity && Number(item.quantity) <= Number(item.quantityThreshold) ? 'Low Stock' : 'In Stock'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;