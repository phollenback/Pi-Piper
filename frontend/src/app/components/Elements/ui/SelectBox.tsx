interface SelectBoxProps {
  value: string | number;
  onChange: (value: string | number) => void;
  options: { label: string; value: string | number }[]; // Array of { label, value }
  placeholder?: string;
  title?: string;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  value,
  onChange,
  options,
  placeholder = "Select an option",
  title,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value); // Send string or number value
  };

  return (
    <div className="flex flex-col">
      <select
        id="select-box"
        value={value}
        onChange={handleChange}
        title={title || placeholder}
        className="border border-gray-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={`${option.value}-${index}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;