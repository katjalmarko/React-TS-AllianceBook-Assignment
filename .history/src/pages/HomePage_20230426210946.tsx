import { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { PersonInfo, Character } from '../types';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Filtering from '../components/Filtering';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [genderFilter, setGenderFilter] = useState<string>('');
  const [nameFilter, setNameFilter] = useState<string>('');
  const [allCharacters, setAllCharacters] = useState<Character[]>([]);

  const fetchCharacters = async (page: number): Promise<Character[]> => {
    const response = await axios.get(
      `https://swapi.py4e.com/api/people/?page=${page}`
    );
    const charactersData = response.data.results.map(
      (character: PersonInfo, index: number) => {
        const idOffset = (page - 1) * 10 + index + 1;
        const id = idOffset >= 17 ? idOffset + 1 : idOffset;
        // 17th element is not in the Database
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

  const characters = allCharacters.filter((character: PersonInfo) => {
    if (genderFilter === '' && nameFilter === '') return true;
    if (genderFilter !== '' && character.gender !== genderFilter) return false;
    if (
      nameFilter !== '' &&
      !character.name.toLowerCase().includes(nameFilter.toLowerCase())
    )
      return false;
    return true;
  });

  const itemsPerPage = 10;

  const paginatedCharacters = characters.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [genderFilter]);

  if (isLoading) {
    return (
      <div className="flex justify-center mt-20">
        <span className="loader"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center font-bold text-2xl animate-bounce text-white">
        404 Error with Data fetching!
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Filtering allCharacters={allCharacters} genderFilter={genderFilter} />
      <>
        <div className="flex flex-wrap justify-center gap-6 mt-8 mb-20">
          {paginatedCharacters.map((character: any) => (
            <Card character={character} />
          ))}
        </div>
      </>
    </div>
  );
};

export default HomePage;
