import React from 'react'
import Sun from '../components/Sun'
import AboutPlanet from '../components/AboutPlanet'
import ExperiencePlanet from '../components/ExperiencePlanet'
import ProjectsPlanet from '../components/ProjectsPlanet'

function HomePage() {
  return (
    <div className='homePage'>

      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div id='title'>
      </div>
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