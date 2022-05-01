import React from 'react'
import ProfilePic from '../svgs/ProfilePic.png'
import JacksonLebText from '../svgs/JacksonLebText.svg'

function ProfilePicPlanet() {
  return (
    <div className='profilePicPlanet'>
        <img className='nameText' src={JacksonLebText} alt='jackson-leb' />
        <img className='sun' src={ProfilePic} alt='profile-pic' />
    </div>
  )
}

export default ProfilePicPlanet