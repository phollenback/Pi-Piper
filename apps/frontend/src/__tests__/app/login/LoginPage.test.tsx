import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@/redux/lib/store';
import LoginPage from '@/app/login/page';
import axios from 'axios';

// Mock NextAuth
jest.mock('next-auth/react', () => ({
  __esModule: true,
  signIn: jest.fn(() => Promise.resolve({ error: null })),
  useSession: jest.fn(() => ({ data: null, status: 'unauthenticated' })),
}));

// Mock axios
jest.mock('axios');

// Add this mock for Next.js router
jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    pathname: '/login',
    query: {},
    asPath: '/login',
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
  })),
}));

describe('LoginPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders restaurant selection step initially', () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    expect(screen.getByText(/Select your restaurant/i)).toBeInTheDocument();
  });

  it('transitions to credentials step after restaurant selection', async () => {
    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    
    // Mock restaurant data
    const mockRestaurant = {
      restaurant_id: 1,
      restaurant_name: 'Test Restaurant',
      logo: 'test.jpg'
    };

    // Simulate restaurant selection
    fireEvent.click(screen.getByText(mockRestaurant.restaurant_name));
    
    await waitFor(() => {
      expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    });
  });

  it('handles successful login', async () => {
    // Mock restaurant data
    const mockRestaurant = {
      restaurant_id: 1,
      restaurant_name: 'Test Restaurant',
      logo: 'test.jpg'
    };

    // Mock axios response
    (axios.post as jest.Mock).mockResolvedValueOnce({
      data: {
        id: '1',
        role: 'manager',
        restaurant_id: mockRestaurant.restaurant_id
      }
    });

    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );

    // Simulate restaurant selection
    fireEvent.click(screen.getByText(mockRestaurant.restaurant_name));
    
    // Wait for credentials step to appear
    await waitFor(() => {
      expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    });

    // Simulate login flow
    fireEvent.change(screen.getByPlaceholderText('Username'), { 
      target: { value: 'testuser' } 
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), { 
      target: { value: 'password' } 
    });
    fireEvent.click(screen.getByText('Login'));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('/api/auth/login', {
        username: 'testuser',
        password: 'password',
        restaurant_id: mockRestaurant.restaurant_id.toString(),
        role: 'prep' // Default role
      });
    });
  });
}); 
