import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const Card = (props: Props) => {
  return (
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
  );
};

export default Card;
