"use client"
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ButtonGroup from "../components/Elements/ButtonGroup";
import Button from "../components/Elements/Button";
import Kanban from "../components/PrepDash/DailyPrep/Kanban";
import { getDailyList } from '../util/data';
import { setPrepSearchTerm } from "@/redux/features/search/searchSlice";
import { useDispatch } from "react-redux";


// TYPES ***************
import Category from "../types/models/Category";
import PrepListItem from "../util/data";


// Fetch function for categories
const fetchCategories = async (): Promise<Category[]> => {
    const response = await axios.get<Category[]>("http://localhost:3000/categories");
    return response.data;
};

// Adjust fetch function to ensure it always returns an array
// const fetchDailyPrepItems = (): DailyPrepItem[] => {
//     const items = fetchPrepItemCards();
//     if (items) {
//         return items;
//     } else {
//         return []; // Ensure it always returns an array
//     }
// };

export default function PrepContainer() {
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

    const { data: prepItems = [], isLoading: isPrepLoading, isError: isPrepError } = useQuery<PrepListItem[]>({
        queryKey: ["prepItems"],
        queryFn: getDailyList,
    });
    const { data: categories = []} = useQuery<Category[]>({
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
    };

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
                    prepItems={prepItems.map(item => ({
                        ...item,
                        note: "", // Add default or fetched note
                        restaurant_id: 0, // Add default or fetched restaurant_id
                        date: new Date().toISOString() // Add default or fetched date
                    }))} // Pass updated prep items
                    category={selectedCategory?.id} // Filter by selected category
                />
            </div>
            }
        </div>
    );
}