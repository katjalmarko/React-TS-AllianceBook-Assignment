import React from 'react'
import { Peopletype } from './types'

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

export default PeopleData