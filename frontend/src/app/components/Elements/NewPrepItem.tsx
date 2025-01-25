import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from './Button';
import PrepListItem from '@/app/types/models/PrepListItem';
import { useState } from 'react';
import InputField from './login/InputField';

interface MediaCardProps {
    prepItem: PrepListItem;
    onButtonClick: (item: PrepListItem) => void;
}

const NewPrepItem: React.FC<MediaCardProps> = ({ prepItem, onButtonClick }: MediaCardProps) => {
  const [query, setQuery] = useState("");

  const handleClick = () => {
    onButtonClick(prepItem);
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value; // Get the value from the input event
    setQuery(newQuery);
    prepItem.note = newQuery; // It's better to handle state updates in a parent component
  }

  return (
    <Card 
      sx={{ 
        maxWidth: "100%", 
        backgroundColor: 'rgb(208, 201, 129)', // creamier body color
        border: '1px solid black', // black border
        boxShadow: 3, // shadow effect
        padding: '4px'
      }}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className='flex-start'>
          <p className='text-3xl'>{prepItem.name}</p>
          <p>{prepItem.description}</p>
          <InputField
            id="search"
            type="text"
            placeholder={"daily notes..."}
            value={query}
            onChange={handleSearch} // Pass the event correctly
          />
        </div>
        <div>
          <p>Quantity:</p>
          <p className='text-3xl'>{prepItem.quantity} {prepItem.unit}</p>
        </div>
        <div>
          <p>Status:</p>
          <p className='text-3xl'>{prepItem.status}</p>
        </div>
      </CardContent>
      <CardActions>
        <Button
          label='Cancel'
          onClick={handleClick}
          size='medium'
          style={{
            backgroundColor: "red",
            color: "white",
          }}
        />
      </CardActions>
    </Card>
  );
}

export default NewPrepItem;