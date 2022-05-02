import React from 'react'
import ProfilePic from '../svgs/ProfilePic.png'
import JacksonLebText from '../svgs/JacksonLebText.svg'

function ProfilePicPlanet() {
  return (
    <div className=''>
      <img src={ProfilePic} alt='profile-pic' className='w-20 h-16'/>
      <img src={JacksonLebText} alt='Jackson Leb' className='sunText relative w-20 h-16 nameText'/>
    </div>
    
  )
}

export default ProfilePicPlanet