import IngredientDetails from "@/app/types/models/IngredientDetails";
import { Card } from "@mui/joy";
import { Box, CardContent, Typography } from "@mui/material";

interface CartItemProps {
    item: IngredientDetails;
}

const CartItem: React.FC<CartItemProps> = ({item}: CartItemProps) => {
    return(
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {item.ingredientName}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                    >
                        {item.syscoPrice}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
}

export default CartItem;