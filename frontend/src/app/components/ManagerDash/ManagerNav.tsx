"use client";

import React, { useState } from "react";
import Button from "../Elements/Button"; 
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useSelector } from 'react-redux';
import { RootState } from "@/redux/lib/store";

// ManagerNav component: provides navigation for the manager dashboard.
const ManagerNav: React.FC = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNavigation = (route: string) => {
    router.push(route);
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-black p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section - Prep Dashboard Button and Welcome Message */}
        <div className="flex items-center space-x-4">
          <div className="pr-16">
          <Button
            label="Prep Dashboard"
            onClick={() => handleNavigation("/prep-dash")}
            style={{
              backgroundColor: '#4a5568',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              fontWeight: '500',
              transition: 'all 0.2s'
            }}
          />
          </div>
          <span className="text-2xl font-bold text-white tracking-wide">
            Welcome, {userInfo?.username}
          </span>
        </div>

        {/* Center - Navigation Buttons */}
        <div className="flex space-x-4">
          <div className="relative">
            <Button
              label="Navigate ▼"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                backgroundColor: '#4a5568',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                fontWeight: '500',
                transition: 'all 0.2s',
              }}
            />
            {dropdownOpen && (
              <ul className="absolute z-50 bg-white shadow-lg mt-2 py-2 rounded-lg w-56 border border-gray-200">
                <li
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center space-x-2 border-b border-gray-100"
                  onClick={() => handleNavigation("/manager-dash/admin")}
                >
                  <span>User Manager</span>
                </li>
                <li
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center space-x-2 border-b border-gray-100"
                  onClick={() => handleNavigation("/manager-dash/market")}
                >
                  <span>Market</span>
                </li>
                <li
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center space-x-2 border-b border-gray-100"
                  onClick={() => handleNavigation("/manager-dash/market/cart")}
                >
                  <span>Cart</span>
                </li>
                <li
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center space-x-2 border-b border-gray-100"
                  onClick={() => handleNavigation("/manager-dash/prep-manager")}
                >
                  <span>Prep Manager</span>
                </li>
                <li
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center space-x-2"
                  onClick={() => handleNavigation("/manager-dash/reports")}
                >
                  <span>Reports</span>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Right Section - Logout Button */}
        <div className="flex items-center space-x-4">
          <Button
            label="Sign Out"
            onClick={() => signOut({ callbackUrl: '/login' })}
            style={{
              backgroundColor: '#e53e3e',
              color: 'white', 
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              fontWeight: '500',
              transition: 'all 0.2s',
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default ManagerNav;