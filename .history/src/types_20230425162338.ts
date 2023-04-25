export interface PersonInfo {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: any[];
}

export interface Person {
  name: string;
  height: number;
  mass: number;
  gender: string;
  url: string;
}

export type DataType = {
  data?: 
}