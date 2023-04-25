import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { PersonInfo, Character } from './types';

const App = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [genderFilter, setGenderFilter] = useState<string>('');
  const [allCharacters, setAllCharacters] = useState<Character[]>([]);

  const fetchCharacters = async (page: number): Promise<Character[]> => {
    const response = await axios.get(
      `https://swapi.py4e.com/api/people/?page=${page}`
    );
    const charactersData = response.data.results.map(
      (character: PersonInfo, index: number) => {
        const idOffset = (page - 1) * 10 + index + 1;
        const id = idOffset >= 17 ? idOffset + 1 : idOffset;
        return {
          id,
          name: character.name,
          gender: character.gender,
        };
      }
    );
    return charactersData;
  };

  const { isLoading, isError } = useQuery<Character[]>(
    ['characters'],
    async () => {
      const totalPages = 9;
      const allData = [];

      for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
        const pageData = await fetchCharacters(pageNum);
        allData.push(...pageData);
      }

      setAllCharacters(allData);
      return allData;
    },
    {
      retry: false,
    }
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [genderFilter]);

  const characters = allCharacters.filter(character => {
    if (genderFilter === '') return true;
    return character.gender === genderFilter;
  });

  const itemsPerPage = 10;
  const paginatedCharacters = characters.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const changePage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const totalPages = Math.ceil(characters.length / itemsPerPage);

  const handleGenderFilter = (gender: string) => {
    setGenderFilter(gender);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <h1 className="text-6xl font-black mb-8 justify-center text-center animate-pulse">
          Star Wars Characters
        </h1>
      </div>

      <div className="mb-4 flex justify-center flex-wrap gap-2">
        <button
          className={`bg-gray-800 text-white text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 rounded mx-1 my-1 ${
            genderFilter === '' ? 'opacity-50' : ''
          }`}
          onClick={() => handleGenderFilter('')}
        >
          All
        </button>
        <button
          className={`bg-gray-800 text-white text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 rounded mx-1 my-1 ${
            genderFilter === 'male' ? 'opacity-50' : ''
          }`}
          onClick={() => handleGenderFilter('male')}
        >
          Male
        </button>
        <button
          className={`bg-gray-800 text-white text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 rounded mx-1 my-1 ${
            genderFilter === 'female' ? 'opacity-50' : ''
          }`}
          onClick={() => handleGenderFilter('female')}
        >
          Female
        </button>
        <button
          className={`bg-gray-800 text-white text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 rounded mx-1 my-1 ${
            genderFilter === 'n/a' ? 'opacity-50' : ''
          }`}
          onClick={() => handleGenderFilter('n/a')}
        >
          N/A
        </button>
        <button
          className={`bg-gray-800 text-white text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 rounded mx-1 my-1 ${
            genderFilter === 'hermaphrodite' ? 'opacity-50' : ''
          }`}
          onClick={() => handleGenderFilter('hermaphrodite')}
        >
          Hermaphrodite
        </button>
        <button
          className={`bg-gray-800 text-white text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 rounded mx-1 my-1 ${
            genderFilter === 'none' ? 'opacity-50' : ''
          }`}
          onClick={() => handleGenderFilter('none')}
        >
          None
        </button>
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error fetching data</div>
      ) : (
        <>
          <div className="flex flex-wrap justify-center gap-6 mt-8 mb-20">
            {paginatedCharacters.map(character => (
              <div
                key={character.id}
                className="bg-gray-100 p-4 rounded-lg shadow-md pb-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
              >
                <img
                  src={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`}
                  alt={character.name}
                  className="w-full h-full rounded-lg"
                />
                <h2 className="text-lg font-semibold text-black text-center">
                  {character.name}
                </h2>
              </div>
            ))}
          </div>
          <div className="mb-8 flex justify-center flex-wrap gap-2">
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
        </>
      )}
    </div>
  );
};

export default App;
