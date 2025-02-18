'use client';

import { useState } from 'react';
import Button from './Button'; 
import InputField from './login/InputField';

// SearchInput component: a search bar with input field and search button.
interface SearchInputProps {
  placeholder: string;
  onSearch: (query: string) => void; // Callback function triggered on search.
  error?: string; // Optional error message to display.
}

export default function SearchInput({ placeholder, onSearch, error }: SearchInputProps) {
  const [query, setQuery] = useState('');

  // Handles changes to the input field, updating the query state.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // Handles form submission, triggering the search callback.
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query); 
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
        onClick={() => onSearch(query)} 
        size="medium"
        style={{
          backgroundColor: '#4caf50',
          cursor: 'pointer',
        }}
      />
    </form>
  );
}