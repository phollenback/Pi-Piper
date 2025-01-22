'use client'
import { useState } from "react";
import Heading from "@/app/components/ManagerDash/PrepManager/Heading";
import { fetchAllIngredients, fetchAllPrepItems, fetchCategories } from "@/app/util/actions";
import { useQuery } from "@tanstack/react-query";
import ManagementTable from "@/app/components/ManagerDash/PrepManager/ManagmentTable";
import PrepItem from "@/app/types/models/PrepItem";
import Category from "@/app/types/models/Category";
import Ingredient from "@/app/types/models/Ingredient";
import CreateItem from "@/app/components/ManagerDash/PrepManager/CreateItem";

const fetchPrepItems = () => {
    return fetchAllPrepItems(1); // Assuming 1 is the restaurantId
};

const fetchIngredients = () => {
    return fetchAllIngredients(1); 
};

const fetchAllCategories = () => {
    return fetchCategories(); 
};

export default function PrepManagerContainer() {
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [selectedSection, setSelectedSection] = useState(0);
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

    const handleSectionSelect = (choice: string) => {
        if (choice === "prepitem") setSelectedSection(0);
        else if (choice === "ingredient") setSelectedSection(1);
    };

    const handleCategorySelect = (cat: number | null) => {
        setSelectedCategory(cat);
    };

    const handleCreateSubmit = (item: PrepItem | Ingredient) => {
        console.log(item);
    }

    return (
        <>
            {/* Flex container for the three columns */}
            <div className="flex justify-center items-center gap-16">
                {/* Republic Pi Memory header (1st column) */}
                <div className="w-[25%] text-center h-full flex items-center justify-center">
                    <h1 className="font-bold text-6xl text-black">Republic Pi Memory</h1>
                </div>
    
                {/* Heading / filtering (2nd column) */}
                <div className="w-[50%] flex justify-right pl-12 border-l-8 border-r-8 border-black">
                    <Heading 
                        setSection={handleSectionSelect} 
                        setSelectedCategory={handleCategorySelect} 
                        categories={categories} 
                        selectedCategory={selectedCategory} 
                    />
                </div>
    
                {/* Create new item (3rd column) */}
                <div className="w-[25%] items-left justify-left">
                    <CreateItem setItem={handleCreateSubmit} categories={categories}/>
                </div>
            </div>
    
            {/* Management Table */}
            <div className="">
                <ManagementTable 
                    activeList={selectedSection === 0 ? prepItems : ingredients} 
                    category={selectedCategory} 
                    activeSection={selectedSection}
                />
            </div>
        </>
    );
}