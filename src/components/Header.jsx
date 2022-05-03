import React from 'react'
import {Link, Router} from 'react-router-dom'


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
            Developer ● Leader ● Student
          </a>
        </h3>
    </div>
  )
}

export default Header