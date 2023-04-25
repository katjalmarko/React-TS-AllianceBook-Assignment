import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
import PeopleList from "./components/PeopleList";

interface Data {}

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
