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
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ textShadow: '0 0 10px black' }}
    >
      <div className="flex flex-col md:flex-row justify-center items-center p-8 bg-gray-700/60 border border-white rounded-lg shadow-md text-white w-11/12 md:w-2/3 lg:w-1/2">
        <img
          src={photoUrl}
          alt={character.name}
          className="rounded-lg w-48 md:w-64 mb-8 md:mb-0 md:mr-8"
        />
        <div className="space-y-6">
          <div className="space-y-2 bg-black p-8 rounded-lg">
            <h2 className="text-xl font-bold animate-pulse mb-6">
              {character.name}
            </h2>
            <p className="font-bold font-shojumaru">
              Height: {character.height}
            </p>
            <p className="font-bold font-shojumaru">Mass: {character.mass}</p>
            <p className="font-shojumaru">Hair Color: {character.hair_color}</p>
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
            className="flex justify-center items-center p-4 rounded-lg bg-black backLink"
          >
            Back to Database
          </Link>
        </div>
      </div>
    </div>
  );
};
