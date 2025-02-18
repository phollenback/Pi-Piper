'use client'
import { useEffect, useState } from "react";
import Heading from "@/app/components/ManagerDash/PrepManager/Heading";
import { fetchAllIngredients, fetchAllPrepItems, fetchCategories } from "@/app/util/actions";
import { useQuery } from "@tanstack/react-query";
import ManagementTable from "@/app/components/ManagerDash/PrepManager/ManagmentTable";
import { PrepItem } from "@/app/types/models/PrepItem";
import Category from "@/app/types/models/Category";
import Ingredient from "@/app/types/models/Ingredient";
import CreateItem from "@/app/components/ManagerDash/PrepManager/CreateItem";

// Fetches all prep items for a given restaurant ID.
const fetchPrepItems = () => {
    return fetchAllPrepItems(1); 
};

// Fetches all ingredients for a given restaurant ID.
const fetchIngredients = () => {
    return fetchAllIngredients(1); 
};

// Fetches all categories.
const fetchAllCategories = () => {
    return fetchCategories(); 
};

// PrepManagerContainer component: Main container for prep item management.
export default function PrepManagerContainer() {
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null); // Selected category ID.
    const [selectedSection, setSelectedSection] = useState<string>("prepitem"); // "prepitem" for prep items, "ingredients" for ingredients.
    const { data: prepItems = []} = useQuery<PrepItem[]>({
        queryKey: ["prepItems"],
        queryFn: fetchPrepItems,
    });
    
    const { data: ingredients = []} = useQuery<Ingredient[]>({
        queryKey: ["ingredients"],
        queryFn: fetchIngredients,
    });

    const { data: categories = []} = useQuery<Category[]>({
        queryKey: ["categories"],
        queryFn: fetchAllCategories,
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


    useEffect(() => {
        console.log("ingredients", ingredients);
    }, []);
    useEffect(() => {
        console.log("Selected Section changed:", selectedSection);
    }, [selectedSection]);
    return (
        <>
            {/* Flex container for the three columns */}
            <div className="flex justify-center items-center gap-8">
                {/* Republic Pi Memory header (1st column) */}
                <div className="w-[100%] text-center h-full flex items-center justify-center">
                    <h1 className="font-bold text-6xl text-black">Republic Pi Memory</h1>
                </div>
    
                {/* Heading / filtering (2nd column) */}
                <div className="w-[100%] flex justify-right pl-12 border-l-8 border-r-8 border-black">
                    <Heading 
                        setSection={handleSectionSelect} 
                        setSelectedCategory={handleCategorySelect} 
                        categories={categories} 
                        selectedCategory={selectedCategory} 
                    />
                </div>
    
                {/* Create new item (3rd column) */}
                <div className="w-[100%]">
                    <CreateItem 
                        selectedSection={selectedSection}
                    />
                </div>
            </div>
    
            {/* Management Table */}
            <div className="">
                <ManagementTable 
                    activeList={selectedSection === "prepitem" ? prepItems : ingredients} 
                    category={selectedCategory} 
                    activeSection={selectedSection}
                />
            </div>
        </>
    );
}