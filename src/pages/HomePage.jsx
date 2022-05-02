import React from 'react'
import Sun from '../components/Sun'
import AboutPlanet from '../components/AboutPlanet'

function HomePage() {
  return (
    <div className='homePage'>
      <AboutPlanet />
      <div className='innerRing'>
        <Sun />
      </div>
    </div>
  )
}

export default HomePage