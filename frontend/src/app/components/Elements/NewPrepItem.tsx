
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from './Button';
import PrepListItem from '@/app/types/models/PrepListItem';

interface MediaCardProps {
    prepItem: PrepListItem;
    onButtonClick: (item: PrepListItem) => void;
}


const NewPrepItem: React.FC<MediaCardProps> = ({prepItem, onButtonClick}: MediaCardProps) => {
  const handleClick = () => {
    onButtonClick(prepItem);
  }
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {prepItem.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {prepItem.description}
        </Typography>
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
