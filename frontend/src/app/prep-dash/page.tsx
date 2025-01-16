"use client"
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import ButtonGroup from "../components/Elements/ButtonGroup";
import Button from "../components/Elements/Button";
import Kanban from "../components/PrepDash/DailyPrep/Kanban";
import { setPrepSearchTerm } from "@/redux/features/search/searchSlice";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../util/actions";

// TYPES ***************
import Category from "../types/models/Category";
import PrepListItem from "../types/models/PrepListItem";


export default function PrepContainer() {
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [prepItems, setPrepItems] = useState<PrepListItem[]>([]);
   
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

    useEffect(() => {
        const fetchPrepItems = async () => {
            try {
                const response = await axios.get<PrepListItem[]>("http://localhost:3000/prepitems/daily/1");
                setPrepItems(response.data);
                console.log("Prep Items", response.data)
            } catch (error) {
                console.error("Error fetching prep items:", error);
            }
        };

        fetchPrepItems();
    }, []);

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
                        selectedButton={selectedCategory?.category_name} // Pass the selected category
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
            <div className="mt-4">
                <Kanban
                    prepItems={prepItems} // Pass prep items directly
                    category={selectedCategory?.category_id} // Filter by selected category
                />
            </div>
        </div>
    );
}