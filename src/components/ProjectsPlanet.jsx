import React from 'react'
import {Link} from 'react-router-dom'
import ProjectsIcon from '../svgs/meteor-solid.png'

function ProjectsPlanet() {
  return (
    <div className='projectsPlanet'>
        <Link to='/projects'>
            <img src={ProjectsIcon} alt='meteor' className='meteorIcon pointer-events-auto'/>
        </Link>
    </div>
  )
}

export default ProjectsPlanet