import { createContext } from 'react';
import { Character } from '../types';

interface CharacterContextType {
  allCharacters: Character[];
  setAllCharacters: (characters: Character[]) => void;
}

const CharacterContext = createContext<CharacterContextType>({
  allCharacters: [],
  setAllCharacters: () => {},
});

export default CharacterContext;
