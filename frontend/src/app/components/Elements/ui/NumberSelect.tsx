import React, { useState, useEffect } from "react";

interface NumberSelectProps {
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number; // Default step value is optional
  label?: string; // Placeholder or label text
  value: number; // Add value prop to control the input
}

const NumberSelect: React.FC<NumberSelectProps> = ({
  onChange,
  min,
  max,
  step = 1,
  label = "Enter a number",
  value, // Add value prop to control the input
}) => {
  const [qty, setQty] = useState(value);

  useEffect(() => {
    setQty(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (newValue >= min && newValue <= max) {
      setQty(newValue);
      onChange(newValue);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {label && <label className="mb-2 text-sm font-medium text-gray-600">{label}</label>}
      <div className="flex items-center">
          <input
            type="number"
            value={qty ?? 0} // Default to 0
            onChange={handleChange}
            min={min}
            max={max}
            step={step}
            className="w-full px-4 py-2 border-t border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            placeholder={label}
          />
      </div>
    </div>
  );
};

export default NumberSelect;