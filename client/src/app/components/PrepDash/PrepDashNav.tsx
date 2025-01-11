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
  const router = useRouter();

  const handleManagerClick = () => {
    router.push("/manager/login");
  };

  const handleNavigateClick = () => {
    router.push("/navigate");
  };

  const handleSearchSubmit = (query: string) => {
    if (!query.trim()) {
      setError("Please enter a search term.");
      return;
    }
    console.log("Search submitted:", query);
    // search logic
    dispatch(setPrepSearchTerm(query));
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      {/* Left Button */}
      <div>
        <Button label="Manager" onClick={handleManagerClick} size="small" />
      </div>

      {/* Search Bar in the Center */}
      <SearchInput
        placeholder="Search..."
        onSearch={handleSearchSubmit}
        error={error}
      />

      {/* Right Button */}
      <div>
        <Button label="Navigate" onClick={handleNavigateClick} size="small" />
      </div>
    </nav>
  );
};

export default PrepDashNav;