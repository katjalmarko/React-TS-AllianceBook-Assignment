import { useState, useEffect } from 'react';
import { PersonInfo, Character } from '../types';

type Props = {
  characters: PersonInfo[];
};

function Filtering({ characters }: Props) {
  const [genderFilter, setGenderFilter] = useState<string>('');
  const [nameFilter, setNameFilter] = useState<string>('');
  const [allCharacters, setAllCharacters] = useState<Character[]>([]);

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
    </div>
  );
}

export default Filtering;
