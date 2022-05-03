import React from 'react'
import Sun from '../components/Sun'
import AboutPlanet from '../components/AboutPlanet'
import ExperiencePlanet from '../components/ExperiencePlanet'
import ProjectsPlanet from '../components/ProjectsPlanet'
import Stars from '../components/Stars'

function HomePage() {
  return (
    <div className='homePage pointer-events-none'>
      <Stars />
      <ProjectsPlanet />
      <div className='outterRing'>
        <ExperiencePlanet />
        <div className='middleRing'>
          <AboutPlanet />
          <div className='innerRing'>
            <Sun />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage