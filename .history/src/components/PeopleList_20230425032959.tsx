import React from 'react'
import PeopleData from './PeopleData'

const PeopleList = ({ peopleInfo }: any) => {
  return (
    <div>
      {peopleInfo.map((person : any) => {
        return (
          <PeopleData 
            key={index}
            name={person.name}
            height={person.height}
            mass={persone.mass}
            gender={people.gender}
          />
        )
      })}
    </div>
  )
}

export default PeopleList