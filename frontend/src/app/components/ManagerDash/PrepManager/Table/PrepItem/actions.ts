import { PrepItem } from "@/app/types/models/PrepItem";

export const editPrepItem = async (data: PrepItem, restaurantId: number) => {
    const res = await fetch(`http://localhost:3000/prepitems/${restaurantId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        throw new Error('Failed to edit prep item');
    }

    return res.json();
}

export const deletePrepItem = async (prepItemId: number, restaurantId: number) => {
    const res = await fetch(`http://localhost:3000/prepitems/${restaurantId}/${prepItemId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
        throw new Error('Failed to delete prep item');
    }

    return res.json();
}