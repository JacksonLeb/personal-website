import React from 'react'
import School from '../svgs/school-solid.png'
import CoursworkText from '../svgs/Coursework.svg'

function CourseworkPlanet() {
  return (
    <div>
      <div className='courseworkRotationPoint relative border-2 w-32 h-32'></div>
      <div className='courseworkPlanet abosolute'>
          <img src={School} alt='schoolBuilding' className='border-2 relative left-12 w-8 h-8'/>
          <img src={CoursworkText} alt='courswork' className='courseworkText relative bottom-11 left-2 w-14 h-14' />
      </div>
    </div>
  )
}

export default CourseworkPlanet