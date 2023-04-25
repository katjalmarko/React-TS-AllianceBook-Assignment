import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
import PeopleList from "./components/PeopleList";

interface Data {
  name: string; 
  height: "202"; 
  mass: "136";
  birth_year: "41.9BBY"
  created: "2014-12-10T15:18:20.704000Z"
  edited: "2014-12-20T21:17:50.313000Z"
  eye_color: "yellow"
  films: Array(4) [ "https://swapi.py4e.com/api/films/1/", "https://swapi.py4e.com/api/films/2/", "https://swapi.py4e.com/api/films/3/", … ]
  gender: "male"
  hair_color: "none"
  height: "202"
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
