export default interface IngredientDetails {
    ingredientId: number;
    ingredientName: string;
    syscoPrice: number;
    usFoodsPrice: number;
    last_date_ordered: Date;
    quantity? : number;
    restaurantId: number;
}