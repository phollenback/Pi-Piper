import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  restaurantId: number | null;
  userInfo: {
    username: string;
    role: 'manager' | 'prep';
  } | null;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

// Default theme
const defaultTheme = {
  primary: '#3B82F6', // blue-500
  secondary: '#1F2937', // gray-800
  accent: '#10B981', // emerald-500
};

// Restaurant-specific themes
const restaurantThemes: Record<number, typeof defaultTheme> = {
  1: { // Hooli Bistro
    primary: '#3B82F6', // blue
    secondary: '#1F2937',
    accent: '#10B981',
  },
  2: { // Pied Piper Grill
    primary: '#10B981', // green
    secondary: '#1F2937',
    accent: '#6366F1',
  },
  3: { // Raviga Eatery
    primary: '#F59E0B', // amber
    secondary: '#1F2937',
    accent: '#EC4899',
  },
};

const initialState: AuthState = {
  restaurantId: null,
  userInfo: null,
  theme: defaultTheme,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthInfo: (state, action: PayloadAction<{
      restaurantId: number;
      username: string;
      role: 'manager' | 'prep';
    }>) => {
      state.restaurantId = action.payload.restaurantId;
      state.userInfo = {
        username: action.payload.username,
        role: action.payload.role
      };
      
      // Set theme based on restaurant ID
      state.theme = restaurantThemes[action.payload.restaurantId] || defaultTheme;
    },
    clearAuthInfo: (state) => {
      state.restaurantId = null;
      state.userInfo = null;
      state.theme = defaultTheme;
    }
  }
});

export const { setAuthInfo, clearAuthInfo } = authSlice.actions;
export default authSlice.reducer; 