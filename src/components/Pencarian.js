import React from 'react'
import './myStyle.css'
import {MdSearch} from 'react-icons/md'

const Pencarian = ({isOpen, toggleIsOpen, pembungkusLBox}) => {
 
  return (
    <div>
      {isOpen?
        <div className={pembungkusLBox}>
          <div className='containerTombolLBox'>
            <span>
              <select name="lokasi" id="lokasi">
                <option value="lokasi1">coba</option>
                <option value="lokasi2">coba2</option>
              </select>
            </span>
            <span>
              <button  onClick={toggleIsOpen} type='submit' className='kotak3'>
                <MdSearch size='1.5em' color='#eb5757'/>
              </button>
            </span>
          </div>
        </div>
        : null
      }
        
    </div>
  )
}

export default Pencarian