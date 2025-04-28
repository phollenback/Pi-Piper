"use client";

import Department from './Department';
import { useQuery } from '@tanstack/react-query';
import { fetchDepProgress } from '@/app/actions/departmentActions';


// DepartmentProgress component: displays progress for each department. Uses react-query for data fetching.
const DepartmentProgress: React.FC = () => {
  const restaurantId = 1; // Replace with actual restaurant ID from state/context
  const { data: departments = [], isLoading, error } = useQuery({
    queryKey: ['dep-prog', restaurantId],
    queryFn: () => fetchDepProgress(restaurantId),
  });

  if (isLoading) return <div className="text-gray-600">Loading department progress...</div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div className="h-screen flex flex-col mt-6 overflow-y-auto">
      {departments.map((item, idx) => (
        <Department
          key={idx}
          name={item.department_name}
          progress={item.progress}
          total_items={item.total_items}
          completed_items={item.completed_items}
        />
      ))}
    </div>
  );
};

export default DepartmentProgress;