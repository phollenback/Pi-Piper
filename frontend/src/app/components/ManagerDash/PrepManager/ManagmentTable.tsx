'use client'
import React, { useEffect, useState } from 'react';
import PrepItem from '@/app/types/models/PrepItem';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/lib/store';
import Category from '@/app/types/models/Category';
import { useQuery } from '@tanstack/react-query';
import { fetchCategories, fetchDepartments } from '@/app/util/actions';
import Department from '@/app/types/models/Department';
import Ingredient from '@/app/types/models/Ingredient';
import PrepItemRow from './Table/PrepItemRow';
import IngredientRow from './Table/IngredientRow';

interface ManagementTableProps {
  activeList: PrepItem[] | Ingredient[];
  category: number | null;
  activeSection: number;
}

const getDepartments = () => {
  const dep = fetchDepartments(1);
  return dep;
}

const ManagementTable: React.FC<ManagementTableProps> = ({ activeList, category, activeSection }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [, setSection] = useState<number>(0);
  const [list, setList] = useState<PrepItem[] | Ingredient[]>([]);
  const managerSearchTerm = useSelector((state: RootState) => state.search.managerSearchTerm);

  const { data: categories = []} = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const { data: departments = []} = useQuery<Department[]>({
    queryKey: ["departments"],
    queryFn: getDepartments,
  });

  

  useEffect(() => {
    setSearchTerm(managerSearchTerm);
    setSelectedCategory(category as number);
    setSection(activeSection)
    setList(activeList);
  }, [managerSearchTerm, category, activeList]);

  const filteredList = (list: PrepItem[] | Ingredient[] = []) =>
    list.filter((item) => {
      if (category === 0) return item;
      const lowercasedTerm = searchTerm.toLowerCase();
  
      let matchesSearchTerm;
      let matchesCategory;
  
      if ("prep_item_name" in item) {
        matchesSearchTerm =
          item.prep_item_name.toLowerCase().includes(lowercasedTerm) ||
          item.description.toLowerCase().includes(lowercasedTerm) ||
          item.kitchen_department_id.toString().includes(lowercasedTerm) ||
          item.category.toString().includes(lowercasedTerm);
  
        matchesCategory = category === null || item.category === selectedCategory;
      } else if ("ingredient_name" in item) {
        matchesSearchTerm = item.ingredient_name.toLowerCase().includes(lowercasedTerm);
        matchesCategory = category === null || item.ingredient_category === selectedCategory;
      }
      return matchesSearchTerm && matchesCategory;
    });

  const renderList = () => {
  
    // Type guard to check if the object is a PrepItem
    const isPrepItem = (item: PrepItem | Ingredient): item is PrepItem =>
      (item as PrepItem).prep_item_name !== undefined;
  
    return (
      <tbody>
        {filteredList(list).map((item) => {
          if (isPrepItem(item)) {
            return (
              <PrepItemRow
                key={item.prep_item_id}
                item={item}
                categoryOptions={categoryOptions}
                departmentOptions={departmentOptions}
                handleSelection={handleSelection}
                handleEditClick={handleEditClick}
              />
            );
          } else {
            return <IngredientRow key={item.ingredient_id} item={item} />;
          }
        })}
      </tbody>
    );
  };
  
  const handleSelection = (id: number, value: number | string, field: 'category' | 'kitchen_department_id' | 'ingredient_category') => {
    const newValue = Number(value);
  
    setList((prevList) => {
      if (prevList.length === 0) return prevList;
  
      if ("prep_item_id" in prevList[0]) {
        // prevList is PrepItem[]
        return (prevList as PrepItem[]).map((item) => {
          if (item.prep_item_id === id) {
            return { ...item, [field]: newValue }; // Dynamically update the field
          }
          return item;
        });
      } else {
        // prevList is Ingredient[]
        return (prevList as Ingredient[]).map((item) => {
          if (item.ingredient_id === id) {
            return { ...item, [field]: newValue }; // Dynamically update the field
          }
          return item;
        });
      }
    });
  };
  const handleEditClick = (item: PrepItem) => {
    console.log(item);
  }
  // Extract category names and IDs to pass to the SelectBox options
    const categoryOptions = categories.map((category: Category) => ({
      label: category.category_name,
      value: category.category_id,
    }));
    const departmentOptions = departments.map((department: Department) => ({
      label: department.department_name,
      value: department.kitchen_department_id,
    }));

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className='bg-gray-200'>
          <tr>
            <th className="px-4 py-2 border-b border-gray-300">Name</th>
            <th className="px-4 py-2 border-b border-gray-300">Description</th>
            <th className="px-4 py-2 border-b border-gray-300">Category</th>
            <th className="px-4 py-2 border-b border-gray-300">Department</th>
            <th className="px-4 py-2 border-b border-gray-300"></th>
          </tr>
        </thead>
        {renderList()}
      </table>
    </div>
  );
};

export default ManagementTable;