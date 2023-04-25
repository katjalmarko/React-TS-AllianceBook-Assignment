import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
import PeopleList from "./components/PeopleList";

interface Data {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: "https://swapi.py4e.com/api/planets/1/"
  mass: "136"
  name: "Darth Vader"
  skin_color: "white"
  species: Array [ "https://swapi.py4e.com/api/species/1/" ]
  starships: Array [ "https://swapi.py4e.com/api/starships/13/" ]
  url: "https://swapi.py4e.com/api/people/4/"
  vehicles: Array []
  <prototype>: Object { … }
}

const App = () => {
  
  const [peopleInfo, setPeopleInfo] = useState([{}])

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      <h1 className="font-black text-2xl">AllianceBook Assignment </h1>
      <PeopleList peopleInfo={peopleInfo}/>
    </div>
  );
}

export default App;
