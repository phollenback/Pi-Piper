"use client" 

import React from "react";
import Button from "../Elements/Button"; // Assuming you have a shared Button component
import { useRouter } from "next/navigation";

const ManagerNav: React.FC = () => {
  const router = useRouter();

  // Define the handler for each button
  const handleLogout = () => {
    // Add your logout logic here (e.g., clearing tokens, etc.)
    console.log("Logged out");
    router.push("/login"); // Redirect to login page after logout
  };

  const handlePrepListClick = () => {
    router.push("/preplist"); // Navigate to the prep list page
  };

  const handleNavigateClick = () => {
    router.push("/navigate"); // Navigate to the navigate page (adjust as necessary)
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      {/* Left section - Prep List Button */}
      <div className="flex gap-4">
        <Button label="Prep List" onClick={handlePrepListClick} size="small" />
      </div>

      {/* Center - Logo or empty space (optional) */}
      <div className="flex justify-center flex-grow">
        <span className="text-white font-bold">Manager Dashboard</span>
      </div>

      {/* Right section - Logout and Navigate Button */}
      <div className="flex gap-4">
        <Button label="Navigate" onClick={handleNavigateClick} size="small" />
        <Button label="Logout" onClick={handleLogout} size="small" />
      </div>
    </nav>
  );
};

export default ManagerNav;