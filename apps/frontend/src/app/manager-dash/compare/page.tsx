'use client';

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Tabs, TabList, Tab, TabPanel } from '@mui/joy';
import InventoryView from '@/app/components/Compare/InventoryView';
import PrepProcessView from '@/app/components/Compare/PrepProcessView';
import PerformanceView from '@/app/components/Compare/PerformanceView';
import { fetchAllRestaurants, fetchRestaurantDetails, Restaurant, RestaurantDetails } from '@/app/actions/restaurantActions';

export default function RestaurantViewPage() {
  const [selectedRestaurants, setSelectedRestaurants] = useState<number[]>([]);
  const [comparisonMode, setComparisonMode] = useState<boolean>(false);
  
  // Fetch all restaurants the user has access to
  const { data: restaurants = [], isLoading: isLoadingRestaurants } = useQuery<Restaurant[]>({
    queryKey: ['restaurants'],
    queryFn: fetchAllRestaurants,
  });
  
  // Fetch details for the selected restaurants
  const { data: restaurantDetailsMap, isLoading: isLoadingDetails } = useQuery<Record<number, RestaurantDetails>>({
    queryKey: ['restaurantDetails', selectedRestaurants],
    queryFn: async () => {
      const detailsMap: Record<number, RestaurantDetails> = {};
      await Promise.all(
        selectedRestaurants.map(async (id) => {
          try {
            const details = await fetchRestaurantDetails(id);
            detailsMap[id] = details;
          } catch (error) {
            console.error(`Failed to fetch details for restaurant ${id}:`, error);
          }
        })
      );
      return detailsMap;
    },
    enabled: selectedRestaurants.length > 0,
  });

  // Toggle restaurant selection
  const toggleRestaurantSelection = (restaurantId: number) => {
    setSelectedRestaurants(prev => {
      if (prev.includes(restaurantId)) {
        return prev.filter(id => id !== restaurantId);
      } else {
        // If in comparison mode, allow multiple selections
        // Otherwise, replace the current selection
        return comparisonMode ? [...prev, restaurantId] : [restaurantId];
      }
    });
  };

  // Toggle comparison mode
  const toggleComparisonMode = () => {
    setComparisonMode(prev => !prev);
    // If turning off comparison mode and multiple restaurants are selected,
    // keep only the first one
    if (comparisonMode && selectedRestaurants.length > 1) {
      setSelectedRestaurants([selectedRestaurants[0]]);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Restaurant Dashboard</h1>
      
      {/* Comparison Mode Toggle */}
      <div className="mb-4 flex items-center">
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <input 
              type="checkbox" 
              className="sr-only" 
              checked={comparisonMode}
              onChange={toggleComparisonMode}
            />
            <div className={`block w-14 h-8 rounded-full ${comparisonMode ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
            <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition transform ${comparisonMode ? 'translate-x-6' : ''}`}></div>
          </div>
          <div className="ml-3 font-medium">
            {comparisonMode ? 'Comparison Mode: ON' : 'Comparison Mode: OFF'}
          </div>
        </label>
        {comparisonMode && (
          <div className="ml-4 text-sm text-gray-600">
            Select multiple restaurants to compare side by side
          </div>
        )}
      </div>
      
      {/* Restaurant Selection */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Select {comparisonMode ? 'Restaurants' : 'a Restaurant'}</h2>
        {isLoadingRestaurants ? (
          <div>Loading restaurants...</div>
        ) : (
          <div className="flex gap-2 flex-wrap">
            {restaurants.map((restaurant: Restaurant) => (
              <button
                key={restaurant.restaurantId}
                onClick={() => toggleRestaurantSelection(restaurant.restaurantId)}
                className={`px-4 py-2 rounded ${
                  selectedRestaurants.includes(restaurant.restaurantId)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200'
                }`}
              >
                {restaurant.restaurantName}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Selected Restaurant Info */}
      {selectedRestaurants.length > 0 && (
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {isLoadingDetails ? (
            <div className="p-4 bg-blue-50 rounded-lg">Loading restaurant details...</div>
          ) : (
            selectedRestaurants.map(restaurantId => {
              const details = restaurantDetailsMap?.[restaurantId];
              return details ? (
                <div key={restaurantId} className="p-4 bg-blue-50 rounded-lg">
                  <h2 className="text-lg font-semibold mb-2">
                    {details.restaurant.restaurantName}
                  </h2>
                  
                  {/* Restaurant Metrics */}
                  <div className="grid grid-cols-1 gap-2 mt-4">
                    <div className="bg-white p-3 rounded shadow">
                      <h3 className="text-sm font-medium text-gray-500">Total Inventory Items</h3>
                      <p className="text-2xl font-bold">{details.metrics.inventory.totalItems}</p>
                    </div>
                    
                    <div className="bg-white p-3 rounded shadow">
                      <h3 className="text-sm font-medium text-gray-500">Out of Stock</h3>
                      <p className="text-2xl font-bold text-red-600">{details.metrics.inventory.outOfStock}</p>
                    </div>
                    
                    <div className="bg-white p-3 rounded shadow">
                      <h3 className="text-sm font-medium text-gray-500">Low Stock</h3>
                      <p className="text-2xl font-bold text-yellow-600">{details.metrics.inventory.lowStock}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div key={restaurantId} className="p-4 bg-red-50 rounded-lg text-red-700">
                  Failed to load restaurant details
                </div>
              );
            })
          )}
        </div>
      )}

      {/* View Tabs */}
      <Tabs defaultValue="inventory">
        <TabList>
          <Tab value="inventory">Inventory</Tab>
          <Tab value="prep">Preparation Processes</Tab>
          <Tab value="performance">Performance Metrics</Tab>
        </TabList>
        
        <TabPanel value="inventory">
          <InventoryView restaurantIds={selectedRestaurants} />
        </TabPanel>
        
        <TabPanel value="prep">
          <PrepProcessView restaurantIds={selectedRestaurants} />
        </TabPanel>
        
        <TabPanel value="performance">
          <PerformanceView restaurantIds={selectedRestaurants} />
        </TabPanel>
      </Tabs>
    </div>
  );
} 