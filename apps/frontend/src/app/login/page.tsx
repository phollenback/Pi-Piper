"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setAuthInfo } from '@/features/redux/features/auth/authSlice';
import { useRestaurants } from '@/hooks/useRestaurants';
import LoginSteps from '../../components/LoginSteps';
import Image from 'next/image';
import { Restaurant } from '@/app/actions/restaurantActions';
import { LoginForm } from '@/components/InitialLogin/LoginForm';

interface LocalRestaurant {
  restaurant_id: number;
  restaurant_name: string;
  logo: string;
}

interface LoginCredentials {
  username: string;
  password: string;
  restaurant_id: number;
  role: 'manager' | 'prep';
}

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { restaurants, loading, error } = useRestaurants();
  const [selectedRestaurant, setSelectedRestaurant] = useState<LocalRestaurant | null>(null);
  const [loginStep, setLoginStep] = useState<'select-restaurant' | 'credentials' | 'logged-in'>('select-restaurant');
  const [loginType, setLoginType] = useState<'manager' | 'prep' | null>(null);

  const handleRestaurantSelect = (restaurant: Restaurant) => {
    setSelectedRestaurant({
      restaurant_id: restaurant.restaurantId,
      restaurant_name: restaurant.restaurantName,
      logo: restaurant.logo || '/images/restaurant-placeholder.png'
    });
  };

  const handleRoleSelect = (role: 'manager' | 'prep') => {
    setLoginType(role);
    setLoginStep('credentials');
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!selectedRestaurant) {
      toast.error('Please select a restaurant');
      return;
    }

    const formData = new FormData(e.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    const loginData: LoginCredentials = {
      username,
      password,
      restaurant_id: selectedRestaurant.restaurant_id,
      role: loginType || 'prep'
    };

    try {
      const result = await signIn('credentials', {
        ...loginData,
        redirect: false,
        callbackUrl: loginType === 'manager' ? '/manager-dash' : '/prep-dash'
      });

      if (result?.error) {
        toast.error(result.error);
      } else {
        setLoginStep('logged-in');
        dispatch(setAuthInfo({
          restaurantId: selectedRestaurant.restaurant_id,
          username,
          role: loginType || 'prep'
        }));
        
        setTimeout(() => {
          router.push(loginType === 'manager' ? '/manager-dash' : '/prep-dash');
        }, 1500);
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error(`Authentication failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  // Add a placeholder image
  const placeholderImage = '/images/restaurant-placeholder.png';

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <LoginSteps currentStep="select-restaurant" />
        <h1 className="text-2xl font-bold mb-8">Loading restaurants...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <LoginSteps currentStep="select-restaurant" />
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

  if (loginStep === 'logged-in') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <LoginSteps currentStep="logged-in" />
        <div className="card w-full max-w-md bg-white shadow-lg rounded-lg p-6 text-center">
          <div className="mb-4">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Successfully Logged In!</h2>
          <p className="text-gray-600">Redirecting to dashboard...</p>
        </div>
      </div>
    );
  }

  if (loginStep === 'select-restaurant') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <LoginSteps currentStep="select-restaurant" />
        <h1 className="text-2xl font-bold mb-8">Select Your Restaurant</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.restaurantId}
              className={`p-6 border rounded-lg cursor-pointer transition-all ${
                selectedRestaurant?.restaurant_id === restaurant.restaurantId
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => handleRestaurantSelect(restaurant)}
            >
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 border border-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <Image
                    src={restaurant.logo || placeholderImage}
                    alt={restaurant.restaurantName}
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-center font-medium">{restaurant.restaurantName}</span>
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
            Prep
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <LoginSteps currentStep="credentials" />
      <div className="card w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <div className="mb-8 flex flex-col items-center">
          <div className="w-24 h-24 border border-accent-dark rounded-full flex items-center justify-center mb-4 overflow-hidden">
            <Image
              src={selectedRestaurant?.logo || '/default-logo.png'}
              alt={selectedRestaurant?.restaurant_name || 'Restaurant logo'}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-bold text-text-primary">{selectedRestaurant?.restaurant_name}</h2>
          <span className="text-sm text-gray-500 mt-1">
            {loginType === 'manager' ? 'Manager Login' : 'Prep Login'}
          </span>
        </div>
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
}