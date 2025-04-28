'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Popover } from '@base-ui-components/react/popover';
import { useDispatch } from 'react-redux';
import { addToSyscoCart, addToUsFoodsCart } from '@/features/redux/features/cart/cartSlice';
import MinStockSetting from '@/components/MinStockSetting';
import Chip from '@mui/joy/Chip';
import Alert from '@mui/joy/Alert';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import Button from '@mui/joy/Button';
import CircularProgress from '@mui/joy/CircularProgress';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Slider from '@mui/joy/Slider';
import { toast } from 'react-hot-toast';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';

interface InventoryItem {
  id: number;
  name: string;
  category: string;
  currentStock: number;
  minStock: number;
  maxStock: number;
  unit: string;
  status: 'good' | 'low' | 'critical' | 'out';
  lastUpdated: string;
}

// const getStatusColor = (status: string) => {
//   const statusColors = {
//     'good': 'bg-green-100 text-green-800',
//     'low': 'bg-yellow-100 text-yellow-800',
//     'critical': 'bg-red-100 text-red-800',
//   };
//   return statusColors[status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800';
// };

export default function Inventory() {
  const dispatch = useDispatch();
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [, setSelectedItem] = useState<InventoryItem | null>(null);
  const [showNotifications, setShowNotifications] = useState(true);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [notificationThreshold, setNotificationThreshold] = useState<number>(80);
  
  // Categorize items by status
  const outOfStockItems = inventoryItems.filter(item => item.status === 'out');
  const lowStockItems = inventoryItems.filter(item => item.status === 'low' || item.status === 'critical');
  const goodStockItems = inventoryItems.filter(item => item.status === 'good');
  
  const categories = [...new Set(inventoryItems.map(item => item.category))];

  const fetchInventoryData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:3001/ingredients/inventory/1');
      if (!response.ok) {
        throw new Error(`Failed to fetch inventory data: ${response.statusText}`);
      }
      const data = await response.json();
      
      // Transform data to match our InventoryItem interface
      const formattedData = data.map((item: {
        ingredientId: number;
        ingredientName: string;
        quantity: string | null;
        quantityThreshold: string;
        unit: string;
        maxStock: string;
        lastUpdated: string;
      }) => {
        const currentStock = item.quantity ? parseFloat(item.quantity) : 0;
        const minStock = parseFloat(item.quantityThreshold);
        
        let status: 'good' | 'low' | 'critical' | 'out' = 'good';
        if (currentStock === 0) {
          status = 'out';
        } else if (currentStock <= minStock * 0.5) {
          status = 'critical';
        } else if (currentStock <= minStock) {
          status = 'low';
        }
        
        return {
          id: item.ingredientId,
          name: item.ingredientName,
          category: 'Uncategorized', // Default category since it's not in the response
          currentStock,
          minStock,
          maxStock: parseFloat(item.maxStock),
          unit: item.unit,
          status,
          lastUpdated: item.lastUpdated,
        };
      });
      
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
    
    // Fetch notification threshold setting
    const fetchNotificationThreshold = async () => {
      try {
        const restaurantId = 1; // Use the actual restaurant ID from your auth context or state
        const response = await fetch(`http://localhost:3001/restaurant-settings/${restaurantId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch notification threshold');
        }
        
        const settings = await response.json();
        if (settings && settings.lowStockThreshold !== undefined) {
          setNotificationThreshold(settings.lowStockThreshold);
        }
      } catch (error) {
        console.error('Error fetching notification threshold:', error);
        // Continue with default value if fetch fails
      }
    };
    
    fetchNotificationThreshold();
  }, [fetchInventoryData]);

  const handleAddToCart = (item: InventoryItem, provider: 'Sysco' | 'USFoods') => {
    const cartItem = {
      ingredientId: item.id,
      ingredientName: item.name,
      unit: item.unit,
      syscoPrice: provider === 'Sysco' ? 5.99 : 0,
      usFoodsPrice: provider === 'USFoods' ? 4.99 : 0,
      last_date_ordered: new Date().toISOString(),
      restaurantId: 1,
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
      const restaurantId = 1; // Use the actual restaurant ID from your auth context or state
      const response = await fetch(`http://localhost:3001/ingredients/${restaurantId}/minstock/${itemId}`, {
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
            status: item.currentStock === 0 ? 'out' :
                   item.currentStock <= newMinStock * 0.5 ? 'critical' : 
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

  const handleNotificationThresholdChange = async (event: Event, newValue: number | number[]) => {
    const threshold = newValue as number;
    setNotificationThreshold(threshold);
    
    try {
      const restaurantId = 1; // Use the actual restaurant ID from your auth context or state
      const response = await fetch(`http://localhost:3001/restaurant-settings/${restaurantId}/low-stock-threshold`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ threshold }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to save notification threshold');
      }
      
      toast.success(`Notification threshold set to ${threshold}%`);
    } catch (error) {
      console.error('Error saving notification threshold:', error);
      toast.error('Failed to save notification threshold');
    }
  };

  const filteredItems = (status: 'all' | 'out' | 'low' | 'good') => {
    let items = inventoryItems;
    
    if (status === 'out') {
      items = outOfStockItems;
    } else if (status === 'low') {
      items = lowStockItems;
    } else if (status === 'good') {
      items = goodStockItems;
    }
    
    return items.filter(item => {
      const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };

  const renderInventoryTable = (items: InventoryItem[]) => {
    if (items.length === 0) {
      return (
        <Box sx={{ p: 4, textAlign: 'center' }}>
          <Typography level="body-lg">
            No inventory items found matching your criteria.
          </Typography>
        </Box>
      );
    }
    
    return (
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
            {items.map((item, index) => (
              <tr 
                key={`${item.id}-${index}`}
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
                    color={
                      item.status === 'out' ? 'danger' :
                      item.status === 'critical' ? 'danger' :
                      item.status === 'low' ? 'warning' : 'success'
                    }
                    size="sm"
                    variant="soft"
                  >
                    {item.status === 'out' ? 'Out of Stock' : 
                     item.status === 'critical' ? 'Critical' :
                     item.status === 'low' ? 'Low Stock' : 'In Stock'}
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
    );
  };

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
        
        {/* Notification Threshold Slider */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Low Stock Notification Threshold</h3>
          <div className="flex items-center gap-4">
            <Typography>0%</Typography>
            <Slider
              aria-label="Low stock notification threshold"
              value={notificationThreshold}
              onChange={handleNotificationThresholdChange}
              marks
              step={10}
              min={0}
              max={100}
              sx={{ flexGrow: 1 }}
            />
            <Typography>100%</Typography>
          </div>
          <Typography level="body-sm" className="mt-2 text-gray-500">
            Set when you want to be notified about low stock. Current setting: {notificationThreshold}% of minimum stock level
          </Typography>
        </div>
        
        {/* Inventory Status */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
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
          
          {showNotifications && (outOfStockItems.length > 0 || lowStockItems.length > 0) && (
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
              {outOfStockItems.length > 0 && `${outOfStockItems.length} item(s) are out of stock. `}
              {lowStockItems.length > 0 && `${lowStockItems.length} item(s) are below minimum stock levels.`}
            </Alert>
          )}
          
          <Tabs defaultValue="all" sx={{ borderRadius: 0 }}>
            <TabList>
              <Tab value="all">All Items ({inventoryItems.length})</Tab>
              <Tab value="out" color="danger">Out of Stock ({outOfStockItems.length})</Tab>
              <Tab value="low" color="warning">Low Stock ({lowStockItems.length})</Tab>
              <Tab value="good" color="success">In Stock ({goodStockItems.length})</Tab>
            </TabList>
            
            <TabPanel value="all">
              {renderInventoryTable(filteredItems('all'))}
            </TabPanel>
            
            <TabPanel value="out">
              {renderInventoryTable(filteredItems('out'))}
            </TabPanel>
            
            <TabPanel value="low">
              {renderInventoryTable(filteredItems('low'))}
            </TabPanel>
            
            <TabPanel value="good">
              {renderInventoryTable(filteredItems('good'))}
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
} 