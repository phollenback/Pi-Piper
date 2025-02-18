import React, { useState } from 'react';
import SelectBox from '../../../components/Elements/ui/SelectBox';
import Category from '@/app/types/models/Category';
import InputField from '../../Elements/login/InputField';
import Button from '../../Elements/Button';

// Heading component: provides search and filtering options for prep items and ingredients.
interface HeadingProps {
  setSection: () => void; // Callback to update the selected section.
  setSelectedCategory: (category: number | null) => void; // Callback to update the selected category.
  selectedCategory: number | null; // Currently selected category ID.
  categories: Category[]; // Array of available categories.
}

const Heading: React.FC<HeadingProps> = ({ setSection, setSelectedCategory, selectedCategory, categories }) => {
  const [searchError, setSearchError] = useState(""); // Error message for invalid search.
  const [query, setQuery] = useState(""); // Current search query.

  // Handles changes to the category selection.
  const handleCategoryChange = (value: string | number) => {
    setSelectedCategory(value === "" ? null : Number(value));
  };

  // Resets the search form to its initial state.
  const handleResetClick = () => {
    setQuery("");
    setSearchError("");
    setSelectedCategory(null); // Reset category to null
  };

  // Handles search form submission.
  const handleSearchSubmit = (query: string) => {
    if (!query.trim()) {
      setSearchError("Please enter a search term.");
      return;
    }
    //Further search logic would go here.
  };

  return (
    <div className="w-full h-full flex justify-center items-center p-6 mr-8">
      <div className="w-full max-w-4xl flex flex-col items-center">
        {/* Heading Section */}
        <div className="w-full text-center mb-4">
          <h1 className="font-bold text-5xl">Start filtering.</h1>
        </div>

        {/* Filters Section */}
        <div className="flex flex-col items-center gap-4 w-full">
          {/* Search Bar and Buttons */}
          <div className="flex items-center space-x-4 mb-4">
            <InputField
              id="search"
              type="text"
              placeholder="Search..."
              error={searchError ? searchError : ""}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button
              label="Search"
              onClick={() => handleSearchSubmit(query)}
              style={{
                backgroundColor: "green",
                color: "white",
                fontWeight: "bold",
                padding: "0.5rem 1rem",
              }}
            />
            <Button
              label="Reset"
              onClick={() => handleResetClick()}
              style={{
                backgroundColor: "red",
                color: "white",
                fontWeight: "bold",
                padding: "0.5rem 1rem",
              }}
            />
          </div>

          {/* Category and Section Selection (Next to each other) */}
          <div className="flex items-center gap-4 mt-4">
            {/* Category Selection */}
            <div>
              <SelectBox
                value={selectedCategory !== null ? selectedCategory.toString() : ""}
                onChange={handleCategoryChange}
                options={categories.map((category) => ({
                  label: category.category_name,
                  value: category.category_id,
                }))}
                placeholder="Select Category"
              />
            </div>

            {/* Section Selection */}
            <div>
              <Button
                label="Switch Section"
                onClick={setSection}
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  fontWeight: "bold",
                  padding: "0.5rem 1rem",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;