import React from 'react';
import SearchBar from './SearchBar';

interface NavBarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  query: string;
  setQuery: (query: string) => void;
  fetchMovies: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ isDarkMode, toggleDarkMode, query, setQuery, fetchMovies }) => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-gray-100 dark:bg-gray-800 shadow-lg">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-200">Movie Bait</h1>
      <div className="flex space-x-4 items-center">
        {/* SearchBar Component */}
        <SearchBar query={query} setQuery={setQuery} onSearch={fetchMovies} />

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
