import React, { useState } from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IngredientDetails from '@/app/types/models/IngredientDetails';
import { Box } from '@mui/joy';
import { CardActions } from '@mui/material';
import Button from '../../Elements/Button';
import RadioButton from '../../Elements/login/RadioButton';
import { useDispatch } from 'react-redux';
import { addToSyscoCart, addToUsFoodsCart } from '@/redux/features/cart/cartSlice';

interface IngredientCardProps {
    item: IngredientDetails;
}

const IngredientCard: React.FC<IngredientCardProps> = ({ item }: IngredientCardProps) => {
    const [quantity, setQuantity] = useState(0);
    const [selectedProvider, setSelectedProvider] = useState<string>('Sysco'); // Change to string
    const dispatch = useDispatch();

    const handleAddClick = () => {
        setQuantity(quantity + 1);
    };

    const handleSubClick = () => {
        setQuantity(quantity - 1);
    };

    const handleItemAdd = () => {
        const itemWithQuantity = {
            ...item,
            quantity: quantity // Ensure we are passing the current quantity
        };
        console.log("Item being added to cart:", itemWithQuantity);
        
        if (selectedProvider === 'Sysco') {
            dispatch(addToSyscoCart(itemWithQuantity));
        } else {
            dispatch(addToUsFoodsCart(itemWithQuantity));
        }
    };

    const onSyscoChange = (provider: string) => {
        setSelectedProvider(provider); 
    };

    return (
        <Card  
            color="primary" 
            variant="outlined" 
            sx={{ 
                width: 450, 
                boxShadow: 3, 
                borderRadius: 2, 
                transition: '0.3s', 
                '&:hover': { boxShadow: 8, bgcolor: '#f0f4f8', cursor: 'pointer' } // Light background on hover
            }}>
            <CardContent>
                <Typography level="title-lg" sx={{ fontWeight: 'bold', marginBottom: 1, textAlign: 'center', color: '#2C3E50' }}>
                    {item.ingredientName}
                </Typography>
                <Box display="flex" flexDirection="column" alignItems="center" sx={{ marginTop: 1 }}>
                    <Typography level="body-md" textColor="text.secondary" sx={{ marginBottom: 1 }}>
                        Sysco
                    </Typography>
                    <Typography level="body-lg" sx={{ fontWeight: 'bold', color: item.syscoPrice < item.usFoodsPrice ? 'green' : 'red' }}>
                        ${item.syscoPrice.toFixed(2)}
                    </Typography>
                    <Divider sx={{ width: '100%', margin: '8px 0' }} />
                    <Typography level="body-md" textColor="text.secondary" sx={{ marginBottom: 1 }}>
                        US Foods
                    </Typography>
                    <Typography level="body-lg" sx={{ fontWeight: 'bold', color: item.usFoodsPrice < item.syscoPrice ? 'green' : 'red' }}>
                        ${item.usFoodsPrice.toFixed(2)}
                    </Typography>
                    <RadioButton 
                        label={`Selected: ${selectedProvider || 'None'}`} // Update to show selected provider
                        onChange={() => onSyscoChange(selectedProvider === 'Sysco' ? 'US Foods' : 'Sysco')} // Toggle between providers
                        checked={selectedProvider === 'Sysco'} // Check if Sysco is selected
                        size='medium'
                    />
                </Box>
            </CardContent>
            <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
                <CardActions>
                    <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ width: '100%' }}>
                        <Button
                            label='Add'
                            onClick={handleAddClick}
                            size='medium'
                            style={{
                                backgroundColor: "green",
                                color: "white",
                                padding: "12px",
                            }}  
                        />
                        <p className='px-4'>{quantity}</p> {/* Adjust spacing as needed */}
                        <Button
                            label='Subtract'
                            onClick={handleSubClick}
                            size='medium'
                            style={{
                                backgroundColor: "red",
                                color: "white",
                                padding: "12px",
                            }}  
                        />
                        <Button
                            label='Add to Cart'
                            onClick={handleItemAdd}
                            size='medium'
                            style={{
                                backgroundColor: "blue",
                                color: "white",
                                padding: "12px",
                            }}
                        />
                    </Box>
                </CardActions>
            </CardOverflow>
        </Card>
    );
}

export default IngredientCard;