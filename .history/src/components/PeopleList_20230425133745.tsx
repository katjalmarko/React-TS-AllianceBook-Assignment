import React from 'react'
import PeopleData from './PeopleData'

const PeopleList = ({ peopleInfo }: any) => {
  return (
    <div>
      {peopleInfo.map((person : any, index) => {
        return (
          <PeopleData 
            key={null}
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