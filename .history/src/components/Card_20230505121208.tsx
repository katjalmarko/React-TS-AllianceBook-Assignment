import { Link } from 'react-router-dom';
import { Character } from '../types';

type Props = {
  character: Character;
};

const Card = ({ character }: Props) => {
  return (
    <Link to={`/character/${character.id}`} key={character.id}>
      <div className="flex flex-col items-center w-56 h-80 rounded-lg overflow-hidden border-none bg-gray-600/60">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`}
          alt={character.name}
          className="h-64 w-full"
        />
        <div className="flex items-center h-full">
          <h2 className="font-semibold text-center my-2">{character.name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Card;
