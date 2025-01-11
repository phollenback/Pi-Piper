import React from "react";

interface NumberSelectProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number; // Optional, default to 1
  label?: string; // Optional label for accessibility
  placeholder?: string; // Optional placeholder for input
  title?: string; // Optional title attribute for better accessibility
}

const NumberSelect: React.FC<NumberSelectProps> = ({ 
  value, 
  onChange, 
  min, 
  max, 
  step = 1, 
  label, 
  placeholder = "Enter a number", 
  title 
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    if (!isNaN(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <div className="flex flex-col">
      {label && (
        <label className="mb-2 text-sm font-medium" htmlFor="number-input">
          {label}
        </label>
      )}
      <input
        id="number-input"
        type="number"
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
        placeholder={placeholder}
        title={title || label || placeholder}
        className="border border-gray-300 rounded px-2 py-1 text-base focus:outline-none focus:ring focus:ring-blue-300"
      />
    </div>
  );
};

export default NumberSelect;