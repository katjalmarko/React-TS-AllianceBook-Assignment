import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";

const App = () => {
    const [peopleData, setPeopleData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://swapi.py4e.com/api/people"
        );
        setPeopleData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <h1 className="font-black text-2xl">AllianceBook Assignment </h1>

      <p className="font-bold mt-5">Test </p>
    </div>
  );
}

export default App;