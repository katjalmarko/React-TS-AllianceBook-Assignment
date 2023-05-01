import { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { PersonInfo, Character } from '../types';
import Card from '../components/Card';

const HomePage = () => {
  // Declare state variables for pagination, filters, and character data
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [genderFilter, setGenderFilter] = useState<string>('');
  const [nameFilter, setNameFilter] = useState<string>('');
  const [allCharacters, setAllCharacters] = useState<Character[]>([]);

  // Define a function to fetch character data from the Star Wars API
  const fetchCharacters = async (page: number): Promise<Character[]> => {
    const response = await axios.get(
      `https://swapi.py4e.com/api/people/?page=${page}`
    );

    // Process the received data and create a new array with formatted character data
    const charactersData = response.data.results.map(
      (character: PersonInfo, index: number) => {
        const idOffset = (page - 1) * 10 + index + 1;
        // 17th element is not in the Database
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

  // useQuery hook to fetch all character data and handle loading and error states
  const { isLoading, isError } = useQuery<Character[]>(
    ['characters'],
    async () => {
      const totalPages = 9;
      const allData = [];

      // Fetch data for each page and accumulate it in the allData array
      for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
        const pageData = await fetchCharacters(pageNum);
        allData.push(...pageData);
      }

      // Update the allCharacters state with the fetched data
      setAllCharacters(allData);
      return allData;
    },
    {
      retry: false,
    }
  );

  // Filter characters based on the applied gender and name filters
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

  // Paginate filtered characters based on the current page
  const itemsPerPage = 10;
  const paginatedCharacters = characters.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Define a function to change the current page
  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  // Calculate the total number of pages for pagination
  const totalPages = Math.ceil(characters.length / itemsPerPage);
  const genderFilters = ['', 'male', 'female', 'n/a', 'hermaphrodite', 'none'];

  // Reset the current page when the gender filter is changed
  useEffect(() => {
    setCurrentPage(1);
  }, [genderFilter]);

  // Display a loader while data is being fetched
  if (isLoading) {
    return (
      <div className="flex justify-center mt-20">
        <span className="loader"></span>
      </div>
    );
  }

  // Display an error message if data fetching fails
  if (isError) {
    return (
      <div className="flex justify-center items-center font-bold text-2xl animate-bounce text-white">
        404 Error with Data fetching!
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Search by name input */}

        <div className="mb-4 mt-4 flex justify-center">
          <input
            type="text"
            placeholder="Search by name"
            value={nameFilter}
            onChange={event => setNameFilter(event.target.value)}
            className="px-4 py-2 rounded-lg bg-gray-800 text-white border-none"
          />
        </div>

        {/* Gender filter buttons */}
        <div className="mb-4 flex justify-center flex-wrap gap-2">
          {genderFilters.map(gender => (
            <button
              key={gender}
              className={`bg-gray-800 text-white text-sm  px-2 sm:px-4 py-1 sm:py-2 rounded mx-1 my-1 ${
                genderFilter === gender ? 'opacity-50' : ''
              }`}
              onClick={() => setGenderFilter(gender)}
            >
              {gender || 'All'}
            </button>
          ))}
        </div>
      </div>

      {/* Pagination buttons */}
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

      {/*  */}
      <div className="text-center text-2xl text-white font-shojumaru">
        {characters.length} characters
      </div>

      {/* Display character cards */}
      <div className="flex flex-wrap justify-center gap-6 mt-8 mb-2">
        {paginatedCharacters.map(character => (
          <Card key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
