import React from 'react'
import PeopleData from './PeopleData'

const PeopleList = ({ peopleInfo }: any) => {
  return (
    <div>
      {peopleInfo.map((index) => {
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