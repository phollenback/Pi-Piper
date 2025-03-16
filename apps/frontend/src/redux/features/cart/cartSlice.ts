import IngredientDetails from '@/app/types/models/IngredientDetails';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartState {
    syscoCart: IngredientDetails[];
    usFoodsCart: IngredientDetails[];
    loading: boolean;
    error: string | null;
}

const initialState: CartState = {
    syscoCart: [],
    usFoodsCart: [],
    loading: false,
    error: null
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setSyscoCart: (state, action: PayloadAction<IngredientDetails[]>) => {
            state.syscoCart = action.payload;
        },
        setUsFoodsCart: (state, action: PayloadAction<IngredientDetails[]>) => {
            state.usFoodsCart = action.payload;
        },
        addToSyscoCart: (state, action: PayloadAction<IngredientDetails>) => {
            const existingItem = state.syscoCart.find(item => item.ingredientId === action.payload.ingredientId);
            
            if (existingItem) {
                // Update quantity if item exists
                existingItem.quantity = (existingItem.quantity || 0) + (action.payload.quantity || 1);
            } else {
                // Add new item
                state.syscoCart = [...state.syscoCart, { ...action.payload, quantity: 1 }];
            }
            console.log('Updated Sysco Cart:', state.syscoCart);
        },
        addToUsFoodsCart: (state, action: PayloadAction<IngredientDetails>) => {
            const existingItem = state.usFoodsCart.find(item => item.ingredientId === action.payload.ingredientId);
            
            if (existingItem) {
                // Update quantity if item exists
                existingItem.quantity = (existingItem.quantity || 0) + (action.payload.quantity || 1);
            } else {
                // Add new item
                state.usFoodsCart = [...state.usFoodsCart, { ...action.payload, quantity: 1 }];
            }
            console.log('Updated US Foods Cart:', state.usFoodsCart);
        },
        logCarts: (state) => {
            console.log('Sysco Cart:', state.syscoCart);
            console.log('US Foods Cart:', state.usFoodsCart);
        },
        removeFromSyscoCart: (state, action: PayloadAction<number>) => {
            state.syscoCart = state.syscoCart.filter(item => item.ingredientId !== action.payload);
        },
        removeFromUsFoodsCart: (state, action: PayloadAction<number>) => {
            state.usFoodsCart = state.usFoodsCart.filter(item => item.ingredientId !== action.payload);
        }, 
        clearSyscoCart: (state) => {
            state.syscoCart = [];
        },
        clearUsFoodsCart: (state) => {
            state.usFoodsCart = [];
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        clearCartState: (state) => {
            state.syscoCart = [];
            state.usFoodsCart = [];
            state.loading = false;
            state.error = null;
        }
    }
});

export const {
    setSyscoCart,
    setUsFoodsCart,
    addToSyscoCart,
    addToUsFoodsCart,
    logCarts,
    removeFromSyscoCart,
    removeFromUsFoodsCart,
    clearSyscoCart,
    clearUsFoodsCart,
    setLoading,
    setError,
    clearCartState,
} = cartSlice.actions;

export default cartSlice.reducer;