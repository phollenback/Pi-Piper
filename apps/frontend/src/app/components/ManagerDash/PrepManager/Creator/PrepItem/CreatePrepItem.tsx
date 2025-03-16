import React, { useState } from "react";
import SelectBox from "@/app/components/Elements/ui/SelectBox";
import  { Category, categoryAdapter } from "@/app/types/models/Category";
import Department, { departmentAdapter } from "@/app/types/models/Department";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { fetchDepartments } from "@/app/actions/departmentActions";
import { createPrepItem } from "./actions";

type ItemFields = {
    name: string;
    description: string;
    kitchen_department_id: number;
    category: number;
}

// Fetches departments for the restaurant
const getDepartments = () => {
  const dep = fetchDepartments(1);
  return dep;
}

export const CreatePrepItem = () => {
    const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<ItemFields>();

    const handleActionSubmit = async (data: ItemFields) => {
        try {
            const restaurantId = 1; // Replace with actual restaurant ID
            const response = await createPrepItem(data, restaurantId);
            console.log('Prep Item created successfully:', response);
        } catch (error) {
            console.error('Error creating prep item:', error);
        }
    }

    const onSubmit: SubmitHandler<ItemFields> = (data) => {
        data.category = Number(selectedCategory); // Append the category number to the form data
        data.kitchen_department_id = Number(selectedDepartment); // Append the department number to the form data
        console.log(data);
        handleActionSubmit(data);
    }

    // Fetch and cache departments data
    const { data: departments = [] } = useQuery<Department[]>({
        queryKey: ["departments"],
        queryFn: getDepartments,
    });

    const qc = useQueryClient();
    const categories = qc.getQueryData(["categories"]) as Category[] || []; 

    const categoryOptions = categoryAdapter.toSelectBoxOptions(categories);
    const departmentOptions = departmentAdapter.toSelectBoxOptions(departments);

    const [selectedCategory, setSelectedCategory] = useState<string | number>("");
    const [selectedDepartment, setSelectedDepartment] = useState<string | number>("");

    const handleCategoryChange = (value: string | number) => {
        setSelectedCategory(value);
        setValue("category", Number(value)); // Update the form value for category
    }

    const handleDepartmentChange = (value: string | number) => {
        setSelectedDepartment(value);
        setValue("kitchen_department_id", Number(value)); // Update the form value for kitchen_department_id
    }

    return (
        <div className="m-8">
            <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
                <h1 className="text-center text-3xl font-bold mb-6">
                    <i>Create Prep Item</i>
                </h1>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input 
                            {...register("name", {
                                required: "Name is required.",
                                minLength: 2,
                                maxLength: 50,
                            })} 
                            type="text" 
                            placeholder="Enter new name" 
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    </div>
                    <div>
                        <input 
                            {...register("description", {
                                required: "Description is required.",
                            })} 
                            type="text" 
                            placeholder="Enter description" 
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    {errors.description && <p className="text-red-500">{errors.description.message}</p>}
                    </div>
                    <div>
                        <SelectBox 
                            value={selectedCategory} 
                            onChange={handleCategoryChange} 
                            options={categoryOptions} 
                        />
                    </div>
                    <div>
                        <SelectBox 
                            value={selectedDepartment} 
                            onChange={handleDepartmentChange} 
                            options={departmentOptions} 
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

export default CreatePrepItem;