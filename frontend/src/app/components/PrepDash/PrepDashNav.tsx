"use client";

import React, { useState } from "react";
import Button from "../Elements/Button";
import { useRouter } from "next/navigation";
import SearchInput from "../Elements/SearchInput";

// *** REDUX ***
import { setPrepSearchTerm } from "@/redux/features/search/searchSlice";
import { useDispatch } from "react-redux";

const PrepDashNav: React.FC = () => {
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (route: string) => {
    router.push(route);
    setDropdownOpen(false); // Close dropdown after selection
  };

  const handleSearchSubmit = (query: string) => {
    if (!query.trim()) {
      setError("Please enter a search term.");
      return;
    }
    console.log("Search submitted:", query);
    dispatch(setPrepSearchTerm(query));
  };

  return (
    <nav className="flex items-center justify-between bg-zinc-800 p-4 shadow-md">
      {/* Left Dropdown */}
      <div className="relative">
        <Button
          label="Navigate Prep Dash"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          size="large"
          style={{
            backgroundColor: "white",
            color: "black",
            fontWeight: "bold",
            width: "100%"
          }}
        />
        {dropdownOpen && (
          <ul className="absolute bg-white shadow-lg mt-2 py-2 rounded w-48">
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleNavigation("/prep-dash")}
            >
              Daily Prep
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleNavigation("/prep-dash/recipebook")}
            >
              Recipebook
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleNavigation("/prep-dash/planner")}
            >
              Prep Planner
            </li>
          </ul>
        )}
      </div>
 
      {/* Search Bar in the Center */}
      <div className="flex-grow flex justify-center px-4">
        <SearchInput
          placeholder="Search..."
          onSearch={handleSearchSubmit}
          error={error}
        />
      </div>

      {/* Right Button */}
      <div>
        <Button
          label="Manager Login"
          onClick={() => handleNavigation("/manager-dash")}
          size="large"
          style={{
            backgroundColor: "white",
            color: "black",
            fontWeight: "bold",
          }}
        />
      </div>
    </nav>
  );
};

export default PrepDashNav;