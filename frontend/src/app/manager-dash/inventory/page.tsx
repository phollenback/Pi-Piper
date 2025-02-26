'use client';

import React, { useState } from 'react';

interface TimeVariable {
  id: number;
  name: string;
  value: number;
  unit: string;
}

interface InventoryItem {
  id: number;
  name: string;
  category: string;
  currentStock: number;
  minStock: number;
  maxStock: number;
  unit: string;
  status: 'good' | 'low' | 'critical';
  lastUpdated: string;
}

interface Department {
  id: number;
  name: string;
  progress: number;
  tasks: {
    completed: number;
    total: number;
  };
  status: 'on-track' | 'behind' | 'ahead';
  lastUpdate: string;
}

export default function InventoryProgress() {
  // Mock data for time variables
  const timeVariables: TimeVariable[] = [
    { id: 1, name: 'Prep Time', value: 45, unit: 'minutes' },
    { id: 2, name: 'Cook Time', value: 30, unit: 'minutes' },
    { id: 3, name: 'Service Time', value: 15, unit: 'minutes' },
    { id: 4, name: 'Clean Time', value: 20, unit: 'minutes' },
  ];

  // Mock data for inventory
  const inventoryItems: InventoryItem[] = [
    {
      id: 1,
      name: 'Ground Beef',
      category: 'Meat',
      currentStock: 25,
      minStock: 20,
      maxStock: 50,
      unit: 'lbs',
      status: 'good',
      lastUpdated: '2024-03-20T14:30:00Z'
    },
    {
      id: 2,
      name: 'Tomatoes',
      category: 'Produce',
      currentStock: 15,
      minStock: 30,
      maxStock: 60,
      unit: 'lbs',
      status: 'critical',
      lastUpdated: '2024-03-20T15:00:00Z'
    },
    {
      id: 3,
      name: 'Cheese',
      category: 'Dairy',
      currentStock: 40,
      minStock: 35,
      maxStock: 80,
      unit: 'lbs',
      status: 'good',
      lastUpdated: '2024-03-20T13:45:00Z'
    },
    {
      id: 4,
      name: 'Lettuce',
      category: 'Produce',
      currentStock: 22,
      minStock: 20,
      maxStock: 45,
      unit: 'heads',
      status: 'low',
      lastUpdated: '2024-03-20T12:30:00Z'
    }
  ];

  // Mock data for departments
  const departments: Department[] = [
    {
      id: 1,
      name: 'Kitchen',
      progress: 75,
      tasks: { completed: 15, total: 20 },
      status: 'on-track',
      lastUpdate: '10 minutes ago'
    },
    {
      id: 2,
      name: 'Service',
      progress: 90,
      tasks: { completed: 18, total: 20 },
      status: 'ahead',
      lastUpdate: '5 minutes ago'
    },
    {
      id: 3,
      name: 'Bar',
      progress: 60,
      tasks: { completed: 12, total: 20 },
      status: 'behind',
      lastUpdate: '15 minutes ago'
    },
    {
      id: 4,
      name: 'Cleaning',
      progress: 80,
      tasks: { completed: 16, total: 20 },
      status: 'on-track',
      lastUpdate: '8 minutes ago'
    }
  ];

  const getStatusColor = (status: string) => {
    const statusColors = {
      'good': 'bg-green-100 text-green-800',
      'low': 'bg-yellow-100 text-yellow-800',
      'critical': 'bg-red-100 text-red-800',
      'on-track': 'bg-blue-100 text-blue-800',
      'behind': 'bg-red-100 text-red-800',
      'ahead': 'bg-green-100 text-green-800'
    };
    return statusColors[status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800';
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Time Variables */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Time Variables</h2>
            <div className="grid grid-cols-2 gap-4">
              {timeVariables.map((variable) => (
                <div key={variable.id} className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-gray-500">{variable.name}</h3>
                  <p className="text-2xl font-bold text-gray-900">
                    {variable.value} <span className="text-sm text-gray-500">{variable.unit}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Inventory Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-bold text-gray-900">Inventory Status</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Item</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stock</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Updated</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {inventoryItems.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-500">{item.category}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="font-medium">{item.currentStock}</span>
                          <span className="text-gray-500 ml-1">{item.unit}</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          Min: {item.minStock} | Max: {item.maxStock}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {new Date(item.lastUpdated).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column - Department Progress */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Department Progress</h2>
            <div className="space-y-6">
              {departments.map((dept) => (
                <div key={dept.id} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-gray-900">{dept.name}</h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(dept.status)}`}>
                      {dept.status}
                    </span>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-gray-600">
                          {dept.tasks.completed}/{dept.tasks.total} Tasks
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-gray-600">
                          {dept.progress}%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                      <div
                        style={{ width: `${dept.progress}%` }}
                        className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${getProgressColor(dept.progress)}`}
                      />
                    </div>
                    <div className="text-xs text-gray-500">
                      Last updated: {dept.lastUpdate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Update Inventory
              </button>
              <button className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                Add Task
              </button>
              <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                Generate Report
              </button>
              <button className="w-full px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">
                Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 