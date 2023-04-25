import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";

function App() {
  const [peopleData, setPeopleData] = useState([])

  useEffect(async () => {
    const reponse = await axios.get(
      "https://swapi.py4e.com/api/people"
    );
    
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <h1 className="font-black text-2xl">AllianceBook Assignment </h1>

      <p className="font-bold mt-5">Test </p>
    </div>
  );
}

export default App;
