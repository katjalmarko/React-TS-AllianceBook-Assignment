import React from 'react'

interface  {
  name: string;
  height: number;
  mass: number;
  gender: string;
}

const PeoplesData = ({name, height, mass, gender}) => {
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