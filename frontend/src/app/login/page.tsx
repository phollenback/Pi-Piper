"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setAuthInfo } from '../../redux/features/auth/authSlice';
import { useRestaurants } from '../../hooks/useRestaurants';
import { RestaurantSkeleton } from '../../components/RestaurantSkeleton';

interface Restaurant {
  restaurant_id: number;
  restaurant_name: string;
  logo: string;
}

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { restaurants, loading, error } = useRestaurants();
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [loginStep, setLoginStep] = useState<'select-restaurant' | 'credentials'>('select-restaurant');
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });
  const [loginType, setLoginType] = useState<'manager' | 'prep' | null>(null);

  const handleRestaurantSelect = (restaurant: Restaurant) => {
    setSelectedRestaurant({
      restaurant_id: restaurant.restaurant_id,
      restaurant_name: restaurant.restaurant_name,
      logo: restaurant.logo
    });
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
      restaurant_id: selectedRestaurant.restaurant_id.toString(),
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
        dispatch(setAuthInfo({
          restaurantId: selectedRestaurant.restaurant_id,
          username: credentials.username,
          role: loginType || 'prep'
        }));
        
        setTimeout(() => {
          router.push(loginType === 'manager' ? '/manager-dash' : '/prep-dash');
        }, 100);
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error(`Authentication failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-8">Loading restaurants...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-8 text-red-500">{error}</h1>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (loginStep === 'select-restaurant') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-8">Restaurant Login Page</h1>
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[...Array(3)].map((_, i) => (
              <RestaurantSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {restaurants.map((restaurant) => (
              <div
                key={restaurant.restaurant_id}
                className={`p-6 border rounded-lg cursor-pointer transition-all ${
                  selectedRestaurant?.restaurant_id === restaurant.restaurant_id
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => handleRestaurantSelect(restaurant)}
              >
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 border border-gray-200 rounded-lg flex items-center justify-center mb-4">
                    <img 
                      src={restaurant.logo} 
                      alt={restaurant.restaurant_name} 
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-center font-medium">{restaurant.restaurant_name}</span>
                </div>
              </div>
            ))}
          </div>
        )}

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
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="card w-full max-w-md">
        <div className="mb-8 flex flex-col items-center">
          <div className="w-24 h-24 border border-accent-dark rounded-full flex items-center justify-center mb-4">
            <span className="text-lg text-text-primary">LOGO</span>
          </div>
          <h2 className="text-xl font-bold text-text-primary">{selectedRestaurant?.restaurant_name}</h2>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="input"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          />
          <button
            type="submit"
            className="btn-primary w-full"
          >
            {loginType === 'manager' ? 'Manager Dashboard' : 'Prep List'}
          </button>
        </form>
      </div>
    </div>
  );
}