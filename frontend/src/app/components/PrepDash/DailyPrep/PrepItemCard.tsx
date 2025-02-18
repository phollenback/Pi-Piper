import React, { useState } from 'react';
import Button from '../../Elements/Button';
import PrepListItem from '@/app/types/models/PrepListItem';

// PrepItemCard component: displays a single prep item with details and actions.
interface PrepItemCardProps {
  item: PrepListItem; // Prep list item data.
  onButtonClick: () => void; // Callback function for button click.
}

const PrepItemCard: React.FC<PrepItemCardProps> = ({ item, onButtonClick }) => {
  // Status color based on item status.
  const statusColor = item.status === 'complete' ? 'bg-green-100 border-green-400 text-green-800' : 'bg-red-100 border-red-400 text-red-800';

  // Local state for the note.
  const [note, setNote] = useState(item.note);

  // Handles changes to the note text area.
  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);
  };

  return (
    <div className={`max-w-full w-full lg:max-w-full flex border-l-4 p-4 mb-4 py-4 rounded shadow ${statusColor}`}>
      {/* Name and Quantity */}
      <div className="flex-2 flex flex-col justify-center items-center px-2 my-1 border-r border-black pr-4">
        <p className="font-semibold text-lg text-center">{item.name}</p>
        <div className="flex flex-col justify-center items-center mt-2">
          <p className="text-6xl font-bold text-center">{item.quantity}</p>
          <p className="text-lg">{item.unit}</p>
        </div>
        <p className="text-xs font-bold uppercase text-center mt-2">Status: {item.status}</p>
      </div>

      {/* Description and Daily Note */}
      <div className="flex-2 flex flex-col px-4 border-r border-black pr-4">
        <h1 className='text-md font-bold text-black'><i>Description</i>:</h1>
        {item.description ? <p className='text-sm text-gray-700'>{item.description}</p> : <p className='text-sm text-gray-700'>No description available</p>}
        <hr className='border-black my-2'/>
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
      <div className="flex-1 flex flex-col justify-center items-center px-4">
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