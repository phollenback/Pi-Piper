export default interface PrepListItem {
    prep_list_id: number;
    name: string;
    description: string;
    note: string;
    quantity: number;
    unit: string;
    status: "complete" | "todo" | "in-progress"; 
    category: number;
    restaurant_id: number;
    date: string;
}