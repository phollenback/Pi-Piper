import React, {useState} from "react";

interface NumberSelectProps {
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number; // Default step value is optional
  label?: string; // Placeholder or label text
}

const NumberSelect: React.FC<NumberSelectProps> = ({
  onChange,
  min,
  max,
  step = 1,
  label = "Enter a number",
}) => {
    const[qty, setQty] = useState(0);
    const handleChange = (value : number) => {
        setQty(value);
        onChange(value);
    }
  return (
    <div className="flex flex-col w-full">
      {label && <label className="mb-2 text-sm font-medium text-gray-600">{label}</label>}
      <input
        type="number"
        value={qty}
        onChange={(e) => handleChange(Number(e.target.value))}
        min={min}
        max={max}
        step={step}
        className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
        placeholder={label}
      />
    </div>
  );
};

export default NumberSelect;