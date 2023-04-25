import { useQuery } from "@tanstack/react-quer"
import './App.css';
import PeopleList from './components/PeopleList';
import axios from 'axios';

const fetchPeopleInfo = async () => {
  const response = await axios.get('https://swapi.py4e.com/api/people');
  return response.data.results;
};

const App = () => {
  const { data: peopleInfo, isLoading, error } = useQuery('people', fetchPeopleInfo);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="">
      <h1 className="font-black text-2xl">AllianceBook Assignment </h1>
      <PeopleList peopleInfo={peopleInfo} />
    </div>
  );
};

export default App;