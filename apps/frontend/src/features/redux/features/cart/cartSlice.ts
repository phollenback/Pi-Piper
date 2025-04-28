import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    ingredientId: number;
    ingredientName: string;
    unit: string;
    syscoPrice: number;
    usFoodsPrice: number;
    last_date_ordered: string;
    restaurantId: number;
    quantity: number;
}

interface CartState {
    syscoCart: CartItem[];
    usFoodsCart: CartItem[];
}

const initialState: CartState = {
    syscoCart: [],
    usFoodsCart: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToSyscoCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.syscoCart.find(item => item.ingredientId === action.payload.ingredientId);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.syscoCart.push(action.payload);
            }
        },
        addToUsFoodsCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.usFoodsCart.find(item => item.ingredientId === action.payload.ingredientId);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.usFoodsCart.push(action.payload);
            }
        },
        removeFromSyscoCart: (state, action: PayloadAction<number>) => {
            state.syscoCart = state.syscoCart.filter(item => item.ingredientId !== action.payload);
        },
        removeFromUsFoodsCart: (state, action: PayloadAction<number>) => {
            state.usFoodsCart = state.usFoodsCart.filter(item => item.ingredientId !== action.payload);
        },
        updateSyscoCartQuantity: (state, action: PayloadAction<{ ingredientId: number; quantity: number }>) => {
            const item = state.syscoCart.find(item => item.ingredientId === action.payload.ingredientId);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
        updateUsFoodsCartQuantity: (state, action: PayloadAction<{ ingredientId: number; quantity: number }>) => {
            const item = state.usFoodsCart.find(item => item.ingredientId === action.payload.ingredientId);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
        clearSyscoCart: (state) => {
            state.syscoCart = [];
        },
        clearUsFoodsCart: (state) => {
            state.usFoodsCart = [];
        }
    }
});

export const {
    addToSyscoCart,
    addToUsFoodsCart,
    removeFromSyscoCart,
    removeFromUsFoodsCart,
    updateSyscoCartQuantity,
    updateUsFoodsCartQuantity,
    clearSyscoCart,
    clearUsFoodsCart
} = cartSlice.actions;

export default cartSlice.reducer;