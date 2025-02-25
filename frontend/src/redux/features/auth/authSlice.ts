import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  restaurantId: number | null;
  userInfo: {
    username: string;
    role: 'manager' | 'prep';
  } | null;
}

const initialState: AuthState = {
  restaurantId: null,
  userInfo: null
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
    },
    clearAuthInfo: (state) => {
      state.restaurantId = null;
      state.userInfo = null;
    }
  }
});

export const { setAuthInfo, clearAuthInfo } = authSlice.actions;
export default authSlice.reducer; 