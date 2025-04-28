'use client'
import { useSearchParams } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import {
    removeFromSyscoCart,
    removeFromUsFoodsCart,
    updateSyscoCartQuantity,
    updateUsFoodsCartQuantity,
    clearSyscoCart,
    clearUsFoodsCart
} from '@/features/redux/features/cart/cartSlice';
import Button from '@/components/Elements/Button';
import { useState } from 'react';

interface CartItem {
    ingredientId: number;
    ingredientName: string;
    unit: string;
    syscoPrice: number;
    usFoodsPrice: number;
    quantity: number;
}

interface RootState {
    cart: {
        syscoCart: CartItem[];
        usFoodsCart: CartItem[];
    };
}

type ViewMode = 'single' | 'compare';

export default function CartPage() {
    const searchParams = useSearchParams();
    const initialProvider = searchParams.get('provider') || 'Sysco';
    const dispatch = useDispatch();
    
    const [viewMode, setViewMode] = useState<ViewMode>('single');
    const [activeProvider, setActiveProvider] = useState(initialProvider);
    
    const syscoCart = useSelector((state: RootState) => state.cart.syscoCart);
    const usFoodsCart = useSelector((state: RootState) => state.cart.usFoodsCart);

    const handleQuantityChange = (ingredientId: number, quantity: number, provider: 'Sysco' | 'USFoods') => {
        if (quantity < 1) return;
        const updateQuantity = provider === 'Sysco' ? updateSyscoCartQuantity : updateUsFoodsCartQuantity;
        dispatch(updateQuantity({ ingredientId, quantity }));
    };

    const handleRemoveItem = (ingredientId: number, provider: 'Sysco' | 'USFoods') => {
        const removeFromCart = provider === 'Sysco' ? removeFromSyscoCart : removeFromUsFoodsCart;
        dispatch(removeFromCart(ingredientId));
    };

    const handleClearCart = (provider: 'Sysco' | 'USFoods') => {
        const clearCart = provider === 'Sysco' ? clearSyscoCart : clearUsFoodsCart;
        dispatch(clearCart());
    };

    const handleSubmitOrder = (provider: 'Sysco' | 'USFoods') => {
        const cart = provider === 'Sysco' ? syscoCart : usFoodsCart;
        console.log(`Submitting order to ${provider}:`, cart);
        const clearCart = provider === 'Sysco' ? clearSyscoCart : clearUsFoodsCart;
        dispatch(clearCart());
    };

    const calculateTotal = (cart: CartItem[], provider: 'Sysco' | 'USFoods') => {
        return cart.reduce((sum, item) => {
            const price = provider === 'Sysco' ? item.syscoPrice : item.usFoodsPrice;
            return sum + (price * item.quantity);
        }, 0);
    };

    const renderCart = (provider: 'Sysco' | 'USFoods', cart: CartItem[]) => {
        const total = calculateTotal(cart, provider);
        
        return (
            <div className={`${viewMode === 'compare' ? 'w-1/2 px-2' : 'w-full'}`}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">{provider} Cart</h2>
                    <div className="flex gap-2">
                        <Button
                            label="Clear"
                            onClick={() => handleClearCart(provider)}
                            style={{ backgroundColor: "red", color: "white" }}
                        />
                        <Button
                            label="Submit Order"
                            onClick={() => handleSubmitOrder(provider)}
                            style={{ backgroundColor: "green", color: "white" }}
                        />
                    </div>
                </div>

                {cart.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-gray-500">Cart is empty</p>
                    </div>
                ) : (
                    <>
                        <div className="bg-white rounded-lg shadow overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Item</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Unit</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Qty</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {cart.map((item) => {
                                        const price = provider === 'Sysco' ? item.syscoPrice : item.usFoodsPrice;
                                        const itemTotal = price * item.quantity;
                                        const otherPrice = provider === 'Sysco' ? item.usFoodsPrice : item.syscoPrice;
                                        const priceDiff = price - otherPrice;
                                        
                                        return (
                                            <tr key={item.ingredientId}>
                                                <td className="px-4 py-4">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {item.ingredientName}
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4">
                                                    <div className="text-sm text-gray-500">{item.unit}</div>
                                                </td>
                                                <td className="px-4 py-4">
                                                    <div className="text-sm text-gray-900">
                                                        ${price.toFixed(2)}
                                                        {viewMode === 'compare' && (
                                                            <div className={`text-xs ${priceDiff > 0 ? 'text-red-500' : 'text-green-500'}`}>
                                                                {priceDiff > 0 ? `+${priceDiff.toFixed(2)}` : priceDiff.toFixed(2)}
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4">
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            className="px-2 py-1 border rounded"
                                                            onClick={() => handleQuantityChange(item.ingredientId, item.quantity - 1, provider)}
                                                        >
                                                            -
                                                        </button>
                                                        <span className="text-sm text-gray-900">{item.quantity}</span>
                                                        <button
                                                            className="px-2 py-1 border rounded"
                                                            onClick={() => handleQuantityChange(item.ingredientId, item.quantity + 1, provider)}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4">
                                                    <div className="text-sm text-gray-900">${itemTotal.toFixed(2)}</div>
                                                </td>
                                                <td className="px-4 py-4">
                                                    <button
                                                        className="text-red-600 hover:text-red-900"
                                                        onClick={() => handleRemoveItem(item.ingredientId, provider)}
                                                    >
                                                        Remove
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-4 flex justify-end">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <div className="text-lg font-semibold">
                                    Total: ${total.toFixed(2)}
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        );
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Shopping Cart</h1>
                <div className="flex gap-4">
                    {viewMode === 'single' && (
                        <div className="flex gap-2">
                            <Button
                                label="Switch to Sysco"
                                onClick={() => setActiveProvider('Sysco')}
                                style={{ 
                                    backgroundColor: activeProvider === 'Sysco' ? "blue" : "gray",
                                    color: "white"
                                }}
                            />
                            <Button
                                label="Switch to US Foods"
                                onClick={() => setActiveProvider('USFoods')}
                                style={{ 
                                    backgroundColor: activeProvider === 'USFoods' ? "green" : "gray",
                                    color: "white"
                                }}
                            />
                        </div>
                    )}
                    <Button
                        label={viewMode === 'single' ? "Compare Carts" : "Single Cart View"}
                        onClick={() => setViewMode(viewMode === 'single' ? 'compare' : 'single')}
                        style={{ backgroundColor: "purple", color: "white" }}
                    />
                </div>
            </div>

            <div className="flex flex-wrap -mx-2">
                {viewMode === 'single' ? (
                    renderCart(activeProvider as 'Sysco' | 'USFoods', activeProvider === 'Sysco' ? syscoCart : usFoodsCart)
                ) : (
                    <>
                        {renderCart('Sysco', syscoCart)}
                        {renderCart('USFoods', usFoodsCart)}
                    </>
                )}
            </div>
        </div>
    );
}