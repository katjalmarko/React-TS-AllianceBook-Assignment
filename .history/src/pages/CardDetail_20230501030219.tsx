import { useState, useEffect } from 'react';
import axios from 'axios';
import { PersonInfo } from '../types';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const CardDetails = () => {
  // Get the character id from the URL parameters
  const { id } = useParams();
  const [character, setCharacter] = useState<PersonInfo | null>(null);
  const [photoUrl, setPhotoUrl] = useState<string>('');

  // Fetch character data and photo URL when the component mounts or the id changes
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
    <div className="flex items-center justify-center mt-2">
      <div className="flex flex-col md:flex-row justify-center items-center p-8 bg-gray-800/60 border border-gray-300 rounded-lg shadow-md text-gray-200 w-11/12 md:w-2/3 lg:w-1/2">
        <img
          src={photoUrl}
          alt={character.name}
          className="rounded-lg w-48 md:w-64 mb-8 md:mb-0 md:mr-8"
        />
        <div className="space-y-6">
          <div className="space-y-2 p-8 rounded-lg text-center">
            <h2 className="text-xl font-bold animate-pulse mb-6">
              {character.name}
            </h2>
            <p className="font-bold font-shojumaru">
              Height:{' '}
              <span
                className="text-gray-400 ml-5 font-serif text-xl"
                style={{ textShadow: '0 0 2px white' }}
              >
                {character.height}
              </span>
            </p>
            <p className="font-bold font-shojumaru">
              Mass:{' '}
              <span
                className="text-gray-400 ml-5 font-serif text-xl"
                style={{ textShadow: '0 0 2px white' }}
              >
                {character.mass}
              </span>
            </p>
            <p className="font-shojumaru">
              Hair Color:{' '}
              <span
                className="text-gray-400 ml-5 font-serif text-xl"
                style={{ textShadow: '0 0 2px white' }}
              >
                {character.hair_color}
              </span>
            </p>
            <p className="font-bold font-shojumaru">
              Skin Color:{' '}
              <span
                className="text-gray-400 ml-5 font-serif text-xl"
                style={{ textShadow: '0 0 2px white' }}
              >
                {character.skin_color}
              </span>
            </p>
            <p className="font-bold font-shojumaru">
              Eye Color:{' '}
              <span
                className="text-gray-400 ml-5 font-serif text-xl"
                style={{ textShadow: '0 0 2px white' }}
              >
                {character.eye_color}
              </span>
            </p>
            <p className="font-bold font-shojumaru">
              Birth Year:{' '}
              <span
                className="text-gray-400 ml-5 font-serif text-xl"
                style={{ textShadow: '0 0 2px white' }}
              >
                {character.birth_year}
              </span>
            </p>
            <p className="font-bold font-shojumaru">
              Gender:{' '}
              <span
                className="text-gray-400 ml-5 font-serif text-xl"
                style={{ textShadow: '0 0 2px white' }}
              >
                {character.gender}
              </span>
            </p>
          </div>
          <div className="w-full flex justify-center">
            <Link
              to={'/'}
              className="w-32 text-center flex justify-center items-center p-4 rounded-lg bg-gray-700 text-gray-200 hover:text-gray-300 backLink"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
