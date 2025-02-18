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

// Card component for creating new prep items with note-taking functionality
const NewPrepItem: React.FC<MediaCardProps> = ({ prepItem, onButtonClick }: MediaCardProps) => {
  const [query, setQuery] = useState("");

  // Updates prep item state in parent component
  const handleClick = () => {
    onButtonClick(prepItem);
  }

  // Manages note input and updates prep item state
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    prepItem.note = newQuery;
  }

  return (
    <Card 
      sx={{ 
        maxWidth: "100%", 
        backgroundColor: 'rgb(208, 201, 129)',
        border: '1px solid black',
        boxShadow: 3,
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
            onChange={handleSearch}
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