import React from 'react';
import SearchBar from './SearchBar';

interface NavBarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  setQuery: (query: string) => void;
  fetchMovies: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ isDarkMode, toggleDarkMode, query, setQuery, fetchMovies }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">Movie Bait</h1>
      <SearchBar query={query} setQuery={setQuery} onSearch={fetchMovies} />
      <button onClick={toggleDarkMode} className="toggle-mode-btn">
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default NavBar;