import React from 'react'

interface Peopletype {
  name: string;
  height: number;
  mass: number;
  gender: string;
}

const PeopleData = ({name, height, mass, gender}: Peopletype) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{height}</p>
      <p>{mass}</p>
      <p>{gender}</p>
    </div>
  )
}

export default PeoplesData