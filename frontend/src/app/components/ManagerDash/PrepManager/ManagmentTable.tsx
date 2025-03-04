'use client';
import React, { useEffect, useState } from 'react';
import { PrepItem } from '@/app/types/models/PrepItem';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/lib/store';
import Category, { categoryAdapter } from '@/app/types/models/Category';
import Department, { departmentAdapter } from '@/app/types/models/Department';
import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '@/app/util/actions';
import { fetchDepartments } from '@/app/actions/departmentActions';
import Ingredient from '@/app/types/models/Ingredient';
import IngredientTable from './Table/Ingredient/IngredientTable';
import PrepItemTable from './Table/PrepItem/PrepItemTable';
import IngredientEditModal from './Table/Ingredient/IngredientEditModal';
import PrepItemEditModal from './Table/PrepItem/PrepItemEditModal';
import ConfirmationModal from '@/app/components/Elements/ui/ConfirmationModal';
import { deletePrepItem } from '@/app/actions/prepItemActions';
import { deleteIngredient } from '@/app/actions/ingredientActions';
import { getGroups, filterByGroup } from '@/app/actions/groupActions';

interface ManagementTableProps {
  activeList: PrepItem[] | Ingredient[];
  category: number | null;
  activeSection: string; // "prepitem" for prep items, "ingredients" for ingredients
  selectedGroup: number | null;
}

// Fetch departments for the restaurant
const getDepartments = () => {
  return fetchDepartments(1);
}

// Dynamic table component that handles both prep items and ingredients
const ManagementTable: React.FC<ManagementTableProps> = ({ activeList, category, activeSection, selectedGroup }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [list, setList] = useState<PrepItem[] | Ingredient[]>([]);
  const [selectedItem, setSelectedItem] = useState<PrepItem | Ingredient | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
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

  const { data: groups = [] } = useQuery({
    queryKey: ['groups', 1],
    queryFn: () => getGroups(1)
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

        const matchesGroup = selectedGroup === null || 
            filterByGroup(
                activeSection === 'prepitem' ? [item as PrepItem] : [item as Ingredient],
                selectedGroup,
                activeSection === 'prepitem' ? 'prep_items' : 'ingredients',
                groups
            ).length > 0;

        return matchesSearchTerm && matchesCategory && matchesGroup;
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

  const handleEditClick = (item: PrepItem | Ingredient) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleDeleteClick = (item: PrepItem | Ingredient) => {
    setSelectedItem(item);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedItem(null);
  };

  const handleConfirmDelete = async () => {
    try {
      if (selectedItem) {
        if ("prep_item_id" in selectedItem) {
          await deletePrepItem(selectedItem.prep_item_id, 1);
        } else if ("ingredient_id" in selectedItem) {
          await deleteIngredient(selectedItem.ingredient_id, selectedItem.restaurant_id);
        }
        setIsDeleteModalOpen(false);
        setSelectedItem(null);
        // Optionally, you can add a callback to refresh the list after deletion
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="overflow-x-auto">
      {activeSection === "prepitem" ? (
        <>
          <PrepItemTable
            list={filteredList() as PrepItem[]}
            categoryOptions={categoryOptions}
            departmentOptions={departmentOptions}
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteClick}
          />
          {selectedItem && "prep_item_id" in selectedItem && (
            <PrepItemEditModal
              item={selectedItem}
              categoryOptions={categoryOptions}
              departmentOptions={departmentOptions}
              handleClose={handleCloseModal}
            />
          )}
        </>
      ) : (
        <>
          <IngredientTable
            list={filteredList() as Ingredient[]}
            categoryOptions={categoryOptions}
            handleSelection={handleSelection}
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteClick}
          />
          {selectedItem && "ingredient_id" in selectedItem && (
            <IngredientEditModal
              item={selectedItem}
              categoryOptions={categoryOptions}
              handleClose={handleCloseModal}
            />
          )}
        </>
      )}
      {isDeleteModalOpen && (
        <ConfirmationModal
          message="Are you sure you want to delete this item?"
          onConfirm={handleConfirmDelete}
          onCancel={handleCloseDeleteModal}
        />
      )}
    </div>
  );
};

export default ManagementTable;