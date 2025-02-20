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
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [selectedGroup, setSelectedGroup] = useState<number | null>(null);
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
            {/* Header section with responsive columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8">
                {/* Brand header */}
                <header className="text-center py-4">
                    <h1 className="font-bold text-4xl md:text-6xl text-black">Republic Pi Memory</h1>
                </header>

                {/* Filtering section */}
                <div className="border-l-0 md:border-l-8 md:border-r-8 border-black px-4 md:px-8">
                    <Heading 
                        setSection={handleSectionSelect} 
                        setSelectedCategory={handleCategorySelect} 
                        categories={categories} 
                        selectedCategory={selectedCategory} 
                        selectedGroup={selectedGroup}
                        setSelectedGroup={handleGroupSelect}
                    />
                </div>

                {/* Create item section */}
                <div className="w-full">
                    <CreateItem 
                        selectedSection={selectedSection}
                    />
                </div>
            </div>

            {/* Management Table section */}
            <section className="mt-8">
                <ManagementTable 
                    activeList={selectedSection === "prepitem" ? prepItems : ingredients} 
                    category={selectedCategory} 
                    activeSection={selectedSection}
                    selectedGroup={selectedGroup}
                />
            </section>
        </main>
    );
}