type IngredientFields = {
    ingredient_name: string;
    unit_of_measure: string;
    cost_per_unit: number;
    ingredient_category: number;
}

export const createIngredient = async (data: IngredientFields, restaurantId :number) => {
    const res = await fetch(`http://localhost:3000/ingredients/${restaurantId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    console.log(res);

    return res.json();
}