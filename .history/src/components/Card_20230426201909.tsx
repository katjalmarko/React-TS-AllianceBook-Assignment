import { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { PersonInfo, Character } from '../types';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Card = () => {
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

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center mt-20">
          <span className="loader"></span>
        </div>
      ) : isError ? (
        <div className="flex justify-center items-center font-bold text-2xl animate-bounce text-white">
          404 Error with Data fetching!
        </div>
      ) : (
        <>
          <div className="flex flex-wrap justify-center gap-6 mt-8 mb-20">
            {paginatedCharacters.map(character => (
              <div
                key={character.id}
                className="bg-gray-100 p-4 rounded-lg shadow-md pb-8 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
              >
                <Link to={`/character/${character.id}`}>
                  <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`}
                    alt={character.name}
                    className="w-full h-full rounded-lg"
                  />
                  <h2 className="text-lg font-semibold text-black text-center">
                    {character.name}
                  </h2>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
