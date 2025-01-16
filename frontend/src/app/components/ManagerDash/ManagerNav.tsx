"use client";

import React, { useState } from "react";
import Button from "../Elements/Button"; // Assuming you have a shared Button component
import { useRouter } from "next/navigation";

const ManagerNav: React.FC = () => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Handle navigation
  const handleNavigation = (route: string) => {
    router.push(route);
    setDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <nav className="flex items-center justify-between bg-zinc-800 p-4 shadow-md">
      {/* Left Dropdown */}
      <div className="relative">
        <Button
          label="Navigate"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          size="large"
          style={{
            backgroundColor: "white",
            color: "black",
            fontWeight: "bold",
            width: "100%",
          }}
        />
        {dropdownOpen && (
          <ul className="absolute bg-white shadow-lg mt-2 py-2 rounded w-48">
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleNavigation("/home")}
            >
              Home
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleNavigation("/market")}
            >
              Market
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleNavigation("/cart-manager")}
            >
              Cart Manager
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleNavigation("/prep-manager")}
            >
              Prep Manager
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleNavigation("/inventory-turnover")}
            >
              Inventory Turnover
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleNavigation("/prep-dash")}
            >
              Prep Dashboard
            </li>
          </ul>
        )}
      </div>

      {/* Center - Dashboard Title */}
      <div className="flex-grow flex justify-center">
        <span className="text-lg font-semibold text-white">
          Welcome, Pi Manager
        </span>
      </div>

      {/* Right Section - Logout Button */}
      <div className="flex items-center space-x-2">
        <Button
          label="Logout"
          onClick={() => handleNavigation("/login")}
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

export default ManagerNav;