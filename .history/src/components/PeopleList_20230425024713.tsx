import React from 'react'
import PeoplesData from './PeopleData'
import PeopleData from './PeopleData'

const PeopleList = ({ people }) => {
  return (
    <div>
      {people.map((index: any) => {
        return (
          <PeopleData 
            key={index}
          />
        )
      })}
    </div>
  )
}

export default PeopleList