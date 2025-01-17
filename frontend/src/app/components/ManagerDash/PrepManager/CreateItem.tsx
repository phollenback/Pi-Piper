import React, { useEffect, useState } from "react";
import Button from "../../Elements/Button";
import InputField from "../../Elements/login/InputField";
import PrepItem from "@/app/types/models/PrepItem"; // Assuming you have this interface
import Department from "@/app/types/models/Department";
import Category from "@/app/types/models/Category";
import { fetchDepartments } from "@/app/util/actions";
import { useQuery } from "@tanstack/react-query";
import SelectBox from "../../Elements/ui/SelectBox";

interface CreateItemProps {
  setItem: (item: PrepItem) => void;
  categories: Category[]; // Ensure this is passed correctly
}

const getDepartments = () => {
  const dep = fetchDepartments(1);
  return dep;
}

const CreateItem: React.FC<CreateItemProps> = ({ setItem, categories }: CreateItemProps) => {
  // Use a single state object to manage the PrepItem attributes
  const [formData, setFormData] = useState<PrepItem>({
    prep_item_id: 0, // Assuming the ID is generated or handled elsewhere
    prep_item_name: "",
    description: "",
    category: 1,
    kitchen_department_id: 0,
  });

  // Initialize categories as an empty array
  const [cat, setCategories] = useState<Category[]>([]);

  // Fetch departments using react-query
  const { data: departments = [] } = useQuery<Department[]>({
    queryKey: ["departments"],
    queryFn: getDepartments,
  });

  // Ensure that `cat` is always an array before calling `map()`
  const categoryOptions = Array.isArray(cat) ? cat.map((category: Category) => ({
    label: category.category_name,
    value: category.category_id,
  })) : [];

  const departmentOptions = departments.map((department: Department) => ({
    label: department.department_name,
    value: department.kitchen_department_id,
  }));

  // Handle input field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value, // Dynamically update the field based on the input's id
    }));
  };

  const handleSelectChange = (value: string | number, field: "category" | "kitchen_department_id") => {
    const numericValue = typeof value === "string" ? Number(value) : value; // Convert value to a number if it's a string
    setFormData((prevData) => ({
      ...prevData,
      [field]: numericValue,
    }));
  };

  // Handle form submission
  const handleSubmitClick = () => {
    setItem(formData); // Pass the new PrepItem to the parent component
    console.log(formData); // For debugging
  };

  // Update categories when they are passed as props
  useEffect(() => {
    console.log(categories);
    setCategories(categories); // Update the `cat` state with the categories prop
  }, [categories]);

  return (
    <>
      <div className="w-full">
        <h1 className="text-center text-3xl font-bold mb-2">
          <i>Create Prep Item</i>
        </h1>
        <div className="flex w-full gap-16">
          <div className="flex-initial w-50 ml-10">
            <InputField
              id={"prep_item_name"}
              type={"text"}
              value={formData.prep_item_name}
              onChange={handleChange}
              placeholder="Enter new name"
            />
          </div>

          <div className="flex-initial w-50">
            <InputField
              id={"description"}
              type={"text"}
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
            />
          </div>
        </div>

        <div className="mt-4 ml-10">
          <SelectBox
            value={formData.kitchen_department_id}
            onChange={(e) => handleSelectChange(e, "kitchen_department_id")}
            options={departmentOptions}
            placeholder="Select Department"
          />
        </div>

        <div className="mt-4 ml-10">
          <SelectBox
            value={formData.category}
            onChange={(e) => handleSelectChange(e, "category")}
            options={categoryOptions}
            placeholder="Select Category"
          />
        </div>

        {/* Submit button */}
        <div className="ml-10 my-5">
          <Button
            label={"Submit"}
            onClick={handleSubmitClick}
            size="medium"
            style={{
              backgroundColor: "green",
              color: "white",
              width: "100%",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CreateItem;