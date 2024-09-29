import React from 'react';

const ControlBar = ({ filter, handleFilterClick, limit, setLimit, viewMode, setViewMode }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      {/* Left: View mode and limit dropdown */}
      <div className="flex space-x-4">
        <button
          onClick={() => setViewMode('grid')}
          className={`px-4 py-2 rounded-md ${viewMode === 'grid' ? 'bg-blue-600' : 'bg-teal-500'} text-white`}
        >
          Grid View
        </button>
        <button
          onClick={() => setViewMode('list')}
          className={`px-4 py-2 rounded-md ${viewMode === 'list' ? 'bg-blue-600' : 'bg-teal-500'} text-white`}
        >
          List View
        </button>
        <select
          value={limit}
          onChange={(e) => setLimit(parseInt(e.target.value))}
          className="ml-4 px-4 py-2 rounded-md bg-teal-500 text-white"
        >
          <option value={15}>15</option>
          <option value={30}>30</option>
          <option value={50}>50</option>
        </select>
      </div>

      {/* Center: Genre filters */}
      <div className="flex space-x-4">
        <button
          onClick={() => handleFilterClick('movies')}
          className={`px-4 py-2 rounded-md ${filter === 'movies' ? 'bg-blue-600' : 'bg-teal-500'} text-white`}
        >
          Movies
        </button>
        <button
          onClick={() => handleFilterClick('trending')}
          className={`px-4 py-2 rounded-md ${filter === 'trending' ? 'bg-blue-600' : 'bg-teal-500'} text-white`}
        >
          Trending
        </button>
        <button
          onClick={() => handleFilterClick('4k')}
          className={`px-4 py-2 rounded-md ${filter === '4k' ? 'bg-blue-600' : 'bg-teal-500'} text-white`}
        >
          4K Movies
        </button>
      </div>
    </div>
  );
};

export default ControlBar;