"use client"
import { useState } from "react";
import Heading from "@/app/components/ManagerDash/PrepManager/Heading";
import { fetchAllPrepItems, fetchCategories } from "@/app/util/actions";
import { useQuery } from "@tanstack/react-query";
import ManagementTable from "@/app/components/ManagerDash/PrepManager/ManagmentTable";
import PrepItem from "@/app/types/models/PrepItem";
import Category from "@/app/types/models/Category";

const fetchPrepItems = () => {
    return fetchAllPrepItems(1); // Assuming 1 is the restaurantId
};

const fetchAllCategories = () => {
    return fetchCategories(); 
};

export default function PrepManagerContainer() {
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [, setSelectedSection] = useState(0);
    const { data: prepItems = []} = useQuery<PrepItem[]>({
        queryKey: ["prepItems"],
        queryFn: fetchPrepItems,
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

    return (
        <>
            <Heading setSection={handleSectionSelect} setSelectedCategory={handleCategorySelect} categories={categories} selectedCategory={selectedCategory} />
            <ManagementTable list={prepItems} category={selectedCategory} />
        </>
    );
}