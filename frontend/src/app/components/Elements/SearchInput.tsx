'use client';

import { useState } from 'react';
import Button from './Button'; // Custom button you made earlier
import InputField from './login/InputField';

interface SearchInputProps {
  placeholder: string;
  onSearch: (query: string) => void; 
  error: string;
}

export default function SearchInput({ placeholder, onSearch, error }: SearchInputProps) {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query); // Trigger the search with the current query
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-4">
      <InputField
        id="search"
        type="text"
        placeholder={placeholder}
        error={error}
        value={query}
        onChange={handleChange}
      />
      <Button
        label="Search"
        onClick={() => onSearch(query)} // Trigger search on button click
        size="medium"
        style={{
          backgroundColor: '#4caf50',
          cursor: 'pointer',
        }}
      />
    </form>
  );
}