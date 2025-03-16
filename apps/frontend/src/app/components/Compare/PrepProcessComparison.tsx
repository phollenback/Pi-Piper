import { useState, useEffect } from 'react';

interface PrepItem {
  id: number;
  name: string;
  description: string;
  quantity: number;
  unit: string;
  status: string;
  category: number;
  kitchenDepartmentId: number;
  restaurantId: number;
}

interface PrepProcessComparisonProps {
  restaurantIds: number[];
}

export default function PrepProcessComparison({ restaurantIds }: PrepProcessComparisonProps) {
  const [prepData, setPrepData] = useState<Record<number, PrepItem[]>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Fetch prep data for each restaurant
  useEffect(() => {
    const fetchPrepData = async () => {
      if (restaurantIds.length === 0) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const data: Record<number, PrepItem[]> = {};
        
        for (const restaurantId of restaurantIds) {
          const response = await fetch(`http://localhost:3001/prep/daily/${restaurantId}`);
          
          if (!response.ok) {
            throw new Error(`Failed to fetch prep data for restaurant ${restaurantId}`);
          }
          
          const prepItems = await response.json();
          data[restaurantId] = prepItems;
        }
        
        setPrepData(data);
      } catch (error) {
        console.error('Error fetching prep data:', error);
        setError(error instanceof Error ? error.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    
    fetchPrepData();
  }, [restaurantIds]);
  
  if (loading) {
    return <div>Loading prep process data...</div>;
  }
  
  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }
  
  if (restaurantIds.length === 0) {
    return <div>Please select at least one restaurant to compare.</div>;
  }
  
  // Calculate completion rates for each restaurant
  const completionRates = Object.entries(prepData).reduce((acc, [restaurantId, items]) => {
    if (!items || items.length === 0) {
      acc[Number(restaurantId)] = 0;
      return acc;
    }
    
    const completedItems = items.filter(item => item.status === 'complete').length;
    const totalItems = items.length;
    acc[Number(restaurantId)] = Math.round((completedItems / totalItems) * 100);
    
    return acc;
  }, {} as Record<number, number>);
  
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Prep Process Comparison</h2>
      
      {/* Completion Rate Comparison */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Daily Prep Completion Rate</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {restaurantIds.map(id => (
            <div key={id} className="bg-white p-4 rounded shadow">
              <h4 className="font-medium">Restaurant {id}</h4>
              <div className="mt-2 relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                      Completion
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      {completionRates[id] || 0}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                  <div 
                    style={{ width: `${completionRates[id] || 0}%` }} 
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  ></div>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                {prepData[id]?.length || 0} total prep items
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Prep Items Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Prep Item</th>
              {restaurantIds.map(id => (
                <th key={id} className="border p-2 text-left">Restaurant {id}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* This would be populated with actual prep items */}
            <tr>
              <td className="border p-2 font-medium">Sample Prep Item</td>
              {restaurantIds.map(id => (
                <td key={id} className="border p-2">
                  <span className="text-gray-400">Data not available</span>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
} 