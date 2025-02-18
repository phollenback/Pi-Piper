"use client";

import Department from './Department';
import DepartmentProg from '../../../types/models/DepartmentProg';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

// Fetches daily department progress data from the specified API endpoint.
const fetchDepProgress = async () => {
  const response = await axios.get<DepartmentProg[]>('http://localhost:3000/departments/daily/1');
  return response.data;
};

// DepartmentProgress component: displays progress for each department. Uses react-query for data fetching.
const DepartmentProgress: React.FC = () => {
  const { data: departments = [] } = useQuery<DepartmentProg[]>({
    queryKey: ['dep-prog'],
    queryFn: fetchDepProgress,
  });

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