import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
    prepSearchTerm: string;
    managerSearchTerm: string;
    loading: boolean; // Track if a search is in progress
    error: string | null; // Store error messages, if any
}

const initialState: SearchState = { 
    prepSearchTerm: "",
    managerSearchTerm: "",
    loading: false, // Initially not loading
    error: null, // Initially no error
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        // Action to update the prepSearchTerm
        setPrepSearchTerm: (state, action: PayloadAction<string>) => {
            state.prepSearchTerm = action.payload;
        },
        setManagerSearchTerm: (state, action: PayloadAction<string>) => {
            console.log(state.managerSearchTerm);
            state.managerSearchTerm = action.payload;
        },
        clearPrepSearchTerm: (state) => {
            state.prepSearchTerm = ""; // Reset to an empty string
        },
        clearManagerSearchTerm: (state) => {
            state.prepSearchTerm = ""; // Reset to an empty string
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload; // Set loading state
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload; // Set error state
        },
        clearSearchState: (state) => {
            state.loading = false;
            state.error = null;
        },
    },
});

// Export the actions
export const { setPrepSearchTerm, setManagerSearchTerm, setLoading, setError, clearSearchState } = searchSlice.actions;

// Export the reducer
export default searchSlice.reducer;