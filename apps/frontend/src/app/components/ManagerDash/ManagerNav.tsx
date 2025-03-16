"use client";

import React, { useState, useEffect, useRef } from "react";
import Button from "../Elements/Button"; 
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useSelector } from 'react-redux';
import { RootState } from "@/redux/lib/store";
import { 
  FaHome, 
  FaUsers, 
  FaShoppingCart, 
  FaClipboardList, 
  FaChartBar, 
  FaBoxes, 
  FaStore, 
  FaExchangeAlt, 
  FaSignOutAlt, 
  FaUtensils 
} from 'react-icons/fa';

// ManagerNav component: provides navigation for the manager dashboard.
const ManagerNav: React.FC = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavigation = (route: string) => {
    router.push(route);
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section - Logo and Welcome Message */}
        <div className="flex items-center space-x-6">
          <div 
            className="cursor-pointer" 
            onClick={() => handleNavigation("/manager-dash")}
          >
            <div className="flex items-center">
              <FaHome className="text-white text-2xl mr-2" />
              <span className="text-xl font-bold text-white">Manager Dashboard</span>
            </div>
          </div>
          <span className="text-lg text-gray-300">
            Welcome, <span className="font-semibold text-white">{userInfo?.username}</span>
          </span>
        </div>

        {/* Center - Navigation Buttons */}
        <div className="flex space-x-4" ref={dropdownRef}>
          <div className="relative">
            <Button
              label={
                <div className="flex items-center">
                  <span>Navigate</span>
                  <svg 
                    className={`ml-2 w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              }
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                backgroundColor: dropdownOpen ? '#4299e1' : '#4a5568',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                fontWeight: '500',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
              }}
            />
            {dropdownOpen && (
              <ul className="absolute z-50 bg-white shadow-xl mt-2 py-2 rounded-lg w-64 border border-gray-200 overflow-hidden transition-all duration-200 ease-in-out">
                <li
                  className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex items-center space-x-3 border-b border-gray-100 transition-colors duration-150"
                  onClick={() => handleNavigation("/manager-dash")}
                >
                  <FaHome className="text-blue-600" />
                  <span className="font-medium">Dashboard Home</span>
                </li>
                <li
                  className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex items-center space-x-3 border-b border-gray-100 transition-colors duration-150"
                  onClick={() => handleNavigation("/manager-dash/admin")}
                >
                  <FaUsers className="text-blue-600" />
                  <span className="font-medium">User Manager</span>
                </li>
                <li
                  className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex items-center space-x-3 border-b border-gray-100 transition-colors duration-150"
                  onClick={() => handleNavigation("/manager-dash/inventory")}
                >
                  <FaBoxes className="text-blue-600" />
                  <span className="font-medium">Inventory</span>
                </li>
                <li
                  className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex items-center space-x-3 border-b border-gray-100 transition-colors duration-150"
                  onClick={() => handleNavigation("/manager-dash/market")}
                >
                  <FaStore className="text-blue-600" />
                  <span className="font-medium">Market</span>
                </li>
                <li
                  className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex items-center space-x-3 border-b border-gray-100 transition-colors duration-150"
                  onClick={() => handleNavigation("/manager-dash/market/cart")}
                >
                  <FaShoppingCart className="text-blue-600" />
                  <span className="font-medium">Cart</span>
                </li>
                <li
                  className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex items-center space-x-3 border-b border-gray-100 transition-colors duration-150"
                  onClick={() => handleNavigation("/manager-dash/prep-manager")}
                >
                  <FaClipboardList className="text-blue-600" />
                  <span className="font-medium">Prep Manager</span>
                </li>
                <li
                  className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex items-center space-x-3 border-b border-gray-100 transition-colors duration-150"
                  onClick={() => handleNavigation("/manager-dash/reports")}
                >
                  <FaChartBar className="text-blue-600" />
                  <span className="font-medium">Reports</span>
                </li>
                <li
                  className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex items-center space-x-3 border-b border-gray-100 transition-colors duration-150"
                  onClick={() => handleNavigation("/manager-dash/compare")}
                >
                  <FaExchangeAlt className="text-blue-600" />
                  <span className="font-medium">Compare Restaurants</span>
                </li>
              </ul>
            )}
          </div>
          
          <Button
            label={
              <div className="flex items-center">
                <FaUtensils className="mr-2" />
                <span>Prep Dashboard</span>
              </div>
            }
            onClick={() => handleNavigation("/prep-dash")}
            style={{
              backgroundColor: '#4a5568',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              fontWeight: '500',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
            }}
          />
        </div>

        {/* Right Section - Logout Button */}
        <div className="flex items-center">
          <Button
            label={
              <div className="flex items-center">
                <FaSignOutAlt className="mr-2" />
                <span>Sign Out</span>
              </div>
            }
            onClick={() => signOut({ callbackUrl: '/login' })}
            style={{
              backgroundColor: '#e53e3e',
              color: 'white', 
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              fontWeight: '500',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default ManagerNav;