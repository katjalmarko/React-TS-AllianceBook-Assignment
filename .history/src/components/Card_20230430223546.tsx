import { Link } from 'react-router-dom';
import { Character } from '../types';

type Props = {
  character: Character;
};

const Card = ({ character }: Props) => {
  return (
    <Link
      to={`/character/${character.id}`}
      key={character.id}
      className="flex flex-col bg-gray-100/60 rounded-lg w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
    >
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`}
        alt={character.name}
        className="h-3/4 rounded-lg"
      />
      <div className="flex justify-center">
        <h2 className="font-semibold text-center">{character.name}</h2>
      </div>
    </Link>
  );
};

export default Card;
