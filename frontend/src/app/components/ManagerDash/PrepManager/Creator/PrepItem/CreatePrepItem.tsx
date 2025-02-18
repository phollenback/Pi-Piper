import React, { useState } from "react";
import SelectBox from "@/app/components/Elements/ui/SelectBox";
import Category, { categoryAdapter } from "@/app/types/models/Category";
import Department, { departmentAdapter } from "@/app/types/models/Department";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { fetchDepartments } from "@/app/util/actions";

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
    const { register, handleSubmit } = useForm<ItemFields>();

    const onSubmit: SubmitHandler<ItemFields> = (data) => {
        console.log(data);
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
    }

    const handleDepartmentChange = (value: string | number) => {
        setSelectedDepartment(value);
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
                            {...register("name")} 
                            type="text" 
                            placeholder="Enter new name" 
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <input 
                            {...register("description")} 
                            type="text" 
                            placeholder="Enter description" 
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
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreatePrepItem;