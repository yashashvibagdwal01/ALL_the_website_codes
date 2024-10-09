import React from 'react';

// Define the interface for the Pagination props
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-center mt-4 w-full h-14 bg-white rounded-md">
      {/* Previous Button (Circle) */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`border-2 border-gray-700 rounded-full p-2 w-10 h-10 flex items-center justify-center mx-1 ${
          currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-200'
        }`}
      >
        &#8249;
      </button>

      <div className="flex items-center mx-2">
        <button
          onClick={() => onPageChange(1)}
          className={`mx-1 w-8 h-8 flex items-center justify-center ${
            currentPage === 1 ? 'font-bold text-gray-700' : 'hover:bg-gray-200'
          }`}
        >
          1
        </button>
        <button
          onClick={() => onPageChange(2)}
          className={`mx-1 w-8 h-8 flex items-center justify-center ${
            currentPage === 2 ? 'font-bold text-gray-700' : 'hover:bg-gray-200'
          }`}
        >
          2
        </button>
        <span className="mx-2">...</span>
        <button
          onClick={() => onPageChange(totalPages)}
          className={`mx-1 w-8 h-8 flex items-center justify-center ${
            currentPage === totalPages ? 'font-bold text-gray-700' : 'hover:bg-gray-200'
          }`}
        >
          {totalPages}
        </button>
      </div>

      {/* Next Button (Circle) */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`border-2 border-gray-700 rounded-full p-2 w-10 h-10 flex items-center justify-center mx-1 ${
          currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-200'
        }`}
      >
        &#8250;
      </button>
    </div>
  );
};

export default Pagination;
