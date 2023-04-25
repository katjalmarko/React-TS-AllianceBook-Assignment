import React from 'react'
import PeopleData from './PeopleData'

const PeopleList = ({ peopleInfo }) => {
  return (
    <div>
      {peopleInfo.map((people: any, index) => {
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