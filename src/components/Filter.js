import React from 'react'
import Stays from './stays.json'

function Filter() {
    let filter = Stays && Stays.filter(stay => {return stay.city === 'Helsinki'})
    console.log(filter)
  return (
    <div></div>
  )
}

export default Filter