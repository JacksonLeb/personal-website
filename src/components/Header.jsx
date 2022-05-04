import React from 'react'
import { FaEnvelope, FaLinkedin, FaFile } from 'react-icons/fa'
import Resume from '../assets/Leb, Jackson.pdf'


function Header() {
  return (
    <div className='header'>
        <h1 className='headerMain text-good-blue font-bold text-5xl ml-2 mt-2'>
          <a href='/' className=''>
            Jackson Leb
          </a>
        </h1>
        <h3 className='text-good-blue font-semibold text-xl ml-2'>
          <a href='/' className='headerSecondary'>
            Developer / Leader / Student
          </a>
        </h3>
        <div className='hotButtons text-good-blue grid grid-cols-3 text-2xl inline w-1/4 pointer-events-auto'>
          <a href='mailto: lebj@umich.edu'>
            <FaEnvelope />
          </a>
          <a href='https://www.linkedin.com/in/jackson-leb/'>
            <FaLinkedin />
          </a>
          <a href={Resume} download>
            <FaFile />
          </a>
        </div>
    </div>
  )
}

export default Header