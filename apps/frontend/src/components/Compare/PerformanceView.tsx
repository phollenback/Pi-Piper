import { useState, useEffect } from "react";
import axios from "axios";

interface RestaurantMetrics {
  metricId: number;
  restaurantId: number;
  date: string;
  inventoryTurnover: number | null;
  avgPrepTimeHours: number | null;
  overallIngredientPriceAvg: number | null;
  monthlyCleaningCompletionPct: number | null;
  weeklyCleaningCompletionPct: number | null;
  createdAt: string;
  updatedAt: string;
}

interface PerformanceMetric {
  id: number;
  name: string;
  value: number;
  target: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  restaurantId: number;
}

interface PerformanceViewProps {
  restaurantIds: number[];
}

const API_BASE_URL = 'http://localhost:3001';

export default function PerformanceView({ restaurantIds }: PerformanceViewProps) {
  const [metricsByRestaurant, setMetricsByRestaurant] = useState<Record<number, PerformanceMetric[]>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [calculatingMetrics, setCalculatingMetrics] = useState<Record<number, boolean>>({});
  
  // Fetch performance metrics for all selected restaurants
  useEffect(() => {
    const fetchPerformanceData = async () => {
      if (!restaurantIds.length) {
        setMetricsByRestaurant({});
        return;
      }
      
      setLoading(true);
      setError(null);
      
      try {
        const metricsMap: Record<number, PerformanceMetric[]> = {};
        
        // Process each restaurant in parallel
        await Promise.all(
          restaurantIds.map(async (restaurantId) => {
            try {
              // Fetch real metrics from the API
              const response = await axios.get<RestaurantMetrics>(`${API_BASE_URL}/metrics/${restaurantId}`);
              const metricsData = response.data;
              
              // Transform API data to our component format
              const formattedMetrics: PerformanceMetric[] = [];
              
              // Only add metrics that have values
              if (metricsData.inventoryTurnover !== null) {
                formattedMetrics.push({
                  id: 1,
                  name: 'Inventory Turnover',
                  value: metricsData.inventoryTurnover,
                  target: 15,
                  unit: 'turns/month',
                  trend: metricsData.inventoryTurnover >= 15 ? 'up' : 'down',
                  restaurantId
                });
              }
              
              if (metricsData.avgPrepTimeHours !== null) {
                formattedMetrics.push({
                  id: 2,
                  name: 'Average Prep Time',
                  value: metricsData.avgPrepTimeHours,
                  target: 4,
                  unit: 'hours',
                  trend: metricsData.avgPrepTimeHours <= 4 ? 'down' : 'up',
                  restaurantId
                });
              }
              
              if (metricsData.overallIngredientPriceAvg !== null) {
                formattedMetrics.push({
                  id: 3,
                  name: 'Ingredient Price Average',
                  value: metricsData.overallIngredientPriceAvg,
                  target: 5,
                  unit: '$',
                  trend: metricsData.overallIngredientPriceAvg <= 5 ? 'down' : 'up',
                  restaurantId
                });
              }
              
              if (metricsData.monthlyCleaningCompletionPct !== null) {
                formattedMetrics.push({
                  id: 4,
                  name: 'Monthly Cleaning Completion',
                  value: metricsData.monthlyCleaningCompletionPct,
                  target: 90,
                  unit: '%',
                  trend: metricsData.monthlyCleaningCompletionPct >= 90 ? 'up' : 'down',
                  restaurantId
                });
              }
              
              if (metricsData.weeklyCleaningCompletionPct !== null) {
                formattedMetrics.push({
                  id: 5,
                  name: 'Weekly Cleaning Completion',
                  value: metricsData.weeklyCleaningCompletionPct,
                  target: 95,
                  unit: '%',
                  trend: metricsData.weeklyCleaningCompletionPct >= 95 ? 'up' : 'down',
                  restaurantId
                });
              }
              
              metricsMap[restaurantId] = formattedMetrics;
            } catch (error: any) {
              console.error(`Error fetching performance data for restaurant ${restaurantId}:`, error);
              
              // Check if it's a 404 error (no metrics found)
              const isNotFound = error?.response?.status === 404;
              
              if (isNotFound) {
                console.log(`No metrics found for restaurant ${restaurantId}, using mock data`);
              } else {
                console.error(`Error fetching metrics for restaurant ${restaurantId}:`, error);
              }
              
              // Fallback to mock data if API fails or returns 404
              metricsMap[restaurantId] = [
                {
                  id: 1,
                  name: 'Inventory Turnover',
                  value: 12 + (restaurantId % 4),
                  target: 15,
                  unit: 'turns/month',
                  trend: 'up',
                  restaurantId
                },
                {
                  id: 2,
                  name: 'Average Prep Time',
                  value: 3.5 + (restaurantId % 2),
                  target: 4,
                  unit: 'hours',
                  trend: 'stable',
                  restaurantId
                },
                {
                  id: 3,
                  name: 'Ingredient Price Average',
                  value: 4.8 + (restaurantId % 3) * 0.2,
                  target: 5,
                  unit: '$',
                  trend: 'down',
                  restaurantId
                },
                {
                  id: 4,
                  name: 'Monthly Cleaning Completion',
                  value: 85 + (restaurantId % 3) * 5,
                  target: 90,
                  unit: '%',
                  trend: 'up',
                  restaurantId
                },
                {
                  id: 5,
                  name: 'Weekly Cleaning Completion',
                  value: 92 + (restaurantId % 2) * 3,
                  target: 95,
                  unit: '%',
                  trend: 'up',
                  restaurantId
                }
              ];
            }
          })
        );
        
        setMetricsByRestaurant(metricsMap);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching performance data:', error);
        setError(error instanceof Error ? error.message : 'Unknown error');
        setLoading(false);
      }
    };
    
    fetchPerformanceData();
  }, [restaurantIds]);
  
  // Function to trigger metrics calculation for a restaurant
  const triggerMetricsCalculation = async (restaurantId: number) => {
    try {
      setCalculatingMetrics(prev => ({ ...prev, [restaurantId]: true }));
      
      // Call the API to trigger metrics calculation
      await axios.post(`${API_BASE_URL}/metrics/calculate/${restaurantId}`);
      
      // Wait a moment for the calculation to complete
      setTimeout(async () => {
        try {
          // Fetch the updated metrics
          const response = await axios.get<RestaurantMetrics>(`${API_BASE_URL}/metrics/${restaurantId}`);
          const metricsData = response.data;
          
          // Transform API data to our component format (same as in fetchPerformanceData)
          const formattedMetrics: PerformanceMetric[] = [];
          
          if (metricsData.inventoryTurnover !== null) {
            formattedMetrics.push({
              id: 1,
              name: 'Inventory Turnover',
              value: metricsData.inventoryTurnover,
              target: 15,
              unit: 'turns/month',
              trend: metricsData.inventoryTurnover >= 15 ? 'up' : 'down',
              restaurantId
            });
          }
          
          if (metricsData.avgPrepTimeHours !== null) {
            formattedMetrics.push({
              id: 2,
              name: 'Average Prep Time',
              value: metricsData.avgPrepTimeHours,
              target: 4,
              unit: 'hours',
              trend: metricsData.avgPrepTimeHours <= 4 ? 'down' : 'up',
              restaurantId
            });
          }
          
          if (metricsData.overallIngredientPriceAvg !== null) {
            formattedMetrics.push({
              id: 3,
              name: 'Ingredient Price Average',
              value: metricsData.overallIngredientPriceAvg,
              target: 5,
              unit: '$',
              trend: metricsData.overallIngredientPriceAvg <= 5 ? 'down' : 'up',
              restaurantId
            });
          }
          
          if (metricsData.monthlyCleaningCompletionPct !== null) {
            formattedMetrics.push({
              id: 4,
              name: 'Monthly Cleaning Completion',
              value: metricsData.monthlyCleaningCompletionPct,
              target: 90,
              unit: '%',
              trend: metricsData.monthlyCleaningCompletionPct >= 90 ? 'up' : 'down',
              restaurantId
            });
          }
          
          if (metricsData.weeklyCleaningCompletionPct !== null) {
            formattedMetrics.push({
              id: 5,
              name: 'Weekly Cleaning Completion',
              value: metricsData.weeklyCleaningCompletionPct,
              target: 95,
              unit: '%',
              trend: metricsData.weeklyCleaningCompletionPct >= 95 ? 'up' : 'down',
              restaurantId
            });
          }
          
          // Update the state with the new metrics
          setMetricsByRestaurant(prev => ({
            ...prev,
            [restaurantId]: formattedMetrics
          }));
          
          setCalculatingMetrics(prev => ({ ...prev, [restaurantId]: false }));
        } catch (error) {
          console.error(`Error fetching updated metrics for restaurant ${restaurantId}:`, error);
          setCalculatingMetrics(prev => ({ ...prev, [restaurantId]: false }));
        }
      }, 2000); // Wait 2 seconds for calculation to complete
      
    } catch (error) {
      console.error(`Error triggering metrics calculation for restaurant ${restaurantId}:`, error);
      setCalculatingMetrics(prev => ({ ...prev, [restaurantId]: false }));
    }
  };
  
  // Calculate average metrics across all restaurants for comparison
  const calculateAverageMetrics = () => {
    if (Object.keys(metricsByRestaurant).length === 0) return [];
    
    const metricNames = new Set<string>();
    const metricSums: Record<string, { sum: number; count: number; target: number; unit: string }> = {};
    
    // Collect all metric names and sum values
    Object.values(metricsByRestaurant).forEach(metrics => {
      metrics.forEach(metric => {
        metricNames.add(metric.name);
        
        if (!metricSums[metric.name]) {
          metricSums[metric.name] = { 
            sum: 0, 
            count: 0, 
            target: metric.target,
            unit: metric.unit
          };
        }
        
        metricSums[metric.name].sum += metric.value;
        metricSums[metric.name].count += 1;
      });
    });
    
    // Calculate averages
    return Array.from(metricNames).map((name, index) => {
      const { sum, count, target, unit } = metricSums[name];
      const avgValue = sum / count;
      
      // Determine trend based on average vs target
      let trend: 'up' | 'down' | 'stable';
      if (Math.abs(avgValue - target) < 0.1 * target) {
        trend = 'stable';
      } else if (avgValue > target) {
        trend = 'up';
      } else {
        trend = 'down';
      }
      
      return {
        id: index,
        name,
        value: parseFloat(avgValue.toFixed(1)),
        target,
        unit,
        trend,
        restaurantId: 0 // Use 0 to indicate this is an average across restaurants
      };
    });
  };
  
  const averageMetrics = restaurantIds.length > 1 ? calculateAverageMetrics() : [];
  
  if (!restaurantIds.length) {
    return <div>Please select at least one restaurant to view performance metrics.</div>;
  }
  
  if (loading) {
    return <div>Loading performance data...</div>;
  }
  
  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }
  
  return (
    <div>
      {/* Average Metrics Section (only shown when comparing multiple restaurants) */}
      {restaurantIds.length > 1 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Average Performance Metrics</h2>
          <p className="text-sm text-gray-600 mb-4">
            Showing average values across all selected restaurants for comparison
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {averageMetrics.map(metric => (
              <div key={metric.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-lg">{metric.name}</h3>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    metric.trend === 'up' && metric.value > metric.target ? 'bg-red-100 text-red-800' :
                    metric.trend === 'up' && metric.value <= metric.target ? 'bg-green-100 text-green-800' :
                    metric.trend === 'down' && metric.value < metric.target ? 'bg-green-100 text-green-800' :
                    metric.trend === 'down' && metric.value >= metric.target ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {metric.trend === 'up' ? '↑' : metric.trend === 'down' ? '↓' : '→'} {metric.trend}
                  </span>
                </div>
                
                <div className="mt-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">{metric.value}</span>
                    <span className="ml-1 text-gray-500">{metric.unit}</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Target: {metric.target} {metric.unit}
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                    <div 
                      className={`h-2.5 rounded-full ${
                        metric.value >= metric.target ? 'bg-green-500' : 'bg-orange-500'
                      }`}
                      style={{ 
                        width: `${Math.min(100, (metric.value / metric.target) * 100)}%` 
                      }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>0</span>
                    <span>{metric.target * 2} {metric.unit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Individual Restaurant Sections */}
      {restaurantIds.map(restaurantId => {
        const metrics = metricsByRestaurant[restaurantId] || [];
        
        return (
          <div key={restaurantId} className="mb-12 border-t-2 pt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Restaurant #{restaurantId} Performance</h2>
              <button
                onClick={() => triggerMetricsCalculation(restaurantId)}
                disabled={calculatingMetrics[restaurantId]}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
              >
                {calculatingMetrics[restaurantId] ? 'Calculating...' : 'Recalculate Metrics'}
              </button>
            </div>
            
            {/* Performance Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {metrics.map(metric => (
                <div key={metric.id} className="bg-white rounded-lg shadow p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-lg">{metric.name}</h3>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      metric.trend === 'up' && metric.value > metric.target ? 'bg-red-100 text-red-800' :
                      metric.trend === 'up' && metric.value <= metric.target ? 'bg-green-100 text-green-800' :
                      metric.trend === 'down' && metric.value < metric.target ? 'bg-green-100 text-green-800' :
                      metric.trend === 'down' && metric.value >= metric.target ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {metric.trend === 'up' ? '↑' : metric.trend === 'down' ? '↓' : '→'} {metric.trend}
                    </span>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">{metric.value}</span>
                      <span className="ml-1 text-gray-500">{metric.unit}</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Target: {metric.target} {metric.unit}
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                      <div 
                        className={`h-2.5 rounded-full ${
                          metric.value >= metric.target ? 'bg-green-500' : 'bg-orange-500'
                        }`}
                        style={{ 
                          width: `${Math.min(100, (metric.value / metric.target) * 100)}%` 
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>0</span>
                      <span>{metric.target * 2} {metric.unit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
      
      {/* Note about mock data */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <p className="text-sm text-blue-800">
          Note: This is currently displaying mock data. Connect to your actual performance metrics API to see real data.
        </p>
      </div>
    </div>
  );
} 