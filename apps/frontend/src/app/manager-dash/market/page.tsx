'use client'
import SearchInput from "@/components/Elements/SearchInput";
import { useEffect, useState } from "react";
import Button from "@/components/Elements/Button";
import { useDispatch } from "react-redux";
import { addToSyscoCart, addToUsFoodsCart } from "@/features/redux/features/cart/cartSlice"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MarketItem, marketItems, criticalItems } from "@/data/marketData";

export default function MarketContainer() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { data: session, status } = useSession();
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [filteredItems, setFilteredItems] = useState<MarketItem[]>(marketItems);

    useEffect(() => {
        if (status === 'loading') return;
        
        if (status === 'unauthenticated') {
            setError('Please sign in to view ingredients');
            setIsLoading(false);
            return;
        }

        if (!session?.user?.restaurant_id) {
            setError('Restaurant ID not found in session. Please log in again.');
            setIsLoading(false);
            return;
        }

        setIsLoading(false);
    }, [status, session]);

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, router]);

    const handleSearch = (query: string) => {
        setSearchTerm(query);
        const filtered = marketItems.filter(item =>
            item.ingredientName.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredItems(filtered);
    };

    const handleAddToCart = (item: MarketItem, provider: 'Sysco' | 'USFoods') => {
        const cartItem = {
            ingredientId: item.ingredientId,
            ingredientName: item.ingredientName,
            unit: item.unit,
            syscoPrice: item.syscoPrice,
            usFoodsPrice: item.usFoodsPrice,
            last_date_ordered: new Date().toISOString(),
            restaurantId: 1,
            quantity: 1
        };

        if (provider === 'Sysco') {
            dispatch(addToSyscoCart(cartItem));
        } else {
            dispatch(addToUsFoodsCart(cartItem));
        }
    };

    const handleViewCart = (provider: 'Sysco' | 'USFoods') => {
        router.push(`/manager-dash/market/cart?provider=${provider}`);
    };

    if (status === 'loading' || isLoading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="text-red-500 text-xl mb-4">{error}</div>
                <Button
                    label="Try Again"
                    onClick={() => window.location.reload()}
                    style={{
                        backgroundColor: "black",
                        color: "white",
                    }}
                />
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Market</h1>
                <div className="flex gap-4">
                    <Button
                        label="View Sysco Cart"
                        onClick={() => handleViewCart('Sysco')}
                        style={{ backgroundColor: "blue", color: "white" }}
                    />
                    <Button
                        label="View US Foods Cart"
                        onClick={() => handleViewCart('USFoods')}
                        style={{ backgroundColor: "green", color: "white" }}
                    />
                </div>
            </div>

            <SearchInput 
                onSearch={handleSearch} 
                placeholder="Search ingredients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Critical Items Section */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Critical Items</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {criticalItems.map((item) => (
                        <div key={item.ingredientId} className="border p-4 rounded-lg shadow">
                            <h3 className="font-semibold">{item.ingredientName}</h3>
                            <p className="text-red-500">Current Stock: {item.currentStock} {item.unit}</p>
                            <p>Min Stock: {item.minStock} {item.unit}</p>
                            <div className="flex gap-2 mt-2">
                                <Button
                                    label={`Add to Sysco ($${item.syscoPrice})`}
                                    onClick={() => handleAddToCart(item as MarketItem, 'Sysco')}
                                    style={{ backgroundColor: "blue", color: "white" }}
                                />
                                <Button
                                    label={`Add to US Foods ($${item.usFoodsPrice})`}
                                    onClick={() => handleAddToCart(item as MarketItem, 'USFoods')}
                                    style={{ backgroundColor: "green", color: "white" }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* All Items Section */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">All Items</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredItems.map((item) => (
                        <div key={item.ingredientId} className="border p-4 rounded-lg shadow">
                            <h3 className="font-semibold">{item.ingredientName}</h3>
                            <p>Current Stock: {item.currentStock} {item.unit}</p>
                            <p>Min Stock: {item.minStock} {item.unit}</p>
                            <p>Max Stock: {item.maxStock} {item.unit}</p>
                            <p>Category: {item.category}</p>
                            <div className="flex gap-2 mt-2">
                                <Button
                                    label={`Add to Sysco ($${item.syscoPrice})`}
                                    onClick={() => handleAddToCart(item, 'Sysco')}
                                    style={{ backgroundColor: "blue", color: "white" }}
                                />
                                <Button
                                    label={`Add to US Foods ($${item.usFoodsPrice})`}
                                    onClick={() => handleAddToCart(item, 'USFoods')}
                                    style={{ backgroundColor: "green", color: "white" }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}