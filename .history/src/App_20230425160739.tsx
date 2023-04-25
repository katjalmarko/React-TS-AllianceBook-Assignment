import './App.css';
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query"
import { Data } from "./types";
import axios from "axios";
import PeopleList from "./components/PeopleList";

const App = () => {
  
  const [peopleInfo, setPeopleInfo] = useState<Data[]>([])
  const [peoplePhoto, setPeoplePhoto] = useState<string[]>()

  // const {} = useQuery({'peopleData'}, async () => {
    
  // })
  const fetchData = async () => {
    try {
      const people = [];
      let nextUrl = "https://swapi.py4e.com/api/people";
      while (nextUrl) {
        const response = await axios.get(nextUrl);
        people.push(...response.data.results);
        nextUrl = response.data.next;
      }
      console.log(people);
      setPeopleInfo(people);
    } catch (error) {
      console.log(error);
    }
  };

  // const fetchData = async () => {
  //   try {
  //     const people = [];
  //     let nextUrl = "https://swapi.py4e.com/api/people";
  //     for (let i = 0; nextUrl !== null; i++) {
  //       const response = await axios.get(nextUrl);
  //       people.push(...response.data.results);
  //       nextUrl = response.data.next;
  //     }
  //     console.log(people);
  //     setPeopleInfo(people);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  const fetchPhoto = async () => {
    try {
      const photos = [];
      while (photos) {
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
    fetchData();
    fetchPhoto();
  }, []);

  return (
    <div className="mt-5 mb-20 h-screen">
      <div className=''>
        <h1 className="font-black text-2xl mb-5">AllianceBook Assignment </h1>
        <PeopleList 
          peopleInfo={peopleInfo}
          className=""
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
