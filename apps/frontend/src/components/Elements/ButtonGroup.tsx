import React from 'react';
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
  return (
    <div className="flex flex-wrap gap-4 justify-start w-full">
      {/* Map through items to render buttons */}
      {items.map((item) => (
        <Button
          key={item.categoryId}
          label={item.categoryName}
          onClick={() => onButtonClick(item)}
          size="medium"
          style={{
            width: buttonWidth,
            height: buttonHeight,
            backgroundColor: selectedButton === item.categoryId
              ? '#4CAF50'
              : getButtonColor(item.categoryName),
            cursor: 'pointer',
            margin: '4px',
            flex: '0 1 auto',
            minWidth: '120px',
            maxWidth: '200px'
          }}
        />
      ))}
    </div>
  );
};

export default ButtonGroup;