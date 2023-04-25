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

  const characterId = 1
  const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;

  axios.get(imageUrl)
    .then(response => {
      console.log(response.data);
      setPeoplePhoto(imageUrl)
    })
    .catch(error => {
      console.error(error);
    });


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-5 mb-20 w-screen h-full">
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
