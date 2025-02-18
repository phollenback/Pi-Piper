"use client";
import { RootState } from "@/redux/lib/store";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useEffect, useMemo } from "react";

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
        return cart.reduce((total, item) => {
            const price = provider === "Sysco" ? item.syscoPrice : item.usFoodsPrice;
            return total + price * (item.quantity ?? 1);
        }, 0);
    }, [cart, provider]);

    useEffect(() => {
        console.log(`Updated ${provider} Cart:`, cart);
    }, [cart, provider]);

    return (
        <div className="flex flex-col h-[60vh]">
            <div className="flex-grow overflow-y-auto p-4">
                {cart.map((item, index) => (
                    <CartItem key={index} item={item} />
                ))}
            </div>

            <div className="mt-4 p-4 border-t bg-white text-right">
                <span className="text-3xl font-bold">Total: ${totalPrice.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default ProviderCart;