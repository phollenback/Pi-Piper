import React from "react";

// RadioButton component: renders a customizable radio button with label.
interface RadioButtonProps {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean; // Default is false
  size?: "small" | "medium" | "large"; // Optional sizes
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  onChange,
  checked = false,
  size = "medium",
}) => {
  // Size-specific styling classes.
  const sizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  return (
    <label className="flex items-center gap-2 text-gray-500 font-bold">
      <input
        type="checkbox" 
        className={`leading-tight ${sizeClasses[size]}`}
        onChange={onChange}
        checked={checked}
      />
      <span className={sizeClasses[size]}>{label}</span>
    </label>
  );
};

export default RadioButton;