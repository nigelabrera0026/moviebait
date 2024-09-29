import React from 'react';
import SearchBar from './SearchBar';

const NavBar = ({ isDarkMode, toggleDarkMode, query, setQuery, fetchMovies }) => {
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
