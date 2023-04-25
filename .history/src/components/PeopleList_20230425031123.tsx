import React from 'react'
import PeopleData from './PeopleData'

const PeopleList = ({ peopleInfo: any }) => {
  return (
    <div>
      {peopleInfo.map((people: any, index: any) => {
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