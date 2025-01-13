"use client"
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ButtonGroup from "../components/Elements/ButtonGroup";
import Button from "../components/Elements/Button";
import Kanban from "../components/PrepDash/DailyPrep/Kanban";
import { fetchPrepItemCards } from "../util/data";
import axios from "axios";
import { setPrepSearchTerm } from "@/redux/features/search/searchSlice";
import { useDispatch } from "react-redux";

interface DailyPrepItem {
    prep_list_id: number;
    name: string;
    description: string;
    quantity: number;
    unit: string;
    category: number;
    status: string;
}

interface Category {
    id: number;
    name: string;
    description: string;
}

// Fetch function for categories
const fetchCategories = async (): Promise<Category[]> => {
    const response = await axios.get<Category[]>("http://localhost:3000/categories/categories");
    return response.data;
};

// Adjust fetch function to ensure it always returns an array
const fetchDailyPrepItems = (): DailyPrepItem[] => {
    const items = fetchPrepItemCards();
    if (items) {
        return items;
    } else {
        return []; // Ensure it always returns an array
    }
};

export default function PrepContainer() {
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

    const { data: prepItems = [], isLoading: isPrepLoading, isError: isPrepError } = useQuery<DailyPrepItem[]>({
        queryKey: ["prepItems"],
        queryFn: fetchDailyPrepItems,
    });
    const { data: categories = [], isLoading, isError, refetch } = useQuery<Category[]>({
        queryKey: ["categories"],
        queryFn: fetchCategories,
    });

    const getButtonColor = (name: string) => {
        switch (name) {
            case "Slicer":
                return "red";
            case "Pantry":
                return "green";
            case "Oven":
                return "grey";
            case "Grill":
                return "blue";
            case "Cold Prep":
                return "orange";
            case "All":
                return "black";
            default:
                return "blue";
        }
    };

    const handleButtonClick = (cat : Category) => {
        if (cat) {
            setSelectedCategory(cat);
        }
    };

    const handleResetClick = () => {
        setSelectedCategory(null); // Reset selected category
        dispatch(setPrepSearchTerm("")); // Clear the search term
        refetch(); // Refetch data to refresh the UI
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (isError) {
        return <p>ERROR: Cannot fetch data</p>;
    }

    return (
        <div className="pt-4">
            {/* Button Group and Reset Button */}
            <div className="flex items-center justify-between">
                <div className="flex-1">
                    <ButtonGroup
                        items={categories} // Pass category objects to ButtonGroup
                        buttonWidth="200px" // Set button width
                        buttonHeight="80px" // Set button height
                        onButtonClick={handleButtonClick} // Handle button clicks
                        selectedButton={selectedCategory?.name} // Pass the selected category
                        getButtonColor={getButtonColor} // Pass color function
                    />
                </div>
                <div className="mr-10">
                    <Button
                        label="Reset"
                        onClick={handleResetClick} // Reset button logic
                        size="large"
                        style={{
                            backgroundColor: "rgb(221, 79, 79)",
                            border: "none",
                            cursor: "pointer",
                        }}
                    />
                </div>
            </div>

            {/* Kanban Section */}
            {isPrepLoading ? <p>Prep Lists Loading...</p> 
            : isPrepError ? <p>Prep List Error...</p> 
            :
            <div className="mt-4">
                <Kanban
                    prepItems={prepItems} // Pass updated prep items
                    category={selectedCategory?.id} // Filter by selected category
                />
            </div>
            }
        </div>
    );
}