'use client'
import { useEffect, useState, useCallback } from "react";
import Heading from "@/components/ManagerDash/PrepManager/Heading";
import { getPrepItems, fetchCategories } from "../../actions/prepItemActions";
import { getIngredients } from "../../actions/ingredientActions";
import { useQuery } from "@tanstack/react-query";
import ManagementTable from "@/components/ManagerDash/PrepManager/ManagmentTable";
import { PrepItem } from "@/app/types/models/PrepItem";
import {Category} from "@/app/types/models/Category";
import Ingredient from "@/app/types/models/Ingredient";
import CreateItem from "@/components/ManagerDash/PrepManager/CreateItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/lib/store";

// PrepManagerContainer component: Main container for prep item management.
export default function PrepManagerContainer() {
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [selectedGroup, setSelectedGroup] = useState<number | null>(null);
    const [selectedSection, setSelectedSection] = useState<string>("prepitem"); // "prepitem" for prep items, "ingredients" for ingredients.
    const restaurantId = useSelector((state: RootState) => state.auth.restaurantId) || 1;

    // Move fetch functions inside the component and use restaurantId directly
    const fetchPrepItems = useCallback(async () => {
        console.log('Fetching prep items for restaurant ID:', restaurantId);
        return getPrepItems(restaurantId);
    }, [restaurantId]);

    const fetchIngredients = useCallback(async () => {
        console.log('Fetching ingredients for restaurant ID:', restaurantId);
        return getIngredients(restaurantId);
    }, [restaurantId]);

    const fetchAllCategories = useCallback(async () => {
        try {
            console.log('Fetching categories for restaurant ID:', restaurantId);
            return await fetchCategories(restaurantId);
        } catch (error) {
            console.error('Failed to fetch categories:', error);
            return []; // Return empty array instead of throwing error
        }
    }, [restaurantId]);

    const { data: prepItems = [] } = useQuery<PrepItem[]>({
        queryKey: ["prepItems", restaurantId],
        queryFn: fetchPrepItems,
    });
    
    const { data: ingredients = [] } = useQuery<Ingredient[]>({
        queryKey: ["ingredients", restaurantId],
        queryFn: fetchIngredients,
    });

    const { data: categories = [] } = useQuery<Category[]>({
        queryKey: ["categories", restaurantId],
        queryFn: fetchAllCategories,
        retry: 1, // Only retry once
        retryDelay: 1000, // Wait 1 second between retries
        staleTime: 1000 * 60 * 5, // 5 minutes
    });

    // Handles section selection (prep items or ingredients).
    const handleSectionSelect = () => {
        const newSection = selectedSection === "prepitem" ? "ingredients" : "prepitem";
        console.log('Switching to Section:', newSection); // Log current section
        setSelectedSection(newSection);
    };

    // Handles category selection.
    const handleCategorySelect = (cat: number | null) => {
        setSelectedCategory(cat);
    };

    // Handles group selection.
    
    const handleGroupSelect = (group: number | null) => {
        setSelectedGroup(group);
    };

    useEffect(() => {
        console.log("ingredients", ingredients);
    }, []);
    useEffect(() => {
        console.log("Selected Section changed:", selectedSection);
    }, [selectedSection]);
    return (
        <main className="container mx-auto px-4">
            {/* Header section */}
            <header className="text-center py-4">
                <h1 className="font-bold text-4xl md:text-6xl text-black">Republic Pi Memory</h1>
            </header>

            {/* Top section - Filtering and creator */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 mt-8">
                {/* Left column - Filtering */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <Heading 
                        setSection={handleSectionSelect} 
                        setSelectedCategory={handleCategorySelect} 
                        categories={categories} 
                        selectedCategory={selectedCategory} 
                        selectedGroup={selectedGroup}
                        setSelectedGroup={handleGroupSelect}
                    />
                </div>

                {/* Right column - Create item section */}
                <div className="w-full max-w-md">
                    <CreateItem 
                        selectedSection={selectedSection}
                    />
                </div>
            </div>

            {/* Management Table section - Full width */}
            <section className="mt-8">
                <ManagementTable 
                    activeList={selectedSection === "prepitem" ? prepItems : ingredients} 
                    selectedCategory={selectedCategory}
                    activeSection={selectedSection}
                    selectedGroup={selectedGroup}
                />
            </section>
        </main>
    );
}