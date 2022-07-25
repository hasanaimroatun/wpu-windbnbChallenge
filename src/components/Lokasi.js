import React from 'react'
import {MdLocationPin} from 'react-icons/md'
import Stays from './stays.json'

function Lokasi({setPilihLokasi}) {
  const location = []

  Stays && Stays.map(stay => {
    return (
      !location.includes(stay.city)? (location.push(stay.city)) : null
    )
  })
   
  return (
    <div>
      {location && location.map((l) => {
        return (
          <div key={l.charCodeAt(0)} onClick={() => {setPilihLokasi(`${l}, Findland`)}}>
            <MdLocationPin size='1.5em' color='#eb5757'/>
            <span>{l}, Findland</span>
          </div>
        )
      })}
    </div>
  )
}

export default Lokasi