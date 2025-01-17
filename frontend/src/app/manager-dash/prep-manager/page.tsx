"use client"
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
            {/* Flex container for Heading and CreateItem */}
            <div className="flex">
                {/* Heading / filtering (left side) */}
                <Heading 
                    setSection={handleSectionSelect} 
                    setSelectedCategory={handleCategorySelect} 
                    categories={categories} 
                    selectedCategory={selectedCategory} 
                />

                {/* Create new item (right side) */}
                <div className=""> {/* Added some margin to the left for spacing */}
                    <CreateItem setItem={handleCreateSubmit} categories={categories}/>
                </div>
            </div>

            {/* Management Table */}
            <ManagementTable 
                activeList={selectedSection === 0 ? prepItems : ingredients} 
                category={selectedCategory} 
                activeSection={selectedSection}
            />
        </>
    );
}