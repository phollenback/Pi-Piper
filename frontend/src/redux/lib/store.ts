import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice'; 
import cartReducer from '../features/cart/cartSlice'

export const store = configureStore({
    reducer: {
        // naming reducer data
        search: searchReducer,
        cart: cartReducer,
    }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;