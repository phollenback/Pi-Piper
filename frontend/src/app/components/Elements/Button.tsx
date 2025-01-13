// components/Elements/Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  size?: 'small' | 'medium' | 'large'; // Optional size (can be used for text size)
  style?: React.CSSProperties; // Allow passing custom styles to Button component
}

const Button: React.FC<ButtonProps> = ({ label, onClick, size = 'medium', style }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        fontSize: size === 'large' ? '18px' : size === 'medium' ? '14px' : '12px',
        color: 'white',
        borderRadius: '5px',
        ...style, // Apply custom styles passed down from ButtonGroup
      }}
    >
      {label}
    </button>
  );
};

export default Button;