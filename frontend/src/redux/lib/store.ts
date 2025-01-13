import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice'; // Default import for searchSlice.reducer

export const store = configureStore({
    reducer: {
        // naming reducer data
        search: searchReducer,
    }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;