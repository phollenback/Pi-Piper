import React from 'react';
import Button from '../Elements/Button';
import Category from '@/app/types/models/Category';



interface ButtonGroupProps {
  items: Category[]; // Array of items with full category data
  buttonWidth: string; // Button width (CSS size e.g., '200px')
  buttonHeight: string; // Button height (CSS size e.g., '60px')
  onButtonClick: (item: Category) => void; // Click handler for buttons, passing the entire item
  selectedButton?: string | null | undefined; // Optionally pass the selected button's value
  getButtonColor: (name: string) => string; // Adjusted to accept 'name' only
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  items,
  buttonWidth,
  buttonHeight,
  onButtonClick,
  selectedButton,
  getButtonColor,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '15px', // Add more space between buttons
        flexWrap: 'wrap', // Wrap buttons if necessary
        justifyContent: 'center', // Evenly distribute buttons horizontally
        width: '100%', // Ensure it takes up the full width
      }}
    >
      {items.map((item) => (
        <div
          key={item.category_id}
          style={{
            display: 'flex',
            justifyContent: 'center',
            flex: '1 1 auto', // Allow buttons to stretch evenly across the width
          }}
        >
          <Button
            label={item.category_name}
            onClick={() => onButtonClick(item)} // Pass the entire item to the onButtonClick handler
            size="medium" // You can modify the size logic here
            style={{
              width: buttonWidth, // Adjust width
              height: buttonHeight, // Adjust height
              backgroundColor:
                selectedButton === item.category_name
                  ? '#4CAF50' // Highlight selected button with green
                  : getButtonColor(item.category_name), // Pass only name to getButtonColor
              cursor: 'pointer',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ButtonGroup;