import {Link} from 'react-router-dom'
import React from 'react'
import AboutIcon from '../svgs/user-astronaut-solid.png'

function AboutPlanet() {
  return (
    <div className='aboutPlanet'>
      <Link to='/about'>
        <img src={AboutIcon} alt='astronaut' className='aboutIcon'/>
      </Link>
    </div>
  )
}

export default AboutPlanet