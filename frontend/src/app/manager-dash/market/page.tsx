'use client'
import { fetchIngredientPricing } from "../../util/actions";
import SearchInput from "../../components/Elements/SearchInput";
import { useEffect, useState } from "react";
import IngredientDetails from "@/app/types/models/IngredientDetails";
import DailySuggestions from "@/app/components/ManagerDash/Market/DailySuggestions";
import { fetchCriticals } from '@/app/util/actions';
import MarketList from "@/app/components/ManagerDash/Market/MarketList";
import Link from "next/link";
import Button from "@/app/components/Elements/Button";
import { useDispatch } from "react-redux";
import { logCarts } from "@/redux/features/cart/cartSlice"
interface Suggestion {
    ingredient_id: number;
    ingredient_name: string;
}

const getCriticals = async (): Promise<Suggestion[]> => {
    return await fetchCriticals(1);
}

const getAllIngredients = async (): Promise<IngredientDetails[]> => {
    return await fetchIngredientPricing(1);
}

export default function MarketContainer() {
    const dispatch = useDispatch();
    const [suggItems, setSuggItems] = useState<IngredientDetails[]>([]);
    const [ingredients, setIngredients] = useState<IngredientDetails[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        const fetchIngredients = async () => {
            const ing = await getAllIngredients();
            setIngredients(ing);
        };
        fetchIngredients();
    }, []);

    useEffect(() => {
        const fetchSuggestions = async () => {
            const suggestions = await getCriticals();
            const matchedItems = ingredients.filter(ingredient => 
                suggestions.some(suggestion => 
                    suggestion.ingredient_name.toLowerCase() === ingredient.ingredientName.toLowerCase()
                )
            );
            setSuggItems(matchedItems);
        };

        if (ingredients.length > 0) {
            fetchSuggestions();
        }
    }, [ingredients]);

    const handleSearch = (query: string) => {
        setSearchTerm(query);
    }

    const handleCartClick = () => {
        dispatch(logCarts());
    }
    const filteredIngredients = ingredients.filter(ingredient => 
        ingredient.ingredientName.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !suggItems.some(suggestion => suggestion.ingredientId === ingredient.ingredientId)
    );

    return (
        <div className="flex flex-col items-center p-6">
            <div className="flex items-center mb-4 w-full justify-between">
                <h1 className="text-3xl font-bold pl-12"><i>Provider Market</i></h1>
                <Button
                    label="view cart."
                    onClick={handleCartClick}
                    style={{
                        backgroundColor: "black",
                        color: "white",
                    }}
                />
                <Link href="/manager-dash/market/cart"><i>View Cart</i></Link>
                <SearchInput 
                    placeholder="Search..."
                    onSearch={handleSearch}
                    error={searchTerm ? "" : "Please enter a search term."}
                />
            </div>
            <div className="mt-4 w-full flex justify-center border-2 border-black bg-zinc-100">
                    <DailySuggestions 
                        list={suggItems}
                    />
            </div>
            <div className="mt-4 w-full flex justify-center border-2 border-black bg-zinc-100">
                <MarketList 
                    list={filteredIngredients}
                />
            </div>
        </div>
    );
}