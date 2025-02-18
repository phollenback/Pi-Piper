import React from "react";
import Category from "@/app/types/models/Category";
import { fetchCategories } from "@/app/util/actions";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import CreatePrepItem from "./Creator/PrepItem/CreatePrepItem";
import CreateIngredient from "./Creator/Ingredient/CreateIngredient";

interface CreateItemProps {
  selectedSection: string;
}

const getCategories = () => {
  const cat = fetchCategories();
  return cat;
}

// Form component for creating new prep items or ingredients with department and category selection
const CreateItem: React.FC<CreateItemProps> = ({ selectedSection }: CreateItemProps) => {
  const queryClient = useQueryClient();

  // Fetch and cache categories data
  const { data: categories = [] } = useQuery<Category[]>({
      queryKey: ["categories"],
      queryFn: getCategories,
  });

  // Avoid setting query data if it hasn't changed
  if (!queryClient.getQueryData(["categories"])) {
    queryClient.setQueryData(["categories"], categories);
  }

  return (
    <>
      {selectedSection === "prepitem" ? (
        <CreatePrepItem />
      ) : (
        <CreateIngredient />
      )}
    </>
  );
};

export default CreateItem;