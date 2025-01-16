'use client'
import React, { useEffect, useState } from 'react';
import PrepItem from '@/app/types/models/PrepItem';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/lib/store';
import Button from '../../Elements/Button';

interface ManagementTableProps {
  list: PrepItem[];
  category: number | null;
}

const ManagementTable: React.FC<ManagementTableProps> = ({ list, category }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const managerSearchTerm = useSelector((state: RootState) => state.search.managerSearchTerm);

  useEffect(() => {
    setSearchTerm(managerSearchTerm);
    setSelectedCategory(category as number);
  }, [managerSearchTerm, category]);

  const filteredList = list.filter((item) => {
    if(category === 0) return item;
    const lowercasedTerm = searchTerm.toLowerCase();
    const matchesSearchTerm =
      item.prep_item_name.toLowerCase().includes(lowercasedTerm) ||
      item.description.toLowerCase().includes(lowercasedTerm) ||
      item.kitchen_department_id.toString().includes(lowercasedTerm) ||
      item.category.toString().includes(lowercasedTerm);

    const matchesCategory = category === null || item.category === selectedCategory;

    return matchesSearchTerm && matchesCategory;
  });
  const handleEditClick = (item: PrepItem) => {
    console.log(item);
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">Description</th>
            <th className="px-4 py-2 border-b">Category</th>
            <th className="px-4 py-2 border-b">Department</th>
            <th className="px-4 py-2 border-b"></th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((item) => (
            <tr key={item.prep_item_id}>
              <td className="border px-4 py-2">{item.prep_item_name}</td>
              <td className="border px-4 py-2">{item.description}</td>
              <td className="border px-4 py-2 text-center">{item.category}</td>
              <td className="border px-4 py-2 text-center">{item.kitchen_department_id}</td>
              <td className="border">
                <div className="w-full h-full">
                  <Button 
                    label={"Edit"} 
                    onClick={() => handleEditClick(item)}
                    size='large'
                    style={{
                      backgroundColor: "blue",
                      color: "white",
                      width: "100%"
                    }}   
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagementTable;