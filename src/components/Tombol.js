import React from 'react'
import {MdSearch} from 'react-icons/md'
import imgBnb from './icon/logo.png'
import './myStyle.css'

function Tombol() {
  return (
    <div>
        <span>
            <img src={imgBnb} alt="logo" className='bnb'/>
        </span>
        <span className='containerTombol'>
          <button className='kotak1'>Add location</button>
          <button className='kotak2'>Add guests</button>
          <button  type='submit' className='kotak3'>
              <MdSearch size='1.5em' color='#eb5757'/>
          </button>
        </span>
    </div>
  )
}

export default Tombol