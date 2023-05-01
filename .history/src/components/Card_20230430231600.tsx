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
      className="flex flex-col text-white rounded-lg w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
    >
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`}
        alt={character.name}
        className="h-64 rounded-lg"
      />
      <h2 className="font-extrabold text-center my-2">{character.name}</h2>
    </Link>
  );
};

export default Card;
