import React, { useState } from 'react';
import SelectBox from '../../../components/Elements/ui/SelectBox';
import {Category} from '@/app/types/models/Category';
import InputField from '../../Elements/login/InputField';
import Button from '@/components/Elements/Button';
import { useQuery } from '@tanstack/react-query';
import { getGroups } from '@/app/actions/groupActions';
import { Group } from '@/app/types/models/Group';
import { setManagerSearchTerm } from '@/features/redux/features/search/searchSlice';
import { useDispatch } from 'react-redux';

interface HeadingProps {
  setSection: () => void; 
  setSelectedCategory: (category: number | null) => void; 
  selectedCategory: number | null; 
  categories: Category[]; 
  selectedGroup: number | null;
  setSelectedGroup: (group: number | null) => void;
}

const Heading: React.FC<HeadingProps> = ({ setSection, setSelectedCategory, selectedCategory, categories, selectedGroup, setSelectedGroup }) => {
  const [searchError, setSearchError] = useState(""); 
  const [query, setQuery] = useState(""); 
  const RESTAURANT_ID = 1;
  const dispatch = useDispatch();
  
  // Fetch groups
  const { data: groups = [] } = useQuery({
    queryKey: ['groups', RESTAURANT_ID],
    queryFn: () => getGroups(RESTAURANT_ID)
  });

  const handleCategoryChange = (value: string | number) => {
    setSelectedCategory(value === "" ? null : Number(value));
  };

  const handleGroupChange = (value: string | number) => {
    setSelectedGroup(value === "" ? null : Number(value));
  };

  const handleResetClick = () => {
    setQuery("");
    setSearchError("");
    setSelectedCategory(null);
    setSelectedGroup(null);
  };

  const handleSearchSubmit = (query: string) => {
    if (!query.trim()) {
      dispatch(setManagerSearchTerm(query));
      setSearchError("Please enter a search term.");
      return;
    }
    console.log("query", query);
    // Further search logic would go here.
  };

  return (
    <div className="w-full h-full flex justify-center items-center p-6 mr-8">
      <div className="w-full max-w-4xl flex flex-col items-center space-y-8">
        {/* Heading Section */}
        <div className="w-full text-center">
          <h1 className="font-bold text-5xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Start Filtering
          </h1>
        </div>

        {/* Filters Section */}
        <div className="flex flex-col items-center gap-6 w-full max-w-2xl">
          {/* Search Bar and Buttons */}
          <div className="flex items-center gap-4 w-full">
            <div className="flex-1">
              <InputField
                id="search"
                type="text"
                placeholder="Search..."
                error={searchError ? searchError : ""}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <Button
              label="Search"
              onClick={() => handleSearchSubmit(query)}
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                fontWeight: "bold",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                transition: "all 0.2s ease-in-out",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            />
            <Button
              label="Reset"
              onClick={() => handleResetClick()}
              style={{
                backgroundColor: "#f44336",
                color: "white",
                fontWeight: "bold",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                transition: "all 0.2s ease-in-out",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            />
          </div>

          {/* Category, Group and Section Selection */}
          <div className="flex items-center gap-4 w-full justify-center">
            <div className="w-64">
              <SelectBox
                value={selectedCategory !== null ? selectedCategory.toString() : ""}
                onChange={handleCategoryChange}
                options={categories.map((category) => ({
                  label: category.categoryName,
                  value: category.categoryId,
                }))}
                placeholder="Select Category"
              />
            </div>
            <div className="w-64">
              <SelectBox
                value={selectedGroup !== null ? selectedGroup.toString() : ""}
                onChange={handleGroupChange}
                options={[
                  { label: 'All Items', value: '' },
                  ...groups.map((group: Group) => ({
                    label: group.group_name,
                    value: group.group_id
                  }))
                ]}
                placeholder="Filter by Group"
              />
            </div>
            <Button
              label="Switch Section"
              onClick={setSection}
              style={{
                backgroundColor: "#2196F3",
                color: "white",
                fontWeight: "bold",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                transition: "all 0.2s ease-in-out",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;