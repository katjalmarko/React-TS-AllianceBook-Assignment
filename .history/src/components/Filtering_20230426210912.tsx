import { useState, useEffect } from 'react';
import { PersonInfo, Character } from '../types';

type Props = {
  allCharacters: any;
  genderFilter: any;
};

function Filtering({ allCharacters, genderFilter }: Props) {
  const [nameFilter, setNameFilter] = useState<string>('');
  const genderFilters = ['', 'male', 'female', 'n/a', 'hermaphrodite', 'none'];

  const totalPages = Math.ceil(characters.length / itemsPerPage);

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="text-center mb-4 font-bold text-2xl text-white">
        {characters.length} characters found
      </div>

      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search by name"
          value={nameFilter}
          onChange={event => setNameFilter(event.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-800 text-white border-none"
        />
      </div>

      <div className="mb-4 flex justify-center flex-wrap gap-2">
        {genderFilters.map(gender => (
          <button
            key={gender}
            className={`bg-gray-800 text-white text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 rounded mx-1 my-1 ${
              genderFilter === gender ? 'opacity-50' : ''
            }`}
            onClick={() => setGenderFilter(gender)}
          >
            {gender || 'All'}
          </button>
        ))}
      </div>

      <div className="mb-4 flex justify-center flex-wrap gap-2">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          pageNum => (
            <button
              key={pageNum}
              className={`bg-gray-800 text-white text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 rounded mx-1 my-1 ${
                currentPage === pageNum ? 'opacity-50' : ''
              }`}
              onClick={() => changePage(pageNum)}
              disabled={currentPage === pageNum}
            >
              {pageNum}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default Filtering;
