import './App.css';
import { useEffect, useState } from "react";
import { Data } from "./types";
import axios from "axios";
import PeopleList from "./components/PeopleList";

const App = () => {
  
  const [peopleInfo, setPeopleInfo] = useState<Data[]>([])
  const [peoplePhoto, setPeoplePhoto] = useState("")

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


  const fetchPhoto = async () => {
    try {
      const photos = [];
      for (let i = 1; i <= 87; i++) {
        const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${i}.jpg`;
        const response = await axios.get(imageUrl);
        photos.push(response.data);
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
        <img 
          src={peoplePhoto} 
          alt="photo"
          className='h-50 w-50'
          />
      </div>
    </div>
  );
}

export default App;
