import React, { useState, useEffect } from "react";

interface NumberSelectProps {
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  label?: string;
  value: number;
}

// Controlled number input component with min/max validation and optional stepping
const NumberSelect: React.FC<NumberSelectProps> = ({
  onChange,
  min,
  max,
  step = 1,
  label = "Enter a number",
  value,
}) => {
  const [qty, setQty] = useState(value);

  // Sync internal state with external value changes
  useEffect(() => {
    setQty(value);
  }, [value]);

  // Validates input within min/max range before updating
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
            value={qty ?? 0}
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