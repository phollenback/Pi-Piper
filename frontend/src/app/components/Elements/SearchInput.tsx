'use client';

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onSearch: (query: string) => void;
  error?: string;
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder,
  onSearch,
  error,
  className
}) => {
  return (
    <div className="w-full">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={onChange}
          onKeyPress={(e) => e.key === 'Enter' && onSearch(value)}
          placeholder={placeholder}
          className={`w-full ${className}`}
        />
        {/* ... rest of the component ... */}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default SearchInput;