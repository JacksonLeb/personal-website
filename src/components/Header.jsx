import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <Link to='/about'>
        <h1 className='text-good-blue font-bold text-5xl ml-2 mt-2'>Jackson Leb</h1>
        <h3 className='text-good-blue font-semibold text-xl ml-2'>Developer ● Leader ● Student</h3>
      </Link>
    </div>
  )
}

export default Header