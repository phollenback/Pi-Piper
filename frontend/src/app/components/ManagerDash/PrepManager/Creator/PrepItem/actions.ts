type ItemFields = {
    name: string;
    description: string;
    kitchen_department_id: number;
    category: number;
}

export const createPrepItem = async (data: ItemFields, restaurantId: number) => {
    const res = await fetch(`/api/prepitems/${restaurantId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error('Failed to create prep item');
    }

    return res.json();
}