import React from 'react'
import PeopleData from './PeopleData'

const PeopleList = ({ peopleInfo }: any) => {
  return (
    <div>
      {PeopleData.map((person : any, index : number) => {
        return (
          <PeopleData 
            key={index}
            name={person.name}
            height={person.height}
            mass={person.mass}
            gender={person.gender}
            url={person.url}
          />
        )
      })}
    </div>
  )
}

export default PeopleList