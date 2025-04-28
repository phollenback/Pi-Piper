"use client"
import React, { useState } from "react";
import ButtonGroup from "@/components/Elements/ButtonGroup";
import Button from "@/components/Elements/Button";
import Kanban from "@/components/PrepDash/DailyPrep/Kanban";
import { fetchCategories, fetchDailyList } from "@/app/actions/prepItemActions";
import {Category} from "@/app/types/models/Category";
import { getButtonColor } from "../util/data";
import { PrepListItem } from "@/app/types/models/PrepListItem";

import { useQuery } from "@tanstack/react-query";

import { useDispatch, useSelector } from "react-redux";
import { setPrepSearchTerm } from "@/features/redux/features/search/searchSlice";
import { RootState } from "@/features/redux/lib/store";

// Container component managing prep item categories and kanban board display
export default function PrepContainer() {
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    // selects the search term from the search slice (if it exists)
    const { prepSearchTerm } = useSelector((state: RootState) => state.search);
    // selects the restaurant id from the auth slice (to be used in the fetch)
    const restaurantId = useSelector((state: RootState) => state.auth.restaurantId) || 3;
    // Fetch and cache daily prep items
    const { data: dailyPrepList = [], 
        isLoading, 
        refetch
    } = useQuery<PrepListItem[]>({
        queryKey: ['prepList', restaurantId],
        queryFn: () => fetchDailyList(restaurantId),
        staleTime: 1000 * 60 * 5, // Data considered fresh for 5 minutes
    });

    // Filter items based on search term and category
    const filteredItems = dailyPrepList.filter(item => {
        const name = item.name || '';
        const description = item.description || '';
        
        const matchesSearch = name.toLowerCase().includes(prepSearchTerm.toLowerCase()) ||
                             description.toLowerCase().includes(prepSearchTerm.toLowerCase());

        const matchesCategory = selectedCategory === null || item.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    // Standardized category fetching
    const { data: categories = [], isLoading: categoriesLoading, error: categoriesError } = useQuery<Category[]>({
        queryKey: ['categories', restaurantId],
        queryFn: () => fetchCategories(restaurantId),
        enabled: !!restaurantId,
        staleTime: 1000 * 60 * 5
    });

    console.log('Categories:', categories); // Debug log
    console.log('Categories Error:', categoriesError); // Debug log

    // Update selected category filter
    const handleButtonClick = (cat: Category) => {
        console.log('Category clicked:', cat); // Debug log
        setSelectedCategory(prev => 
            prev === cat.categoryId ? null : cat.categoryId
        );
    };

    // Reset category filter and search term
    const handleResetClick = () => {
        setSelectedCategory(null);
        dispatch(setPrepSearchTerm(""));
        refetch();
    };

    if(isLoading || categoriesLoading) {
        return(
            <div>loading lists...</div>
        )
    }

    if(categoriesError) {
        return(
            <div className="text-red-500">Error loading categories: {categoriesError.message}</div>
        )
    }

    return (
        <div className="pt-4">
            <div className="flex items-center justify-between">
                <div className="flex-1">
                    {categories.length > 0 ? (
                        <ButtonGroup
                            items={categories}
                            buttonWidth="150px"
                            buttonHeight="40px"
                            onButtonClick={handleButtonClick}
                            selectedButton={selectedCategory}
                            getButtonColor={getButtonColor}
                        />
                    ) : (
                        <div className="text-center text-gray-500">No categories available</div>
                    )}
                </div>
                <div className="mr-10">
                    <Button
                        label="Reset"
                        onClick={handleResetClick}
                        size="large"
                        style={{
                            backgroundColor: "rgb(221, 79, 79)",
                            border: "none",
                            cursor: "pointer",
                        }}
                    />
                </div>
            </div>

            <div className="mt-4">
                <Kanban
                    prepItems={filteredItems}
                    category={selectedCategory}
                />
            </div>
        </div>
    );
}