import React, { useState, useEffect } from 'react';
import SelectBox from '../../../components/Elements/ui/SelectBox';
import Category from '@/app/types/models/Category';
import InputField from '../../Elements/login/InputField';
import Button from '../../Elements/Button';
import { useDispatch } from "react-redux";
import { setManagerSearchTerm } from '@/redux/features/search/searchSlice';

interface HeadingProps {
  setSection: (section: string) => void;
  setSelectedCategory: (category: number | null) => void;
  selectedCategory: number | null;
  categories: Category[];
}

const Heading: React.FC<HeadingProps> = ({ setSection, setSelectedCategory, selectedCategory, categories }) => {
  const dispatch = useDispatch();
  const [searchError, setSearchError] = useState("");
  const [selectedSection, setSelectedSection] = useState("prepitem");
  const [query, setQuery] = useState("");

  const handleCategoryChange = (value: string | number) => {
    setSelectedCategory(value === "" ? null : Number(value));

    setSelectedSection("prepitem");

  };

  const handleResetClick = () => {
    setQuery("");
    dispatch(setManagerSearchTerm(""));
    setSearchError("");
    setSelectedCategory(0);
  }
  const handleSearchSubmit = (query: string) => {
    if (!query.trim()) {
      setSearchError("Please enter a search term.");
      return;
    }
    console.log("Search submitted:", query);
    dispatch(setManagerSearchTerm(query));
  };

  const handleSectionChange = (value: string | number) => {
        // make sure the select box sets the section correctly here
        setSelectedSection(value as string);
        setSection(value as string);
  }

  useEffect(() => {
    setSection("prepitem");
  }, [setSection]);

  return(
      <div className="w-[60%] justify-center items-center border-r-8 border-black p-2">
        {/* Heading Section */}
        <div className="text-left ml-8 mt-8">
            <h1 className="font-bold text-5xl mb-10">Start Managing...</h1>
        </div>

        {/* Two Containers Section */}
        <div className="w-full h-1/2 flex items-right justify-right gap-6 mb-2">
            <div className="mt-5 ml-2">
                <InputField
                    id="search"
                    type="text"
                    placeholder="Search..."
                    error={searchError ? searchError : ""}
                    value={query} // Bind to query state
                    onChange={(e) => setQuery(e.target.value)} // Update query state
                />
            </div>
            
            {/* Button Section */}
            <div className="flex space-x-4 ml-2 mt-6">
                <Button
                    label="Search"
                    onClick={() => handleSearchSubmit(query)}
                    style={{
                        backgroundColor: "green",
                        color: "white",
                        fontWeight: "bold",
                        height: "50%",
                        width: "100%",
                        padding: "0.5rem 1rem", // Reduced padding for smaller height
                    }}
                />
                <Button
                    label="Reset"
                    onClick={() => handleResetClick()}
                    style={{
                        backgroundColor: "red",
                        color: "white",
                        fontWeight: "bold",
                        height: "50%",
                        width: "100%",
                        padding: "0.5rem 1rem", // Reduced padding for smaller height
                    }}
                />
            </div>
            
            {/* Category Selection */}
            <div className="mt-5">
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
            <div className="ml-5 mt-5">
                <SelectBox
                    value={selectedSection}
                    onChange={handleSectionChange}
                    options={[
                        { label: "Prep Items", value: "prepitem" },
                        { label: "Ingredients", value: "ingredient" },
                    ].map((option) => ({ ...option, value: option.value.toString() }))}
                    placeholder="Select Section"
                />
            </div>
        </div>
    </div>
  );
};

export default Heading;