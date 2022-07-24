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
            <input type="text" className='kotak1'/>
            <input type="text" className='kotak2'/>
            <button className=''>
                <MdSearch size='1.5em' color='#eb5757'/>
            </button>
        </span>
    </div>
  )
}

export default Tombol