import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
import PeopleList from "./components/PeopleList";

const App = () => {
  
  const [people, setPeople] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://swapi.py4e.com/api/people"
        );
        setPeople(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <h1 className="font-black text-2xl">AllianceBook Assignment </h1>
      <PeopleList
    </div>
  );
}

export default App;
