import React from 'react';

const Navbar = ({ isDarkMode, toggleDarkMode, setQuery, fetchMovies }) => {
  return (
    <nav className="flex justify-between items-center py-4">
      <h1 className="text-4xl font-bold">Movie Bait</h1>
      <div className="flex space-x-4">
        <button onClick={() => toggleDarkMode()} className="bg-teal-500 px-4 py-2 rounded text-white">
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded shadow-md"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={fetchMovies} className="bg-green-500 px-4 py-2 rounded text-white">Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
