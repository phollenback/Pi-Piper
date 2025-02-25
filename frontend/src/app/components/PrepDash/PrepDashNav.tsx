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
    console.log("Search submitted:", query);
    dispatch(setPrepSearchTerm(query));
  };

  return (
    <nav className="flex items-center justify-between bg-black p-4 shadow-md">
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
 
      <div className="flex-grow flex justify-center px-4">
        <SearchInput
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search..."
          onSearch={handleSearchSubmit}
          error={error}
        />
      </div>

      <div className="text-white flex gap-4">
        {(session?.user?.role === 'manager' || session?.user?.role === 'owner') && (
          <Button
            label="Manager Login"
            onClick={() => handleNavigation("/manager-dash")}
            size="large"
            style={{
              backgroundColor: "white",
              color: "black",
              fontWeight: "bold"
            }}
          />
        )}
        <Button
          label="Sign Out"
          onClick={() => signOut({ callbackUrl: '/login' })}
          size="large"
          style={{
            backgroundColor: "#ef4444",
            color: "white",
            fontWeight: "bold"
          }}
        />
      </div>
    </nav>
  );
};

export default PrepDashNav;