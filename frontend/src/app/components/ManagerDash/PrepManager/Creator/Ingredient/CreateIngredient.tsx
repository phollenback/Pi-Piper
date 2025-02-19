import React, { useState } from "react";
import SelectBox from "@/app/components/Elements/ui/SelectBox";
import Category, { categoryAdapter } from "@/app/types/models/Category";
import { useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { createIngredient } from "./actions";

type IngredientFields = {
    ingredient_name: string;
    unit_of_measure: string;
    cost_per_unit: number;
    ingredient_category: number;
}

export const CreateIngredient = () => {
    const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<IngredientFields>();

    const handleActionSubmit = async (data: IngredientFields) => {
        console.log(data);
        try {
            const restaurantId = 1; // Replace with actual restaurant ID
            const response = await createIngredient(data, restaurantId);
            
            alert('Ingredient created successfully'); 
            console.log('Ingredient created successfully:', response);
        } catch (error) {
            alert('Error creating ingredient');
            console.error('Error creating ingredient:', error);
        }
    }

    const onSubmit: SubmitHandler<IngredientFields> = (data) => {
        console.log(data);
        data.ingredient_category = Number(selectedCategory); // Append the category number to the form data
        handleActionSubmit(data);
    }

    const qc = useQueryClient();
    const categories = qc.getQueryData(["categories"]) as Category[] || []; 

    const categoryOptions = categoryAdapter.toSelectBoxOptions(categories);

    const [selectedCategory, setSelectedCategory] = useState<string | number>("");

    const handleCategoryChange = (value: string | number) => {
        setSelectedCategory(value);
        setValue("ingredient_category", Number(value)); // Update the form value for ingredient_category
    }

    return (
        <div className="m-8">
            <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
                <h1 className="text-center text-3xl font-bold mb-6">
                    <i>Create Ingredient</i>
                </h1>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input 
                            {...register("ingredient_name", {
                                required: "Ingredient Name is required.",
                                minLength: 2,
                                maxLength: 50,
                            })} 
                            type="text" 
                            placeholder="Enter ingredient name" 
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    {errors.ingredient_name && <p className="text-red-500">{errors.ingredient_name.message}</p>}
                    </div>
                    <div>
                        <input 
                            {...register("unit_of_measure", {
                                required: "Unit Of Measurement is required.",
                            })} 
                            type="text" 
                            placeholder="Enter unit of measure" 
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    {errors.unit_of_measure && <p className="text-red-500">{errors.unit_of_measure.message}</p>}
                    </div>
                    <div>
                        <input 
                            {...register("cost_per_unit", { 
                                required: "Cost per unit is required.",
                                valueAsNumber: true 
                            })} 
                            type="number" 
                            placeholder="Enter cost per unit" 
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    {errors.cost_per_unit && <p className="text-red-500">{errors.cost_per_unit.message}</p>}
                    </div>
                    <div>
                        <SelectBox 
                            value={selectedCategory} 
                            onChange={handleCategoryChange} 
                            options={categoryOptions} 
                        />
                    </div>
                    <div>
                        <button 
                            type="submit" 
                            className="w-full p-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Creating...' : 'Create'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateIngredient;