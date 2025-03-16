import { useState, useEffect } from 'react';

interface InventoryItem {
  id: number;
  name: string;
  currentStock: number;
  minStock: number;
  maxStock: number;
  unit: string;
  status: 'good' | 'low' | 'critical' | 'out';
  category: string;
}

interface ApiInventoryItem {
  ingredientId: number;
  ingredientName: string;
  quantity: string | null;
  quantityThreshold: string;
  maxStock: string;
  unit: string;
}

interface InventoryComparisonProps {
  restaurantIds: number[];
}

export default function InventoryComparison({ restaurantIds }: InventoryComparisonProps) {
  const [inventoryData, setInventoryData] = useState<Record<number, InventoryItem[]>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Fetch inventory data for each restaurant
  useEffect(() => {
    const fetchInventoryData = async () => {
      if (restaurantIds.length === 0) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const data: Record<number, InventoryItem[]> = {};
        
        for (const restaurantId of restaurantIds) {
          const response = await fetch(`http://localhost:3001/ingredients/inventory/${restaurantId}`);
          
          if (!response.ok) {
            throw new Error(`Failed to fetch inventory for restaurant ${restaurantId}`);
          }
          
          const inventoryItems = await response.json();
          
          // Transform data to match our InventoryItem interface
          const formattedData = inventoryItems.map((item: ApiInventoryItem) => {
            const currentStock = item.quantity ? parseFloat(item.quantity) : 0;
            const minStock = parseFloat(item.quantityThreshold);
            
            let status: 'good' | 'low' | 'critical' | 'out' = 'good';
            if (currentStock === 0) {
              status = 'out';
            } else if (currentStock <= minStock * 0.5) {
              status = 'critical';
            } else if (currentStock <= minStock) {
              status = 'low';
            }
            
            return {
              id: item.ingredientId,
              name: item.ingredientName,
              currentStock,
              minStock,
              maxStock: parseFloat(item.maxStock),
              unit: item.unit,
              status,
              category: 'Uncategorized', // Default category since it's not in the response
            };
          });
          
          data[restaurantId] = formattedData;
        }
        
        setInventoryData(data);
      } catch (error) {
        console.error('Error fetching inventory data:', error);
        setError(error instanceof Error ? error.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    
    fetchInventoryData();
  }, [restaurantIds]);
  
  // Get all unique ingredients across all restaurants
  const allIngredients = Object.values(inventoryData).reduce((acc, items) => {
    items.forEach(item => {
      if (!acc.some(i => i.name === item.name)) {
        acc.push(item);
      }
    });
    return acc;
  }, [] as InventoryItem[]);
  
  if (loading) {
    return <div>Loading inventory data...</div>;
  }
  
  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }
  
  if (restaurantIds.length === 0) {
    return <div>Please select at least one restaurant to compare.</div>;
  }
  
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-left">Ingredient</th>
            {restaurantIds.map(id => (
              <th key={id} className="border p-2 text-left">Restaurant {id}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allIngredients.map(ingredient => (
            <tr key={ingredient.name} className="hover:bg-gray-50">
              <td className="border p-2 font-medium">{ingredient.name}</td>
              {restaurantIds.map(restaurantId => {
                const restaurantInventory = inventoryData[restaurantId] || [];
                const item = restaurantInventory.find(i => i.name === ingredient.name);
                
                return (
                  <td key={restaurantId} className="border p-2">
                    {item ? (
                      <div>
                        <div className="flex items-center">
                          <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                            item.status === 'out' ? 'bg-red-500' :
                            item.status === 'critical' ? 'bg-orange-500' :
                            item.status === 'low' ? 'bg-yellow-500' :
                            'bg-green-500'
                          }`}></span>
                          <span>{item.currentStock} {item.unit}</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          Min: {item.minStock} {item.unit}
                        </div>
                      </div>
                    ) : (
                      <span className="text-gray-400">Not available</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 