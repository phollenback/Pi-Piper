'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Popover } from '@base-ui-components/react/popover';
import { useDispatch } from 'react-redux';
import { addToSyscoCart, addToUsFoodsCart } from '@/redux/features/cart/cartSlice';
import MinStockSetting from '@/app/components/MinStockSetting';
import Chip from '@mui/joy/Chip';
import Alert from '@mui/joy/Alert';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import Button from '@mui/joy/Button';
import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import { toast } from 'react-hot-toast';

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

const getStatusColor = (status: string) => {
  const statusColors = {
    'good': 'bg-green-100 text-green-800',
    'low': 'bg-yellow-100 text-yellow-800',
    'critical': 'bg-red-100 text-red-800',
  };
  return statusColors[status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800';
};

export default function Inventory() {
  const dispatch = useDispatch();
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);
  const [showNotifications, setShowNotifications] = useState(true);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  const lowStockItems = inventoryItems.filter(item => item.currentStock <= item.minStock);
  const categories = [...new Set(inventoryItems.map(item => item.category))];

  const fetchInventoryData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:3000/ingredients/inventory/1'); // Adjust the restaurant ID as needed
      if (!response.ok) {
        throw new Error(`Failed to fetch inventory data: ${response.statusText}`);
      }
      const data = await response.json();
      
      // Transform data to match our InventoryItem interface if needed
      const formattedData = data.map((item: any) => ({
        id: item.ingredient_id || item.id,
        name: item.ingredient_name || item.name,
        category: item.category || 'Uncategorized',
        currentStock: item.quantity_after || item.currentStock || 0,
        minStock: item.quantity_threshold || item.minStock || 0,
        maxStock: item.max_stock || 100, // Default if not provided
        unit: item.unit || 'units',
        status: item.quantity_after <= item.quantity_threshold * 0.5 ? 'critical' : 
                item.quantity_after <= item.quantity_threshold ? 'low' : 'good',
        lastUpdated: item.last_updated || item.lastUpdated || new Date().toISOString(),
      }));
      
      setInventoryItems(formattedData);
    } catch (error) {
      console.error('Error fetching inventory data:', error);
      setError('Failed to load inventory data. Please try again later.');
      toast.error('Failed to load inventory data');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchInventoryData();
  }, [fetchInventoryData]);

  const handleAddToCart = (item: InventoryItem, provider: 'Sysco' | 'USFoods') => {
    const cartItem = {
      ingredientId: item.id,
      ingredientName: item.name,
      unit: item.unit,
      syscoPrice: provider === 'Sysco' ? 5.99 : 0,
      usFoodsPrice: provider === 'USFoods' ? 4.99 : 0,
      last_date_ordered: new Date(),
      restaurantId: 1, // Set appropriate restaurant ID
      quantity: 1
    };
    
    if (provider === 'Sysco') {
      dispatch(addToSyscoCart(cartItem));
      toast.success(`Added ${item.name} to Sysco cart`);
    } else {
      dispatch(addToUsFoodsCart(cartItem));
      toast.success(`Added ${item.name} to US Foods cart`);
    }
  };

  const updateMinStock = async (itemId: number, newMinStock: number): Promise<boolean> => {
    try {
      const response = await fetch(`http://localhost:3000/ingredients/minstock/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ minStock: newMinStock }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update min stock');
      }
      
      setInventoryItems(prevItems => 
        prevItems.map(item => 
          item.id === itemId ? { 
            ...item, 
            minStock: newMinStock,
            status: item.currentStock <= newMinStock * 0.5 ? 'critical' : 
                   item.currentStock <= newMinStock ? 'low' : 'good',
          } : item
        )
      );
      
      toast.success('Minimum stock level updated successfully');
      return true;
    } catch (error) {
      console.error('Error updating min stock:', error);
      toast.error('Failed to update minimum stock level');
      return false;
    }
  };

  const filteredItems = inventoryItems.filter(item => {
    const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <CircularProgress size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <Alert color="danger" sx={{ mb: 2 }}>
            {error}
            <Button onClick={fetchInventoryData} sx={{ ml: 2 }}>
              Retry
            </Button>
          </Alert>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Inventory Overview</h2>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Inventory Status</h2>
              <div className="flex space-x-4">
                <div>
                  <input
                    type="text"
                    placeholder="Search items..."
                    className="px-3 py-2 border rounded-md"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div>
                  <select
                    className="px-3 py-2 border rounded-md"
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    aria-label="Filter by category"
                  >
                    <option value="all">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <Button 
                  variant="outlined" 
                  color="primary" 
                  onClick={fetchInventoryData}
                >
                  Refresh
                </Button>
              </div>
            </div>
          </div>
          {showNotifications && lowStockItems.length > 0 && (
            <Alert 
              color="warning" 
              startDecorator={<WarningAmberRoundedIcon />}
              endDecorator={
                <Button size="sm" variant="soft" color="warning" onClick={() => setShowNotifications(false)}>
                  Dismiss
                </Button>
              }
              sx={{ mb: 2 }}
            >
              {lowStockItems.length} item(s) are below minimum stock levels
            </Alert>
          )}
          
          {filteredItems.length === 0 ? (
            <Box sx={{ p: 4, textAlign: 'center' }}>
              <Typography level="body-lg">
                No inventory items found matching your criteria.
              </Typography>
            </Box>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Item</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Current Stock</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Min Stock</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Max Stock</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Updated</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredItems.map((item) => (
                    <tr 
                      key={item.id}
                      className="hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedItem(item)}
                    >
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{item.name}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-gray-900">{item.category}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-medium">{item.currentStock} {item.unit}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-gray-500 flex items-center">
                          {item.minStock} {item.unit}
                          <MinStockSetting 
                            itemId={item.id}
                            itemName={item.name}
                            currentMinStock={item.minStock}
                            unit={item.unit}
                            onUpdate={updateMinStock}
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-gray-500">{item.maxStock} {item.unit}</div>
                      </td>
                      <td className="px-6 py-4">
                        <Chip
                          color={item.status === 'good' ? 'success' : item.status === 'low' ? 'warning' : 'danger'}
                          size="sm"
                          variant="soft"
                        >
                          {item.status}
                        </Chip>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {new Date(item.lastUpdated).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 relative">
                        <Popover.Root>
                          <Popover.Trigger>
                            <div className="text-blue-500 hover:text-blue-700 cursor-pointer">
                              Details
                            </div>
                          </Popover.Trigger>
                          <Popover.Portal>
                            <Popover.Positioner>
                              <Popover.Popup className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                                <div className="space-y-2">
                                  <h3 className="font-bold text-lg">{item.name} Providers</h3>
                                  <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                      <span>Sysco</span>
                                      <span>$5.99</span>
                                      <button 
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handleAddToCart(item, 'Sysco');
                                        }}
                                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                      >
                                        Add
                                      </button>
                                    </div>
                                    <div className="flex justify-between items-center">
                                      <span>US Foods</span>
                                      <span>$4.99</span>
                                      <button 
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handleAddToCart(item, 'USFoods');
                                        }}
                                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                                      >
                                        Add
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <Popover.Arrow className="fill-white" />
                              </Popover.Popup>
                            </Popover.Positioner>
                          </Popover.Portal>
                        </Popover.Root>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 