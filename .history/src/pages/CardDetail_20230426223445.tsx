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
    <div className="mx-auto">
      <div className="flex flex-col md:flex-row justify-center items-center text-center mt-20 mb-20 text-white">
        <img
          src={photoUrl}
          alt={character.name}
          className="rounded-lg w-64 md:w-80 mb-8 md:mb-0 md:mr-8"
        />
        <div className="flex flex-col items-center">
          <div className="space-y-2 bg-gray-800/80 p-8 rounded-lg">
            <h2 className="text-3xl font-bold animate-pulse mb-6">
              {character.name}
            </h2>
            <p className="font-bold font-shojumaru">
              Height: {character.height}
            </p>
            <p className="font-bold font-shojumaru">Mass: {character.mass}</p>
            <p className="font-bold font-shojumaru">
              Hair Color: {character.hair_color}
            </p>
            <p className="font-bold font-shojumaru">
              Skin Color: {character.skin_color}
            </p>
            <p className="font-bold font-shojumaru">
              Eye Color: {character.eye_color}
            </p>
            <p className="font-bold font-shojumaru">
              Birth Year: {character.birth_year}
            </p>
            <p className="font-bold font-shojumaru">
              Gender: {character.gender}
            </p>
          </div>
          <Link
            to={'/'}
            className="flex justify-center items-center p-4 rounded-lg m-5 bg-gray-800 backLink"
          >
            Back to Database
          </Link>
        </div>
      </div>
    </div>
  );
};
