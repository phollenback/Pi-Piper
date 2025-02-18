export default interface Category {
    category_id: number;
    category_name: string;
    category_type: string;
    description: string;
}

// Adapter for transforming Category data
export const categoryAdapter = {
    toSelectBoxOptions: (categories: Category[] = []) => {
        return categories.map((category) => ({
            label: category.category_name,
            value: category.category_id,
        }));
    }
};