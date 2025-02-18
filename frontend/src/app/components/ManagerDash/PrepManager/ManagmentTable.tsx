'use client';
import React, { useEffect, useState } from 'react';
import { PrepItem } from '@/app/types/models/PrepItem';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/lib/store';
import Category, { categoryAdapter } from '@/app/types/models/Category';
import Department, { departmentAdapter } from '@/app/types/models/Department';
import { useQuery } from '@tanstack/react-query';
import { fetchCategories, fetchDepartments } from '@/app/util/actions';
import Ingredient from '@/app/types/models/Ingredient';
import IngredientTable from './Table/Ingredient/IngredientTable';
import PrepItemTable from './Table/PrepItem/PrepItemTable';

interface ManagementTableProps {
  activeList: PrepItem[] | Ingredient[];
  category: number | null;
  activeSection: string; // "prepitem" for prep items, "ingredients" for ingredients
}

// Fetch departments for the restaurant
const getDepartments = () => {
  return fetchDepartments(1);
}

// Dynamic table component that handles both prep items and ingredients
const ManagementTable: React.FC<ManagementTableProps> = ({ activeList, category, activeSection }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [list, setList] = useState<PrepItem[] | Ingredient[]>([]);
  const managerSearchTerm = useSelector((state: RootState) => state.search.managerSearchTerm);

  // Fetch and cache categories and departments
  const { data: categories = [] } = useQuery<Category[]>({
      queryKey: ["categories"],
      queryFn: fetchCategories,
  });

  const { data: departments = [] } = useQuery<Department[]>({
      queryKey: ["departments"],
      queryFn: getDepartments,
  });

  // Transform categories and departments for select box options using adapters
  const categoryOptions = categoryAdapter.toSelectBoxOptions(categories);
  const departmentOptions = departmentAdapter.toSelectBoxOptions(departments);

  // Sync component state with external changes
  useEffect(() => {
      // Update search term when managerSearchTerm changes
      setSearchTerm(managerSearchTerm);
  }, [managerSearchTerm]);

  useEffect(() => {
      // Update list when activeList or activeSection changes
      if (list !== activeList) {
        setList(activeList);
      }
  }, [activeList, activeSection]);

  // Filter list based on search term and category selection
  const filteredList = () => {
    const lowercasedTerm = searchTerm.toLowerCase();
    return list.filter((item) => {
        const matchesSearchTerm = "name" in item
            ? item.name.toLowerCase().includes(lowercasedTerm) ||
              (item.description ? item.description.toLowerCase().includes(lowercasedTerm) : false)
            : item.ingredient_name.toLowerCase().includes(lowercasedTerm);

        const matchesCategory = category === null || 
            ('name' in item ? item.category === category : item.ingredient_category === category);

        return matchesSearchTerm && matchesCategory;
    });
};

  // Updates category or department selection for items in the list
  const handleSelection = (id: number, value: number | string, field: 'category' | 'kitchen_department_id' | 'ingredient_category') => {
    const newValue = Number(value);

    setList((prevList) => {
        if (prevList.length === 0) return prevList;

        return prevList.map((item) => {
            if ("prep_item_id" in item && item.prep_item_id === id) {
                return { ...item, [field]: newValue };
            } else if ("ingredient_id" in item && item.ingredient_id === id) {
                return { ...item, [field]: newValue };
            }
            return item;
        }) as PrepItem[] | Ingredient[];
    });
};

  return (
      <div className="overflow-x-auto">
          {activeSection === "prepitem" ? (
              <PrepItemTable
                  list={filteredList() as PrepItem[]}
                  categoryOptions={categoryOptions}
                  departmentOptions={departmentOptions}
                  handleSelection={handleSelection}
                  handleEditClick={(item: PrepItem) => console.log(item)}
              />
          ) : (
              <IngredientTable
                  list={filteredList() as Ingredient[]}
                  categoryOptions={categoryOptions}
                  handleSelection={handleSelection}
                  handleEditClick={(item: Ingredient) => console.log(item)}
              />
          )}
      </div>
  );
};

export default ManagementTable;