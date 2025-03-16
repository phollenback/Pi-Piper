import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPrepItemCards } from '@/app/util/data'; // Assuming fetchPrepItemCards returns static JSON
import { AppDispatch } from '@/redux/lib/store';

interface DailyPrepItem {
    prep_list_id: number;
    name: string;
    description: string;
    quantity: number;
    unit: string;
    category: number;
    status: string;
}


interface DailyPrepState {
    dailyPrepItems: DailyPrepItem[];
    loading: boolean;
    error: string | null;
}

const initialState: DailyPrepState = {
    dailyPrepItems: [],
    loading: false,
    error: null,
};

export const dailyPrepListSlice = createSlice({
    name: 'dailyPrepList',
    initialState,
    reducers: {
        setDailyPrepItems: (state, action: PayloadAction<DailyPrepItem[]>) => {
            state.dailyPrepItems = action.payload;
        },
    },
});

// Non-async version of the fetchDailyPrepItems function (because fetchPrepItemCards is static)
export const fetchDailyPrepItems = () => (dispatch: AppDispatch) => {
    try {
        const items = fetchPrepItemCards(); // No need for async since it's static JSON
        dispatch(setDailyPrepItems(items)); // Dispatch the fetched items to the store
    } catch (error) {
        console.error('Failed to fetch prep items:', error);
    }
};

// Export actions
export const { setDailyPrepItems } = dailyPrepListSlice.actions;

// Export the reducer
export default dailyPrepListSlice.reducer;