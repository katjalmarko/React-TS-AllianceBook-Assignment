import './App.css';
import { useEffect, useState } from "react";
import { Data } from "./types";
import axios from "axios";
import PeopleList from "./components/PeopleList";

const App = () => {
  
  const [peopleInfo, setPeopleInfo] = useState<Data[]>([])
  const [peoplePhoto, setPeoplePhoto] = useState("")

  const fetchPhoto = async () => {
  try {
    const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;
    axios.get(imageUrl)
      .then(response => {
        console.log(response.data);
        setPeoplePhoto(response.data);
      });
  } catch (error) {
    console.log(error);
  }
};


const characterId = 1
const fetchPhoto = async () => {
  try {
  const imageUrl = await axios.get(`https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`)
    .then(response => {
      console.log(response.data);
      setPeoplePhoto(imageUrl)
    });
  } catch (error) {
    console.log(error);
  }

  useEffect(() => {
    fetchData();
    fetchPhoto();
  }, []);

  return (
    <div className="mt-5 mb-20 h-screen">
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
}

export default App;
