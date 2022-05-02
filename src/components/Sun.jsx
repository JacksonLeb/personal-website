import React from 'react'
import ProfilePic from '../svgs/ProfilePic.png'
import JacksonLeb from '../svgs/JacksonLeb.png'

function Sun() {
  return (
    <div className='sun'>
        <img src={JacksonLeb} alt='JacksonLeb' className='sunTextOrbit'/>
        <img src={ProfilePic} alt='headshot' className='profilePic'/>
    </div>
  )
}

export default Sun