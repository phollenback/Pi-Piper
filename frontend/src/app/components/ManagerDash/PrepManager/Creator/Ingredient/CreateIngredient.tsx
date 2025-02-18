import React, { useState } from "react";
import SelectBox from "@/app/components/Elements/ui/SelectBox";
import Category, { categoryAdapter } from "@/app/types/models/Category";
import { useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";

type IngredientFields = {
    ingredient_name: string;
    unit_of_measure: string;
    cost_per_unit: number;
    ingredient_category: number;
}

export const CreateIngredient = () => {
    const { register, handleSubmit } = useForm<IngredientFields>();

    const onSubmit: SubmitHandler<IngredientFields> = (data) => {
        console.log(data);
    }

    const qc = useQueryClient();
    const categories = qc.getQueryData(["categories"]) as Category[] || []; 

    const categoryOptions = categoryAdapter.toSelectBoxOptions(categories);

    const [selectedCategory, setSelectedCategory] = useState<string | number>("");

    const handleCategoryChange = (value: string | number) => {
        setSelectedCategory(value);
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
                            {...register("ingredient_name")} 
                            type="text" 
                            placeholder="Enter ingredient name" 
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <input 
                            {...register("unit_of_measure")} 
                            type="text" 
                            placeholder="Enter unit of measure" 
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <input 
                            {...register("cost_per_unit", { valueAsNumber: true })} 
                            type="number" 
                            placeholder="Enter cost per unit" 
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
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
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateIngredient;