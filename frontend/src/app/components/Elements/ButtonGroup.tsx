import React from 'react';
import Button from '../Elements/Button';
import Category from '@/app/types/models/Category';

// ButtonGroup component: renders a group of buttons based on provided category data.
interface ButtonGroupProps {
  items: Category[]; // Array of items with full category data
  buttonWidth: string; // Button width (CSS size e.g., '200px')
  buttonHeight: string; // Button height (CSS size e.g., '60px')
  onButtonClick: (item: Category) => void; // Click handler, receives the entire category object.
  selectedButton?: string | null | undefined; // Selected button's name (optional).
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
          key={item.category_id}
          style={{
            display: 'flex',
            justifyContent: 'center',
            flex: '1 1 auto', 
          }}
        >
          <Button
            label={item.category_name}
            onClick={() => onButtonClick(item)} 
            size="medium" 
            style={{
              width: buttonWidth, 
              height: buttonHeight, 
              backgroundColor:
                selectedButton === item.category_name
                  ? '#4CAF50' 
                  : getButtonColor(item.category_name), 
              cursor: 'pointer',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ButtonGroup;