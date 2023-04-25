import React from 'react'
import PeopleData from './PeopleData'

const PeopleList = ({ peopleData }: any) => {
  return (
    <div>
      {peopleData?.map((person : any, index : number) => {
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