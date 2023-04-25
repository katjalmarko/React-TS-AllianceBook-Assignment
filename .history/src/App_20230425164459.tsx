import './App.css';
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query"
import { PersonInfo } from "./types";
import { DataType } from './types';
import axios from "axios";
import PeopleList from "./components/PeopleList";

const App = () => {
  
  const [peoplePhoto, setPeoplePhoto] = useState<string[]>()


  // const { data: peopleData, isLoading, isError } : DataType = useQuery(['peopleData'], async () => {
  //   try {
  //     const people : PersonInfo[] = [];
  //     let nextUrl = "https://swapi.py4e.com/api/people";
  //     while (nextUrl) {
  //       const response = await axios.get(nextUrl);
  //       people.push(...response.data.results);
  //       nextUrl = response.data.next;
  //     }
  //     console.log(people);
  //     return people;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });

  
  const { data: peopleData, isLoading, isError } : DataType = useQuery(['peopleData'], async () => {
    return await axios
    .get("https://swapi.py4e.com/api/people")
    .then((res: ))
  });

  

  const fetchPhoto = async () => {
    try {
      const photos = [];
      for (let i = 1; i <= 87; i++) {
        try {
          const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${i}.jpg`;
          const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
          const blob = new Blob([response.data], { type: 'image/jpeg' });
          const url = URL.createObjectURL(blob);
          photos.push(url);
        } catch (error) {
          console.log(`Error fetching image for character ID ${i}: ${error}`);
          continue;
        }
      }
      console.log(photos);
      setPeoplePhoto(photos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPhoto();
  }, []);

  return (
    <div className="mt-5 mb-20 h-screen">
      <div className=''>
        <h1 className="font-black text-2xl mb-5">AllianceBook Assignment </h1>
        <PeopleList 
          peopleData={peopleData}
        />
      </div>
      <div>
        {peoplePhoto?.map((onePhoto, index) => 
        <img 
          src={onePhoto} 
          alt="photo"
          key={index} 
          className='h-50 w-50'
        />
        )}
      </div>
    </div>
  );
}

export default App;
