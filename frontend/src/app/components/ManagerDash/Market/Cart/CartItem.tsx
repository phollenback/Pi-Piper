import IngredientDetails from "@/app/types/models/IngredientDetails";
import { Card, CardContent, Typography, Box, Divider } from "@mui/material";

interface CartItemProps {
    item: IngredientDetails;
}

const CartItem: React.FC<CartItemProps> = ({ item }: CartItemProps) => {
    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                padding: "16px",
                backgroundColor: "#f9f9f9",
                marginBottom: "10px",
                border: "black 2px solid"
            }}
        >
            <CardContent>
                {/* Ingredient Name */}
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {item.ingredientName}
                </Typography>

                {/* Prices */}
                <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                    <Typography variant="subtitle1" color="text.secondary">
                        Sysco Price: <strong>${item.syscoPrice.toFixed(2)}</strong>
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        US Foods Price: <strong>${item.usFoodsPrice.toFixed(2)}</strong>
                    </Typography>
                </Box>

                {/* Quantity and Last Ordered Date */}
                <Divider sx={{ marginY: "8px" }} />
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography variant="body1" color="text.primary">
                        Quantity: {item.quantity ?? "N/A"}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                        Last Ordered:{" "}
                        {item.last_date_ordered
                            ? new Date(item.last_date_ordered).toLocaleDateString()
                            : "N/A"}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default CartItem;