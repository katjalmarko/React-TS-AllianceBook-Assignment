import { Link } from 'react-router-dom';
import { Character } from '../types';

type Props = {
  character: Character;
};

const Card = ({ character }: Props) => {
  return (
    <Link to={`/character/${character.id}`} key={character.id} className="">
      <div className="flex flex-col items-center border border-white w-64 text-white">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`}
          alt={character.name}
          className="h-64 rounded-lg"
        />
        <h2 className="font-semibold text-center my-2">{character.name}</h2>
      </div>
    </Link>
  );
};

export default Card;
