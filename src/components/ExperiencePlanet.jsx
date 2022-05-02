import React from 'react'
import {Link} from 'react-router-dom'
import RocketIcon from '../svgs/rocket-solid.png'

function ExperiencePlanet() {
  return (
    <div className='experiencePlanet'>
      <Link to='/experience'>
        <img src={RocketIcon} alt='rocket' className='rocketIcon'/>
      </Link>
    </div>
  )
}

export default ExperiencePlanet