"use client"
import { RootState } from "@/redux/lib/store";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useEffect } from "react";

interface ProviderCartProps {
    provider: 'Sysco' | 'USFoods';
}

const ProviderCart: React.FC<ProviderCartProps> = ({ provider }) => {
    // Use conditional selection based on the provider
    const cart = useSelector((state: RootState) => 
        provider === 'Sysco' ? state.cart.syscoCart : state.cart.usFoodsCart
    );

    useEffect(() => {
        console.log(`Updated ${provider} Cart:`, cart);
    }, [cart, provider]); 

    return (
        <> 
            {cart.map((item, index) => (
                <CartItem 
                    key={index} 
                    item={item}
                />
            ))}
        </>
    );
}

export default ProviderCart;