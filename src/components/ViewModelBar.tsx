import React from 'react';

const ViewModeBar = ({ viewMode, setViewMode }) => {
  return (
    <div className="view-mode-bar">
      <button
        onClick={() => setViewMode('grid')}
        className={viewMode === 'grid' ? 'active' : ''}
      >
        Grid View
      </button>
      <button
        onClick={() => setViewMode('list')}
        className={viewMode === 'list' ? 'active' : ''}
      >
        List View
      </button>
    </div>
  );
};

export default ViewModeBar;
