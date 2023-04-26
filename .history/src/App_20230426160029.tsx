import { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { PersonInfo, Character } from './types';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const CharacterDetails: React.FC = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<PersonInfo | null>(null);
  const [photoUrl, setPhotoUrl] = useState<string>('');

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await axios.get(
        `https://swapi.py4e.com/api/people/${id}/`
      );
      setCharacter(response.data);
      setPhotoUrl(
        `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
      );
    };

    fetchCharacter();
  }, [id]);

  if (!character) {
    return (
      <div className="flex justify-center mt-20">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center text-white">
      <img src={photoUrl} alt={character.name} className="rounded-lg" />
      <div className="">
        <h2>{character.name}</h2>
        <p>Height: {character.height}</p>
        <p>Mass: {character.mass}</p>
        <p>Hair Color: {character.hair_color}</p>
        <p>Skin Color: {character.skin_color}</p>
        <p>Eye Color: {character.eye_color}</p>
        <p>Birth Year: {character.birth_year}</p>
        <p>Gender: {character.gender}</p>
      </div>
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

  return (
    <Router>
      <Routes>
        <Route path="/character/:id" element={<CharacterDetails />} />
        <Route
          path="/"
          element={
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-6xl font-black mb-8 justify-center text-center animate-pulse text-white">
                Star Wars Characters
              </h1>

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
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map(pageNum => (
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
                ))}
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

              {isLoading ? (
                <div className="flex justify-center mt-20">
                  <span className="loader"></span>
                </div>
              ) : isError ? (
                <div className="flex justify-center items-center font-bold text-2xl animate-bounce text-white">
                  404 Error with fetching Data!
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
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
