import React from 'react';

interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ page, setPage, totalPages }) => {
  return (
    <div className="flex justify-center space-x-4 py-4">
      <button 
        onClick={() => setPage(page - 1)} 
        disabled={page === 1} 
        className="px-4 py-2 bg-gray-500 text-white rounded">
        Previous
      </button>
      <span className="px-4 py-2">{page}</span>
      <button 
        onClick={() => setPage(page + 1)} 
        disabled={page >= totalPages} 
        className="px-4 py-2 bg-gray-500 text-white rounded">
        Next
      </button>
    </div>
  );
};

export default Pagination;
