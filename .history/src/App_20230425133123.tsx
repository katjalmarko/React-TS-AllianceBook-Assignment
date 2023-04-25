import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
import PeopleList from "./components/PeopleList";


const App = () => {
  
  const [peopleInfo, setPeopleInfo] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://swapi.py4e.com/api/people"
      );
      console.log(response)
      setPeopleInfo(response.data.results);
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
