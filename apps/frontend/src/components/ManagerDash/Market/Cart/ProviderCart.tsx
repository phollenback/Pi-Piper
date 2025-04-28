"use client";
import { RootState } from "@/features/redux/lib/store";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useEffect, useMemo } from "react";

interface CartItem {
    ingredientId: number;
    ingredientName: string;
    unit: string;
    syscoPrice: number;
    usFoodsPrice: number;
    quantity: number;
}

interface ProviderCartProps {
    provider: "Sysco" | "USFoods";
}

// Provider-specific cart component that manages items and calculates totals based on vendor
const ProviderCart: React.FC<ProviderCartProps> = ({ provider }) => {
    // Select cart data based on provider from Redux store
    const cart = useSelector((state: RootState) =>
        provider === "Sysco" ? state.cart.syscoCart : state.cart.usFoodsCart
    );

    // Calculate total price using provider-specific pricing
    const totalPrice = useMemo(() => {
        return cart.reduce((total: number, item: CartItem) => {
            const price = provider === "Sysco" ? item.syscoPrice : item.usFoodsPrice;
            return total + price * (item.quantity ?? 1);
        }, 0);
    }, [cart, provider]);

    useEffect(() => {
        console.log(`Updated ${provider} Cart:`, cart);
    }, [cart, provider]);

    if (cart.length === 0) {
        return (
            <div className="flex flex-col h-[60vh] items-center justify-center text-gray-500">
                <p className="text-xl">No items in cart</p>
                <p className="text-sm mt-2">Add items from the market to see them here</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-[60vh]">
            <div className="flex-grow overflow-y-auto p-4">
                {cart.map((item: CartItem, index: number) => (
                    <CartItem key={index} item={item} />
                ))}
            </div>

            <div className="mt-4 p-4 border-t bg-white text-right">
                <div className="flex justify-between items-center">
                    <span className="text-lg">Items: {cart.length}</span>
                    <span className="text-3xl font-bold">Total: ${totalPrice.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

export default ProviderCart;