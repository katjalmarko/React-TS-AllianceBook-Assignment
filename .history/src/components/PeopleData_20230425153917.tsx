import React from 'react'
import { Person } from '../types'

const PeopleData = ({name, height, mass, gender, url}: Person) => {
  return (
    
  <div>
      <h2>{name}</h2>
      <p>{height}</p>
      <p>{mass}</p>
      <p>{gender}</p>
      <p>{url}</p>
    </div>
  )
}

export default PeopleData