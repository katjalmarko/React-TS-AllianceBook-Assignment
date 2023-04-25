import './App.css';
import { useEffect, useState } from "react";
import { Data } from "./types";
import axios from "axios";
import PeopleList from "./components/PeopleList";

const App = () => {
  
  const [peopleInfo, setPeopleInfo] = useState<Data[]>([])
  const [peoplePhoto, setPeoplePhoto] = useState<any>()

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

  const fetchPhotos = async () => {
    try {
      const photos = await axios.get("https://starwars-visualguide.com/assets/img/characters/1.jpg");
      setPeoplePhoto(photos.data)
      console.log(photos.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
    fetchPhotos();
  }, []);

  return (
    <div className="flex mt-5 mb-20">
      <h1 className="font-black text-2xl mb-5">AllianceBook Assignment </h1>
      <PeopleList 
        peopleInfo={peopleInfo}
        className=""
      />
      <img src={peoplePhoto} alt=""/>
    </div>
  );
}

export default App;
