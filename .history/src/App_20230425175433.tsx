import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PersonInfo } from './types';

interface Character {
  id: number;
  name: string;
}
const App: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  const fetchCharacters = async () => {
    const response = await axios.get(`https://swapi.py4e.com/api/people/?page=${currentPage}`);
    const charactersData = response.data.results.map((character: PersonInfo, index: number) => {
      const idOffset = (currentPage - 1) * 10 + index + 1;
      const id = idOffset >= 17 ? idOffset + 1 : idOffset;
      // Will skip the 17th element, as there is no data for     kipne 17ku lebo neexistujú data ani z jedného API
      return {
        id,
        name: character.name,
      };
    });
    setCharacters(charactersData);
  };
  
  useEffect(() => {
    fetchCharacters();
  }, [currentPage]);

  const changePage = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="flex text-4xl font-bold mb-8 justify-center">Star Wars Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {characters.map((character) => (
          <div key={character.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`}
              alt={character.name}
              className="w-full h-64 object-cover mb-2 rounded-lg"
            />
            <h2 className="text-lg font-semibold text-black">{character.name}</h2>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => changePage('prev')}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="flex items-center justify-center text-2xl font-bold mr-5 ml-5">{currentPage}</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => changePage('next')}>
          Next
        </button>
      </div>
    </div>
  );
};
export default App;
