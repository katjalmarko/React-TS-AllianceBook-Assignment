import { useState, useEffect } from 'react';
import axios from 'axios';
import { PersonInfo } from '../types';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const CardDetails = () => {
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
    <div className="mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-center items-center text-center mt-20 mb-20 text-white">
        <div className="flex justify-center items-center rounded-lg m-5 bg-gray-800">
          <Link to={'/'} className="backLink">
            Back to Database
          </Link>
        </div>
        <img
          src={photoUrl}
          alt={character.name}
          className="rounded-lg w-64 md:w-80 mb-8 md:mb-0 md:mr-8"
        />
        <div className="space-y-2 bg-gray-800/60 p-5">
          <h2 className="text-3xl font-bold animate-pulse">{character.name}</h2>
          <p className="">Height: {character.height}</p>
          <p className="">Mass: {character.mass}</p>
          <p className="">Hair Color: {character.hair_color}</p>
          <p className="">Skin Color: {character.skin_color}</p>
          <p className="">Eye Color: {character.eye_color}</p>
          <p className="">Birth Year: {character.birth_year}</p>
          <p className="">Gender: {character.gender}</p>
        </div>
      </div>
    </div>
  );
};
