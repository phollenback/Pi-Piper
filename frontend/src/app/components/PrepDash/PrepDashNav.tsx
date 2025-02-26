"use client";

import React, { useState } from "react";
import Button from "../Elements/Button";
import { useRouter } from "next/navigation";
import SearchInput from "../Elements/SearchInput";
import { setPrepSearchTerm } from "@/redux/features/search/searchSlice";
import { useDispatch } from "react-redux";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

// Navigation component with search functionality and route management for prep dashboard
const PrepDashNav: React.FC = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const { data: session } = useSession();

  // Handle navigation and close dropdown
  const handleNavigation = (route: string) => {
    router.push(route);
    setDropdownOpen(false);
  };

  // Validate and dispatch search term to Redux store
  const handleSearchSubmit = (query: string) => {
    if (!query.trim()) {
      setError("Please enter a search term.");
      return;
    }
    dispatch(setPrepSearchTerm(query));
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-black p-4 shadow-xl">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section - Navigation Dropdown */}
        <div className="relative">
          <Button
            label="Navigate ▼"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            style={{
              backgroundColor: '#3c4b5f',
              color: 'white',
              padding: '0.5rem 1.5rem',
              borderRadius: '0.5rem',
              fontWeight: '600',
              transition: 'all 0.2s',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          />
          {dropdownOpen && (
            <ul className="absolute z-50 bg-white shadow-2xl mt-3 py-2 rounded-lg w-64 border border-gray-200">
              <li
                className="px-6 py-3 hover:bg-gray-50 cursor-pointer flex items-center space-x-3 border-b border-gray-100 transition-colors duration-200"
                onClick={() => handleNavigation("/prep-dash")}
              >
                <span className="text-gray-700 font-medium">Daily Prep</span>
              </li>
              <li
                className="px-6 py-3 hover:bg-gray-50 cursor-pointer flex items-center space-x-3 border-b border-gray-100 transition-colors duration-200"
                onClick={() => handleNavigation("/prep-dash/recipebook")}
              >
                <span className="text-gray-700 font-medium">Recipe Book</span>
              </li>
              <li
                className="px-6 py-3 hover:bg-gray-50 cursor-pointer flex items-center space-x-3 border-b border-gray-100 transition-colors duration-200"
                onClick={() => handleNavigation("/prep-dash/planner")}
              >
                <span className="text-gray-700 font-medium">Prep Planner</span>
              </li>
              <li
                className="px-6 py-3 hover:bg-gray-50 cursor-pointer flex items-center space-x-3 transition-colors duration-200"
                onClick={() => handleNavigation("/prep-dash/grouper")}
              >
                <span className="text-gray-700 font-medium">Grouper</span>
              </li>
            </ul>
          )}
        </div>

        {/* Center - Search Input */}
        <div className="flex-grow flex justify-center px-4">
          <div className="w-2/3 flex items-center bg-gray-100 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
            <SearchInput
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search prep..."
              onSearch={handleSearchSubmit}
              error={error}
              className="input flex-grow border-none focus:ring-0 p-2"
            />
            <div className="flex-shrink-0 ml-2"> {/* Added margin-left to separate the button from the input */}
              <Button
                label="Search"
                onClick={() => handleSearchSubmit(searchValue)}
                style={{
                  backgroundColor: '#2b6cb0',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.375rem',
                  fontWeight: '600',
                  transition: 'all 0.2s',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Section - Buttons */}
        <div className="flex items-center space-x-6">
          {(session?.user?.role === 'manager' || session?.user?.role === 'owner') && (
            <Button
              label="Manager Dashboard"
              onClick={() => handleNavigation("/manager-dash")}
              style={{
                backgroundColor: '#3c4b5f',
                color: 'white',
                padding: '0.5rem 1.5rem',
                borderRadius: '0.5rem',
                fontWeight: '600',
                transition: 'all 0.2s',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            />
          )}
          <Button
            label="Sign Out"
            onClick={() => signOut({ callbackUrl: '/login' })}
            style={{
              backgroundColor: '#dc2626',
              color: 'white',
              padding: '0.5rem 1.5rem',
              borderRadius: '0.5rem',
              fontWeight: '600',
              transition: 'all 0.2s',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default PrepDashNav;