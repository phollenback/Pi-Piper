import { configureStore } from '@reduxjs/toolkit';

// Reducers ************
import searchReducer from '../features/search/searchSlice'; 
import cartReducer from '../features/cart/cartSlice'
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
    reducer: {
        // naming reducer data
        search: searchReducer,
        cart: cartReducer,
        auth: authReducer
    }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;