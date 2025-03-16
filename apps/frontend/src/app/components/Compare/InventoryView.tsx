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
  restaurantId: number;
}

interface ApiInventoryItem {
  ingredientId: number;
  ingredientName: string;
  quantity: string | null;
  quantityThreshold: string;
  maxStock: string;
  unit: string;
}

interface InventoryViewProps {
  restaurantIds: number[];
}

export default function InventoryView({ restaurantIds }: InventoryViewProps) {
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // Fetch inventory data for the selected restaurants
  useEffect(() => {
    const fetchInventoryData = async () => {
      if (!restaurantIds.length) {
        setInventoryItems([]);
        return;
      }
      
      setLoading(true);
      setError(null);
      
      try {
        // Fetch data for all selected restaurants in parallel
        const promises = restaurantIds.map(async (restaurantId) => {
          const response = await fetch(`http://localhost:3001/ingredients/inventory/${restaurantId}`);
          
          if (!response.ok) {
            throw new Error(`Failed to fetch inventory for restaurant ${restaurantId}`);
          }
          
          const inventoryData = await response.json();
          
          // Transform data to match our InventoryItem interface
          return inventoryData.map((item: ApiInventoryItem) => {
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
              restaurantId, // Add the restaurant ID to each item
            };
          });
        });
        
        const results = await Promise.all(promises);
        // Flatten the array of arrays into a single array
        const allItems = results.flat();
        
        setInventoryItems(allItems);
      } catch (error) {
        console.error('Error fetching inventory data:', error);
        setError(error instanceof Error ? error.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    
    fetchInventoryData();
  }, [restaurantIds]);
  
  // Filter inventory items based on status and search term
  const filteredItems = inventoryItems.filter(item => {
    const matchesStatus = filterStatus === 'all' || item.status === filterStatus;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });
  
  // Group items by restaurant ID
  const itemsByRestaurant = filteredItems.reduce<Record<number, InventoryItem[]>>((acc, item) => {
    if (!acc[item.restaurantId]) {
      acc[item.restaurantId] = [];
    }
    acc[item.restaurantId].push(item);
    return acc;
  }, {});
  
  // Count items by status for each restaurant
  const statusCountsByRestaurant = Object.entries(itemsByRestaurant).reduce<
    Record<number, { out: number; critical: number; low: number; good: number }>
  >((acc, [restaurantId, items]) => {
    acc[Number(restaurantId)] = {
      out: items.filter(item => item.status === 'out').length,
      critical: items.filter(item => item.status === 'critical').length,
      low: items.filter(item => item.status === 'low').length,
      good: items.filter(item => item.status === 'good').length,
    };
    return acc;
  }, {});
  
  if (!restaurantIds.length) {
    return <div>Please select at least one restaurant to view inventory.</div>;
  }
  
  if (loading) {
    return <div>Loading inventory data...</div>;
  }
  
  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }
  
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Inventory Status</h2>
        
        {/* Global Search and Filter */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search ingredients across all restaurants..."
            className="w-full p-2 border rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Global Status Filter */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div 
            className={`p-4 rounded-lg shadow cursor-pointer ${
              filterStatus === 'out' ? 'bg-red-100 border-2 border-red-500' : 'bg-white'
            }`}
            onClick={() => setFilterStatus(filterStatus === 'out' ? 'all' : 'out')}
          >
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <h3 className="font-semibold">Out of Stock</h3>
            </div>
            <p className="text-2xl font-bold mt-2">
              {Object.values(statusCountsByRestaurant).reduce((sum, counts) => sum + counts.out, 0)}
            </p>
          </div>
          
          <div 
            className={`p-4 rounded-lg shadow cursor-pointer ${
              filterStatus === 'critical' ? 'bg-orange-100 border-2 border-orange-500' : 'bg-white'
            }`}
            onClick={() => setFilterStatus(filterStatus === 'critical' ? 'all' : 'critical')}
          >
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
              <h3 className="font-semibold">Critical</h3>
            </div>
            <p className="text-2xl font-bold mt-2">
              {Object.values(statusCountsByRestaurant).reduce((sum, counts) => sum + counts.critical, 0)}
            </p>
          </div>
          
          <div 
            className={`p-4 rounded-lg shadow cursor-pointer ${
              filterStatus === 'low' ? 'bg-yellow-100 border-2 border-yellow-500' : 'bg-white'
            }`}
            onClick={() => setFilterStatus(filterStatus === 'low' ? 'all' : 'low')}
          >
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <h3 className="font-semibold">Low Stock</h3>
            </div>
            <p className="text-2xl font-bold mt-2">
              {Object.values(statusCountsByRestaurant).reduce((sum, counts) => sum + counts.low, 0)}
            </p>
          </div>
          
          <div 
            className={`p-4 rounded-lg shadow cursor-pointer ${
              filterStatus === 'good' ? 'bg-green-100 border-2 border-green-500' : 'bg-white'
            }`}
            onClick={() => setFilterStatus(filterStatus === 'good' ? 'all' : 'good')}
          >
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <h3 className="font-semibold">In Stock</h3>
            </div>
            <p className="text-2xl font-bold mt-2">
              {Object.values(statusCountsByRestaurant).reduce((sum, counts) => sum + counts.good, 0)}
            </p>
          </div>
        </div>
      </div>
      
      {/* Inventory Tables - One per restaurant */}
      {Object.entries(itemsByRestaurant).map(([restaurantIdStr, items]) => {
        const restaurantId = Number(restaurantIdStr);
        const restaurant = restaurantIds.includes(restaurantId) ? 
          `Restaurant #${restaurantId}` : `Unknown Restaurant`;
        
        return (
          <div key={restaurantId} className="mb-8">
            <h3 className="text-lg font-bold mb-4">{restaurant}</h3>
            
            {/* Restaurant-specific status counts */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              <div className="bg-white p-2 rounded shadow text-center">
                <span className="text-sm">Out: </span>
                <span className="font-bold text-red-600">{statusCountsByRestaurant[restaurantId]?.out || 0}</span>
              </div>
              <div className="bg-white p-2 rounded shadow text-center">
                <span className="text-sm">Critical: </span>
                <span className="font-bold text-orange-600">{statusCountsByRestaurant[restaurantId]?.critical || 0}</span>
              </div>
              <div className="bg-white p-2 rounded shadow text-center">
                <span className="text-sm">Low: </span>
                <span className="font-bold text-yellow-600">{statusCountsByRestaurant[restaurantId]?.low || 0}</span>
              </div>
              <div className="bg-white p-2 rounded shadow text-center">
                <span className="text-sm">Good: </span>
                <span className="font-bold text-green-600">{statusCountsByRestaurant[restaurantId]?.good || 0}</span>
              </div>
            </div>
            
            {/* Inventory Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2 text-left">Ingredient</th>
                    <th className="border p-2 text-left">Category</th>
                    <th className="border p-2 text-left">Current Stock</th>
                    <th className="border p-2 text-left">Min Stock</th>
                    <th className="border p-2 text-left">Max Stock</th>
                    <th className="border p-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {items.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="border p-4 text-center">
                        No inventory items found matching your criteria.
                      </td>
                    </tr>
                  ) : (
                    items.map(item => (
                      <tr key={`${item.restaurantId}-${item.id}`} className="hover:bg-gray-50">
                        <td className="border p-2 font-medium">{item.name}</td>
                        <td className="border p-2">{item.category}</td>
                        <td className="border p-2">{item.currentStock} {item.unit}</td>
                        <td className="border p-2">{item.minStock} {item.unit}</td>
                        <td className="border p-2">{item.maxStock} {item.unit}</td>
                        <td className="border p-2">
                          <div className="flex items-center">
                            <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                              item.status === 'out' ? 'bg-red-500' :
                              item.status === 'critical' ? 'bg-orange-500' :
                              item.status === 'low' ? 'bg-yellow-500' :
                              'bg-green-500'
                            }`}></span>
                            <span>
                              {item.status === 'out' ? 'Out of Stock' :
                               item.status === 'critical' ? 'Critical' :
                               item.status === 'low' ? 'Low Stock' :
                               'In Stock'}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
} 