import React, { useEffect } from 'react';
import Button from '../Elements/Button';
import { Category } from '@/app/types/models/Category';

// ButtonGroup component: renders a group of buttons based on provided category data.
interface ButtonGroupProps {
  items: Category[]; // Array of items with full category data
  buttonWidth: string; // Button width (CSS size e.g., '200px')
  buttonHeight: string; // Button height (CSS size e.g., '60px')
  onButtonClick: (item: Category) => void; // Click handler, receives the entire category object.
  selectedButton?: number | null; // Change to number to match categoryId
  getButtonColor: (name: string) => string; // Function to determine button color based on name.
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  items,
  buttonWidth,
  buttonHeight,
  onButtonClick,
  selectedButton,
  getButtonColor,
}) => {
  useEffect(() => {
    console.log('items', items.map((item) => item.categoryName));
  }, [items]);
  return (
    <div
      style={{
        display: 'flex',
        gap: '15px', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        width: '100%', 
      }}
    >
      {/* Map through items to render buttons */}
      {items.map((item) => (
        <div
          key={item.categoryId}
          style={{
            display: 'flex',
            justifyContent: 'center',
            flex: '1 1 auto', 
          }}
        >
          <Button
            label={item.categoryName} 
            onClick={() => onButtonClick(item)} 
            size="medium" 
            style={{
              width: buttonWidth, 
              height: buttonHeight, 
              backgroundColor:
                selectedButton === item.categoryId
                  ? '#4CAF50' 
                  : getButtonColor(item.categoryName), 
              cursor: 'pointer',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ButtonGroup;