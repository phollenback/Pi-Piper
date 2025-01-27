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


interface IngredientCardProps {
    item: IngredientDetails;
}

const IngredientCard: React.FC<IngredientCardProps> = ({ item }: IngredientCardProps) => {
    const [qty, setQty] = useState(0);
    const [selectedProvider, setSelectedProvider] = useState(false);

    const handleAddClick = () => {
        setQty(qty + 1);
    }
    const handleSubClick = () => {
        setQty(qty - 1);
    }

    const handleItemAdd = () => {

    }

    const onSyscoChange = () => {
        setSelectedProvider(!selectedProvider);
    }

    return (
        <Card variant="outlined" sx={{ width: 450, boxShadow: 2, borderRadius: 2, transition: '0.3s', '&:hover': { boxShadow: 6 } }}>
            <CardContent>
                <Typography level="title-lg" sx={{ fontWeight: 'bold', marginBottom: 1, textAlign: 'center'}}>
                    {item.ingredientName}
                </Typography>
                <Box display="flex" flexDirection="column" alignItems="center" sx={{ marginTop: 1 }}>
                    <Typography level="body-md" textColor="text.secondary" sx={{ marginBottom: 1 }}>
                        Sysco
                    </Typography>
                    <Typography level="body-lg" textColor="text.secondary">
                        <b>${item.syscoPrice.toFixed(2)}</b>
                    </Typography>
                    <Divider sx={{ width: '100%', margin: '8px 0' }} />
                    <Typography level="body-md" textColor="text.secondary" sx={{ marginBottom: 1 }}>
                        US Foods
                    </Typography>
                    <Typography level="body-lg" className="text-bold" textColor="text.secondary">
                        <b>${item.usFoodsPrice.toFixed(2)}</b>
                    </Typography>
                    <RadioButton 
                            label={`Selected: ${selectedProvider ? 'Sysco' : 'US Foods'}`}
                            onChange={onSyscoChange}
                            checked={selectedProvider}
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
                            padding: "12px"
                        }}  
                    />
                    <p className='px-16'>{qty}</p> {/* Adjust margin as needed */}
                    <Button
                        label='Subtract'
                        onClick={handleSubClick}
                        size='medium'
                        style={{
                            backgroundColor: "red",
                            color: "white",
                            padding: "12px"
                        }}  
                    />
                    <Button
                        label='Add'
                        onClick={handleItemAdd}
                        size='medium'
                        style={{
                            backgroundColor: "blue",
                            color: "white",
                            padding: "12px"
                        }}
                    />
                </Box>
            </CardActions>
        </CardOverflow>
        </Card>
    );
}

export default IngredientCard;