import React, { useState } from 'react';
import Button from '../../Elements/Button';
import PrepListItem from '@/app/types/models/PrepListItem';

interface PrepItemCardProps {
  item: PrepListItem;
  onButtonClick: () => void;
}

const PrepItemCard: React.FC<PrepItemCardProps> = ({ item, onButtonClick }) => {
  // Determine the status color based on the item status
  const statusColor = item.status === 'complete' ? 'bg-green-100 border-green-400 text-green-800' : 'bg-red-100 border-red-400 text-red-800';

  // Local state for the note
  const [note, setNote] = useState(item.note);

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);
  };

  return (
    <div className={`max-w-full w-full lg:max-w-full flex border-l-4 p-4 mb-4 py-4 rounded shadow ${statusColor}`}>
      {/* Name */}
      <div className="flex-2 px-2 my-1 border-r border-black">
        <p className="font-semibold text-lg text-left">{item.name}</p>
        <p className="text-xs font-bold uppercase text-left">Status: {item.status}</p>
      </div>

      {/* Quantity */}
      <div className="flex-1 px-4 my-2 border-r border-black">
        <p className="text-sm font-medium font-bold text-left">
          Quantity: {item.quantity} {item.unit}
        </p>
      </div>

      {/* Description */}
      <div className="flex-2 px-4 border-r border-black">
        <h1 className='text-md font-bold text-black'><i>Description</i>:</h1>
        {item.description ? <p className='text-sm text-gray-700'>{item.description}</p> : <p className='text-sm text-gray-700'>No description available</p>}
        <hr className='my-4 border-black'/>
        <h1 className='text-md font-bold text-black'><i>Daily:</i></h1>
        <textarea
          className="w-full p-2 border rounded-md text-sm text-gray-700"
          value={note}
          onChange={handleNoteChange}
          title="Daily Note"
          placeholder="Enter your daily note here"
        />
      </div>

      {/* Button */}
      <div className="flex-2 my-6 px-4">
        <Button
          label={item.status === 'complete' ? 'Cancel' : 'Complete'}
          onClick={onButtonClick}
          size="medium"
          style={{
            backgroundColor: item.status === 'complete' ? 'rgb(221, 79, 79)' : 'rgb(74, 173, 78)', 
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
            padding: '10px 20px',
          }}
        />
      </div>
    </div>
  );
};

export default PrepItemCard;