import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
import PeopleList from "./components/PeopleList";

const App = () => {

  const [peopleInfo, setPeopleInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allPeople: any = [];
        for (let i = 1; i <= 87; i++) {
          const response = await axios.get(`https://swapi.py4e.com/api/people/${i}`);
          allPeople.push(response.data);
        }
        setPeopleInfo(allPeople);
      } catch (error) {
        console.log(error);
      }
    };
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