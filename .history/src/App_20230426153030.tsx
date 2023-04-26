import { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { PersonInfo, Character } from './types';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

interface MatchParams {
  id: string;
}

interface CharacterDetailsProps {
  match: MatchParams;
}

const CharacterDetails: React.FC<CharacterDetailsProps> = ({ match }) => {
  const characterId = match.id;
  const [character, setCharacter] = useState<PersonInfo | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await axios.get(
        `https://swapi.py4e.com/api/people/${characterId}/`
      );
      setCharacter(response.data);
    };

    fetchCharacter();
  }, [characterId]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{character.name}</h2>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
      <p>Hair Color: {character.hair_color}</p>
      <p>Skin Color: {character.skin_color}</p>
      <p>Eye Color: {character.eye_color}</p>
      <p>Birth Year: {character.birth_year}</p>
      <p>Gender: {character.gender}</p>
    </div>
  );
};

const App = () => {
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

  const characters = allCharacters.filter(character => {
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

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(characters.length / itemsPerPage);
  const genderFilters = ['', 'male', 'female', 'n/a', 'hermaphrodite', 'none'];

  useEffect(() => {
    setCurrentPage(1);
  }, [genderFilter]);
};

export default App;
