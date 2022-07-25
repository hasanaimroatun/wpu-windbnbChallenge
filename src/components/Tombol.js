import React, {useState} from 'react'
import {MdSearch} from 'react-icons/md'
import imgBnb from './icon/logo.png'
import './myStyle.css'
import Pencarian from './Pencarian'

function Tombol({tambahLokasi, tambahTamu}) {
  const [isOpen, setIsOpen] = useState(false)
  const [pembungkusLBox, setPembungkusLBox] = useState('none')

  const toggleIsOpen = () => {
      setIsOpen(!isOpen)
      setPembungkusLBox('lbox')
  }

  return (
    <div>
        <Pencarian isOpen={isOpen} toggleIsOpen={toggleIsOpen} pembungkusLBox={pembungkusLBox}/>
        <span>
            <img src={imgBnb} alt="logo" className='bnb'/>
        </span>
        <span className='containerTombol'>
          <button onClick={toggleIsOpen} className='kotak1'>{tambahLokasi}</button>
          <button className='kotak2'>{tambahTamu}</button>
          <button  type='submit' className='kotak3'>
              <MdSearch size='1.5em' color='#eb5757'/>
          </button>
        </span>
    </div>
  )
}

export default Tombol