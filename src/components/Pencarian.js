import React, {useState, useEffect} from 'react'
import './myStyle.css'
import {MdSearch} from 'react-icons/md'
import Lokasi from './Lokasi'
import Guests from './Guests'

const Pencarian = ({isOpen, toggleIsOpen, pembungkusLBox}) => {
    const [pilihLokasi, setPilihLokasi] = useState(<div className='tambahLokasiDanTamu'>Add location</div>)
    const [tambahkanTamu, setTambahkanTamu] = useState()

    useEffect(() => {
      setTambahkanTamu(<div className='tambahLokasiDanTamu'>Add guests</div>)
    }, [])
    
  return (
    <div>
      {isOpen?
        <div className={pembungkusLBox}>
          <div className='containerTombolLBox'>
            <span>
              <button className='tombolLokasi'>
                <div className='lokasiDanTamu'>LOCATION</div>
                <div>{pilihLokasi}</div>
              </button>
            </span>
            <span>
              <button className='tombolTamu'>
                <div className='lokasiDanTamu'>GUESTS</div>
                <div>{tambahkanTamu}</div>
              </button>
            </span>
            <span>
              <button  onClick={toggleIsOpen} type='submit' className='tombolPencarian'>
                <MdSearch size='1.5em' color='#f2f2f2' className='gbrPencarian'/>
                <span className='pencarian'>Search</span>
              </button>
            </span>

            <div>
              <Lokasi setPilihLokasi={setPilihLokasi} />
              <Guests setTambahkanTamu={setTambahkanTamu} />
            </div>

          </div>
        </div>
        : null
      }
    </div>
  )
}

export default Pencarian