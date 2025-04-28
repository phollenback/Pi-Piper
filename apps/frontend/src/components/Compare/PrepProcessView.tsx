import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchDepProgress } from '@/app/actions/departmentActions';
import { PrepListItem } from '@/app/types/models/PrepItem';

interface DepartmentProg {
  kitchen_department_id: number;
  department_name: string;
  restaurant_id: number;
  total_items: number;
  completed_items: number;
  progress: number;
}

interface PrepProcessViewProps {
  restaurantIds: number[];
}

export default function PrepProcessView({ restaurantIds }: PrepProcessViewProps) {
  const [prepItemsByRestaurant, setPrepItemsByRestaurant] = useState<Record<number, PrepListItem[]>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  
  // Fetch department progress data using react-query for all restaurants
  const { 
    data: departmentsByRestaurant = {}, 
    isLoading: isLoadingDepartments,
    error: departmentsError
  } = useQuery<Record<number, DepartmentProg[]>>({
    queryKey: ['dep-prog', restaurantIds],
    queryFn: async () => {
      const result: Record<number, DepartmentProg[]> = {};
      
      await Promise.all(
        restaurantIds.map(async (id) => {
          if (id) {
            try {
              const data = await fetchDepProgress(id);
              result[id] = data;
            } catch (error) {
              console.error(`Error fetching department progress for restaurant ${id}:`, error);
              result[id] = [];
            }
          }
        })
      );
      
      return result;
    },
    enabled: restaurantIds.length > 0,
  });
  
  // Fetch prep data for all selected restaurants
  useEffect(() => {
    const fetchPrepData = async () => {
      if (!restaurantIds.length) {
        setPrepItemsByRestaurant({});
        return;
      }
      
      setLoading(true);
      setError(null);
      
      try {
        const prepDataByRestaurant: Record<number, PrepListItem[]> = {};
        
        await Promise.all(
          restaurantIds.map(async (restaurantId) => {
            try {
              const response = await fetch(`http://localhost:3001/prepitems/daily/${restaurantId}`);
              
              if (!response.ok) {
                throw new Error(`Failed to fetch prep data for restaurant ${restaurantId}`);
              }
              
              const data = await response.json();
              prepDataByRestaurant[restaurantId] = data;
            } catch (error) {
              console.error(`Error fetching prep data for restaurant ${restaurantId}:`, error);
              prepDataByRestaurant[restaurantId] = [];
            }
          })
        );
        
        setPrepItemsByRestaurant(prepDataByRestaurant);
      } catch (error) {
        console.error('Error fetching prep data:', error);
        setError(error instanceof Error ? error.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    
    fetchPrepData();
  }, [restaurantIds]);
  
  // Calculate global status counts across all restaurants
  const globalStatusCounts = Object.values(prepItemsByRestaurant).reduce(
    (counts, items) => {
      counts.todo += items.filter(item => item.status === 'todo').length;
      counts['in-progress'] += items.filter(item => item.status === 'in-progress').length;
      counts.complete += items.filter(item => item.status === 'complete').length;
      counts.total += items.length;
      return counts;
    },
    { todo: 0, 'in-progress': 0, complete: 0, total: 0 }
  );
  
  // Calculate global completion percentage
  const globalCompletionPercentage = globalStatusCounts.total > 0
    ? Math.round((globalStatusCounts.complete / globalStatusCounts.total) * 100)
    : 0;
  
  // Calculate global department progress
  const globalTotalItems = Object.values(departmentsByRestaurant).reduce(
    (sum, departments) => sum + departments.reduce((deptSum, dept) => deptSum + dept.total_items, 0), 
    0
  );
  
  const globalCompletedItems = Object.values(departmentsByRestaurant).reduce(
    (sum, departments) => sum + departments.reduce((deptSum, dept) => deptSum + dept.completed_items, 0), 
    0
  );
  
  const globalTotalProgress = globalTotalItems > 0 
    ? Math.round((globalCompletedItems / globalTotalItems) * 100) 
    : 0;

  // Estimate completion time for a restaurant
  const estimateCompletionTime = (restaurantId: number) => {
    const departments = departmentsByRestaurant[restaurantId] || [];
    const totalItems = departments.reduce((sum, dept) => sum + dept.total_items, 0);
    const completedItems = departments.reduce((sum, dept) => sum + dept.completed_items, 0);
    const progress = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
    
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    
    // Target time is 11:00 AM
    const targetHour = 11;
    const targetMinute = 0;
    
    // Calculate remaining time until 11:00 AM
    let hoursUntilTarget = targetHour - currentHour;
    let minutesUntilTarget = targetMinute - currentMinute;
    
    if (minutesUntilTarget < 0) {
      hoursUntilTarget -= 1;
      minutesUntilTarget += 60;
    }
    
    if (hoursUntilTarget < 0) {
      // Target time has already passed for today
      return "Target time (11:00 AM) has already passed";
    }
    
    // Calculate estimated completion based on current progress and time remaining
    if (progress === 0) {
      return "No progress made yet. Unlikely to complete by 11:00 AM";
    }
    
    // Estimate time needed to complete remaining work
    const remainingPercentage = 100 - progress;
    const timePerPercentage = (currentHour * 60 + currentMinute) / progress; // minutes per percentage point
    const estimatedMinutesNeeded = remainingPercentage * timePerPercentage;
    
    const estimatedCompletionHours = Math.floor(currentHour + (estimatedMinutesNeeded / 60));
    const estimatedCompletionMinutes = Math.floor(currentMinute + (estimatedMinutesNeeded % 60));
    
    const formattedHour = estimatedCompletionHours % 12 || 12;
    const amPm = estimatedCompletionHours < 12 ? 'AM' : 'PM';
    const formattedMinute = estimatedCompletionMinutes.toString().padStart(2, '0');
    
    const estimatedTime = `${formattedHour}:${formattedMinute} ${amPm}`;
    
    if (estimatedCompletionHours > targetHour || 
        (estimatedCompletionHours === targetHour && estimatedCompletionMinutes > targetMinute)) {
      return `Estimated completion time: ${estimatedTime} (after target time)`;
    } else {
      return `Estimated completion time: ${estimatedTime} (before target time)`;
    }
  };
  
  if (!restaurantIds.length) {
    return <div>Please select at least one restaurant to view prep processes.</div>;
  }
  
  if (loading || isLoadingDepartments) {
    return <div>Loading prep process data...</div>;
  }
  
  if (error || departmentsError) {
    return <div className="text-red-500">Error: {error || (departmentsError as Error).message}</div>;
  }
  
  return (
    <div>
      {/* Global Summary Section */}
      {restaurantIds.length > 1 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Global Prep Process Status</h2>
          
          {/* Global Completion Progress */}
          <div className="mb-6 p-4 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Overall Daily Prep Completion</h3>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">Progress</span>
              <span className="text-sm font-medium">{globalCompletionPercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${globalCompletionPercentage}%` }}
              ></div>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              {globalStatusCounts.total} total prep items across all restaurants
            </div>
          </div>
          
          {/* Global Status Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div 
              className={`p-4 rounded-lg shadow cursor-pointer ${
                filterStatus === 'todo' ? 'bg-gray-100 border-2 border-gray-500' : 'bg-white'
              }`}
              onClick={() => setFilterStatus(filterStatus === 'todo' ? 'all' : 'todo')}
            >
              <h3 className="font-semibold">To Do</h3>
              <p className="text-2xl font-bold mt-2">{globalStatusCounts.todo}</p>
            </div>
            
            <div 
              className={`p-4 rounded-lg shadow cursor-pointer ${
                filterStatus === 'in-progress' ? 'bg-blue-100 border-2 border-blue-500' : 'bg-white'
              }`}
              onClick={() => setFilterStatus(filterStatus === 'in-progress' ? 'all' : 'in-progress')}
            >
              <h3 className="font-semibold">In Progress</h3>
              <p className="text-2xl font-bold mt-2">{globalStatusCounts['in-progress']}</p>
            </div>
            
            <div 
              className={`p-4 rounded-lg shadow cursor-pointer ${
                filterStatus === 'complete' ? 'bg-green-100 border-2 border-green-500' : 'bg-white'
              }`}
              onClick={() => setFilterStatus(filterStatus === 'complete' ? 'all' : 'complete')}
            >
              <h3 className="font-semibold">Complete</h3>
              <p className="text-2xl font-bold mt-2">{globalStatusCounts.complete}</p>
            </div>
          </div>
          
          {/* Global Department Progress */}
          <div className="bg-white p-6 mb-6 rounded-lg shadow">
            <h3 className="font-semibold mb-4">Overall Kitchen Prep Progress</h3>
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">Total Progress</span>
                <span className="text-sm font-medium">{globalTotalProgress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div 
                  className={`h-2.5 rounded-full ${
                    globalTotalProgress >= 75 ? 'bg-green-600' : 
                    globalTotalProgress <= 50 ? 'bg-red-600' : 'bg-yellow-600'
                  }`}
                  style={{ width: `${globalTotalProgress}%` }}
                ></div>
              </div>
              <div className="text-sm mb-2">
                Completed: <span className="font-semibold">{globalCompletedItems}/{globalTotalItems} items</span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Individual Restaurant Sections */}
      {restaurantIds.map(restaurantId => {
        const prepItems = prepItemsByRestaurant[restaurantId] || [];
        const departments = departmentsByRestaurant[restaurantId] || [];
        
        // Filter prep items based on status
        const filteredItems = prepItems.filter(item => {
          return filterStatus === 'all' || item.status === filterStatus;
        });
        
        // Count items by status for this restaurant
        const statusCounts = {
          todo: prepItems.filter(item => item.status === 'todo').length,
          'in-progress': prepItems.filter(item => item.status === 'in-progress').length,
          complete: prepItems.filter(item => item.status === 'complete').length,
        };
        
        // Calculate completion percentage for this restaurant
        const completionPercentage = prepItems.length > 0
          ? Math.round((statusCounts.complete / prepItems.length) * 100)
          : 0;
        
        // Calculate total department progress for this restaurant
        const totalItems = departments.reduce((sum, dept) => sum + dept.total_items, 0);
        const completedItems = departments.reduce((sum, dept) => sum + dept.completed_items, 0);
        const totalProgress = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
        
        // Get completion estimate for this restaurant
        const completionEstimate = estimateCompletionTime(restaurantId);
        
        return (
          <div key={restaurantId} className="mb-12 border-t-2 pt-6">
            <h2 className="text-xl font-bold mb-4">Restaurant #{restaurantId} Prep Process</h2>
            
            <div className="mb-6">
              {/* Completion Progress */}
              <div className="mb-6 p-4 bg-white rounded-lg shadow">
                <h3 className="font-semibold mb-2">Daily Prep Completion</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">Progress</span>
                  <span className="text-sm font-medium">{completionPercentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${completionPercentage}%` }}
                  ></div>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  {prepItems.length} total prep items
                </div>
              </div>
              
              {/* Status Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-lg shadow bg-white">
                  <h3 className="font-semibold">To Do</h3>
                  <p className="text-2xl font-bold mt-2">{statusCounts.todo}</p>
                </div>
                
                <div className="p-4 rounded-lg shadow bg-white">
                  <h3 className="font-semibold">In Progress</h3>
                  <p className="text-2xl font-bold mt-2">{statusCounts['in-progress']}</p>
                </div>
                
                <div className="p-4 rounded-lg shadow bg-white">
                  <h3 className="font-semibold">Complete</h3>
                  <p className="text-2xl font-bold mt-2">{statusCounts.complete}</p>
                </div>
              </div>
            </div>
            
            {/* Department Progress Section */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4">Department Progress</h3>
              
              {/* Overall Progress Summary */}
              <div className="bg-white p-6 mb-6 rounded-lg shadow">
                <h3 className="font-semibold mb-4">Kitchen Prep Progress</h3>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">Total Progress</span>
                    <span className="text-sm font-medium">{totalProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div 
                      className={`h-2.5 rounded-full ${
                        totalProgress >= 75 ? 'bg-green-600' : 
                        totalProgress <= 50 ? 'bg-red-600' : 'bg-yellow-600'
                      }`}
                      style={{ width: `${totalProgress}%` }}
                    ></div>
                  </div>
                  <div className="text-sm mb-2">
                    Completed: <span className="font-semibold">{completedItems}/{totalItems} items</span>
                  </div>
                  <div className="mt-4 p-3 bg-gray-100 rounded-md">
                    <p className={`text-sm ${completionEstimate.includes('after') ? 'text-red-600' : 'text-green-600'} font-medium`}>
                      {completionEstimate}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Department Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {departments.map((dept) => (
                  <div key={dept.kitchen_department_id} className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-lg mb-2">{dept.department_name}</h3>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">Progress</span>
                      <span className="text-sm font-medium">{dept.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                      <div 
                        className={`h-2.5 rounded-full ${
                          dept.progress >= 75 ? 'bg-green-600' : 
                          dept.progress <= 50 ? 'bg-red-600' : 'bg-yellow-600'
                        }`}
                        style={{ width: `${dept.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-sm">
                      Completed: <span className="font-semibold">{dept.completed_items}/{dept.total_items} items</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Prep Items Table */}
            <div className="overflow-x-auto">
              <h3 className="text-lg font-bold mb-4">Prep Items for today</h3>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2 text-left">Prep Item</th>
                    <th className="border p-2 text-left">Description</th>
                    <th className="border p-2 text-left">Quantity</th>
                    <th className="border p-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredItems.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="border p-4 text-center">
                        No prep items found matching your criteria.
                      </td>
                    </tr>
                  ) : (
                    filteredItems.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border p-2 font-medium">{item.name}</td>
                        <td className="border p-2">{item.description}</td>
                        <td className="border p-2">{item.quantity} {item.unit}</td>
                        <td className="border p-2">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                            item.status === 'todo' ? 'bg-gray-200 text-gray-800' :
                            item.status === 'in-progress' ? 'bg-blue-200 text-blue-800' :
                            'bg-green-200 text-green-800'
                          }`}>
                            {item.status === 'todo' ? 'To Do' :
                             item.status === 'in-progress' ? 'In Progress' :
                             'Complete'}
                          </span>
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