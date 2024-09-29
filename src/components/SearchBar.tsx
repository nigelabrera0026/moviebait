import React, { useState } from 'react';

interface SearchBarProps {
  setQuery: (query: string) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setQuery, onSearch }) => {
  const [inputValue, setInputValue] = useState(''); // Local state to hold input value

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission on "Enter" key press
      onSearch(); // Trigger search on Enter key, if desired
    }
  };

  const handleSearchClick = () => {
    setQuery(inputValue); // Only update the query when search is clicked
    onSearch(); // Trigger search
  };

  return (
    <div className="flex justify-center mb-8">
      <input
        type="text"
        placeholder="Search movies..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Change local input value, but don't trigger search
        onKeyDown={handleKeyDown}
        className="px-4 py-2 rounded-lg w-80 shadow-md text-black"
      />
      <button 
        onClick={handleSearchClick} // Only search when button is clicked
        className="ml-2 px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-all"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
