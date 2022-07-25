import React, {useState} from 'react'
import './myStyle.css'
import {MdSearch} from 'react-icons/md'
import Lokasi from './Lokasi'

const Pencarian = ({isOpen, toggleIsOpen, pembungkusLBox}) => {
    const [pilihLokasi, setPilihLokasi] = useState('-Pilih lokasi-')

  return (
    <div>
      {isOpen?
        <div className={pembungkusLBox}>
          <div className='containerTombolLBox'>
            <span>
              <button>
                <div>LOCATION</div>
                <div>{pilihLokasi}</div>
              </button>
            </span>
            <span>
              <button>
                
              </button>
            </span>
            <span>
              <button  onClick={toggleIsOpen} type='submit' className='kotak3'>
                <MdSearch size='1.5em' color='#eb5757'/>
              </button>
            </span>

            <Lokasi setPilihLokasi={setPilihLokasi}/>

          </div>
        </div>
        : null
      }
    </div>
  )
}

export default Pencarian