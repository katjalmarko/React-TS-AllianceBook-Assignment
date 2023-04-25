import React from 'react'
import PeopleData from './PeopleData'

const PeopleList = ({ people }: any) => {
  return (
    <div>
      {people.map((index) => {
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