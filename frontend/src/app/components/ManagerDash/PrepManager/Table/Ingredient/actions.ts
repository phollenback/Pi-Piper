import Ingredient from "@/app/types/models/Ingredient";

export const editIngredient = async (data: Ingredient, restaurantId: number) => {
    const res = await fetch(`http://localhost:3000/ingredients/${restaurantId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error('Failed to edit ingredient');
    }

    return res.json();
};

export const deleteIngredient = async (ingredientId: number, restaurantId: number) => {
    const res = await fetch(`http://localhost:3000/ingredients/${restaurantId}/${ingredientId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
        throw new Error('Failed to delete ingredient');
    }

    return res.json();
}