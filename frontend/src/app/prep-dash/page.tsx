"use client"
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ButtonGroup from "../components/Elements/ButtonGroup";
import Button from "../components/Elements/Button";
import Kanban from "../components/PrepDash/DailyPrep/Kanban";
import { setPrepSearchTerm } from "@/redux/features/search/searchSlice";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../util/actions";
import { fetchDailyList } from "../util/actions";
import Category from "../types/models/Category";
import PrepListItem from "../types/models/PrepListItem";
import { getButtonColor } from "../util/data";

// Container component managing prep item categories and kanban board display
export default function PrepContainer() {
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

    // Fetch and cache daily prep items
    const { data: prepItems = [], isLoading } = useQuery<PrepListItem[]>({
        queryKey: ["prepItems"],
        queryFn: fetchDailyList
    })
   
    // Fetch and cache categories
    const { data: categories = []} = useQuery<Category[]>({
        queryKey: ["categories"],
        queryFn: fetchCategories,
    });

    // Update selected category filter
    const handleButtonClick = (cat : Category) => {
        if (cat) {
            setSelectedCategory(cat);
        }
    };

    // Reset category filter and search term
    const handleResetClick = () => {
        setSelectedCategory(null);
        dispatch(setPrepSearchTerm(""));
    };

    if(isLoading) {
        return(
            <div>loading lists...</div>
        )
    }
    return (
        <div className="pt-4">
            <div className="flex items-center justify-between">
                <div className="flex-1">
                    <ButtonGroup
                        items={categories}
                        buttonWidth="200px"
                        buttonHeight="80px"
                        onButtonClick={handleButtonClick}
                        selectedButton={selectedCategory?.category_name}
                        getButtonColor={getButtonColor}
                    />
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
                    prepItems={prepItems}
                    category={selectedCategory?.category_id}
                />
            </div>
        </div>
    );
}