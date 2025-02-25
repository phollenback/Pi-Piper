"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';

interface Restaurant {
  id: number;
  name: string;
  logo: string;
}

const restaurants: Restaurant[] = [
  { id: 1, name: 'Downriver Grill', logo: '/logos/downriver.svg' },
  { id: 2, name: 'Republic PI', logo: '/logos/republic.svg' },
  { id: 3, name: 'Flying Goat', logo: '/logos/flying-goat.svg' },
];

export default function LoginPage() {
  const router = useRouter();
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [loginStep, setLoginStep] = useState<'select-restaurant' | 'credentials'>('select-restaurant');
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });
  const [loginType, setLoginType] = useState<'manager' | 'prep' | null>(null);

  const handleRestaurantSelect = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const handleRoleSelect = (role: 'manager' | 'prep') => {
    setLoginType(role);
    setLoginStep('credentials');
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedRestaurant) {
      toast.error('Please select a restaurant');
      return;
    }

    const loginData = {
      username: credentials.username,
      password: credentials.password,
      restaurant_id: selectedRestaurant.id.toString(),
      role: loginType || 'prep'
    };

    try {
      const result = await signIn('credentials', {
        ...loginData,
        redirect: false
      });

      if (result?.error) {
        toast.error(result.error);
      } else {
        router.push(loginType === 'manager' ? '/manager-dash' : '/prep-dash');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error(`Authentication failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  if (loginStep === 'select-restaurant') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-8">Restaurant Login Page</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className={`p-6 border rounded-lg cursor-pointer transition-all ${
                selectedRestaurant?.id === restaurant.id
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => handleRestaurantSelect(restaurant)}
            >
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 border border-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-lg">LOGO</span>
                </div>
                <span className="text-center font-medium">{restaurant.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => handleRoleSelect('manager')}
            className={`px-6 py-2 text-white rounded ${
              !selectedRestaurant 
                ? 'bg-blue-300 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
            disabled={!selectedRestaurant}
          >
            Manager
          </button>
          <button
            onClick={() => handleRoleSelect('prep')}
            className={`px-6 py-2 text-white rounded ${
              !selectedRestaurant 
                ? 'bg-green-300 cursor-not-allowed' 
                : 'bg-green-600 hover:bg-green-700'
            }`}
            disabled={!selectedRestaurant}
          >
            Prep List
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center">
          <div className="w-24 h-24 border border-gray-200 rounded-full flex items-center justify-center mb-4">
            <span className="text-lg">LOGO</span>
          </div>
          <h2 className="text-xl font-bold">{selectedRestaurant?.name}</h2>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 border rounded"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              checked={credentials.rememberMe}
              onChange={(e) => setCredentials({ ...credentials, rememberMe: e.target.checked })}
              className="mr-2"
            />
            <label htmlFor="rememberMe">Stay logged in for the day</label>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {loginType === 'manager' ? 'Manager Dashboard' : 'Prep List'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <a href="#" className="text-blue-600 hover:underline">
            forgot password?
          </a>
        </div>

        <button
          onClick={() => {
            setLoginStep('select-restaurant');
            setSelectedRestaurant(null);
            setLoginType(null);
          }}
          className="mt-8 w-full py-2 border border-gray-300 rounded hover:bg-gray-50"
        >
          Back to Restaurant Selection
        </button>
      </div>
    </div>
  );
}