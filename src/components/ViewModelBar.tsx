import React from 'react';

// Define an interface for the props
interface ViewModelBarProps {
  viewMode: 'grid' | 'list'; // Define the possible values for viewMode
  setViewMode: (mode: 'grid' | 'list') => void; // Function to update viewMode
}

const ViewModelBar: React.FC<ViewModelBarProps> = ({ viewMode, setViewMode }) => {
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

export default ViewModelBar;