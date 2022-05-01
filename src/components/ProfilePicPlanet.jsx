import React from 'react'
import ProfilePic from '../svgs/ProfilePic.png'
import JacksonLebText from '../svgs/JacksonLebText.svg'

function ProfilePicPlanet() {
  return (
    <div>
        <div>
            <img className='nameText' src={JacksonLebText} alt='jackson-leb' />
        </div>
        <div>
            <img src={ProfilePic} alt='profile-pic' />
        </div>
        
    </div>
  )
}

export default ProfilePicPlanet