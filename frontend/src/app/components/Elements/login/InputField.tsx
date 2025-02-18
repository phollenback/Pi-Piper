import React from 'react';

interface InputFieldProps {
  id: string;
  type: string;
  placeholder?: string;
  error?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Reusable input component with error handling and dynamic styling
const InputField: React.FC<InputFieldProps> = ({ id, type, placeholder, error, value, onChange }) => (
  <div className="flex flex-col gap-2">
    <input
      id={id}
      name={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border px-3 py-2 rounded-md ${error ? 'border-red-500' : 'border-gray-300'}`}
    />
    {error && <p className="text-sm text-red-500">{error}</p>}
  </div>
);

export default InputField;