import React from 'react'
import PeopleData from './PeopleData'
import { Peopletype } from '../types'

const PeopleList = ({ peopleInfo }: Peopletype) => {
  return (
    <div>
      {peopleInfo.map((people, index): any => {
        return (
          <PeopleData 
            key={index}
            name={people.name}
            height={people.height}
            mass={people.mass}
            gender={people.gender}
          />
        )
      })}
    </div>
  )
}

export default PeopleList