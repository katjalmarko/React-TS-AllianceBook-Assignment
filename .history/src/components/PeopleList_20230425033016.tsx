import React from 'react'
import PeopleData from './PeopleData'

const PeopleList = ({ peopleInfo }: any) => {
  return (
    <div>
      {peopleInfo.map((person : any) => {
        return (
          <PeopleData 
            key={nuz}
            name={person.name}
            height={person.height}
            mass={person.mass}
            gender={person.gender}
          />
        )
      })}
    </div>
  )
}

export default PeopleList