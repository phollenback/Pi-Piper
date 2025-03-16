export interface Category {
    categoryId: number;
    categoryName: string;
    restaurantId?: number;
    description?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface CategoryTab extends Category {
    categoryType: 'ingredients' | 'prep_items';
}

// Adapter for transforming Category data
export const categoryAdapter = {
    toSelectBoxOptions: (categories: (Category | CategoryTab)[] = []) => {
        return categories.map((category) => ({
            label: category.categoryName,
            value: category.categoryId,
            type: 'categoryType' in category ? category.categoryType : undefined
        }));
    }
};
