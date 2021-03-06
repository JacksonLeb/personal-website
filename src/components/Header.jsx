import React from 'react'
import { FaLinkedin, FaFile } from 'react-icons/fa'
import Resume from '../assets/JacksonLeb2024.pdf'


function Header() {
  return (
    <div className='header'>
        <h1 className='headerMain text-good-blue font-bold text-5xl ml-4 mt-4'>
          <a href='/' className=''>
            Jackson Leb
          </a>
        </h1>
        <h3 className='text-good-blue font-semibold text-xl ml-4'>
          <a href='/' className='headerSecondary'>
            Developer / Leader / Student
          </a>
        </h3>
        <div className='hotButtons text-good-blue grid grid-cols-2 text-2xl inline w-1/2 pointer-events-auto'>
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