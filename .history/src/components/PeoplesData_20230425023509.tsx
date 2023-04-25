import React from 'react'

Type PeoplesData = {}

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