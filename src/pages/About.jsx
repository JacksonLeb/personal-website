import React from 'react'
import Stars from '../components/Stars'
import { Link } from 'react-router-dom'
import Header from '../svgs/Header.png'
import FirstPic from '../assets/firstLect.jpeg'
import SecondPic from '../assets/secondLect.jpeg'
import ThirdPic from '../assets/thirdLect.jpeg'

function About() {
  return (
    <div className='aboutPage pointer-events-none'>
        <Stars />
        <div className='rounded-lg mt-6 card bg-base-100 pointer-events-auto aboutHeader overflow-auto'>
          <div className='grid grid-cols-3 aboutmeHead mt-4'>
            <h2 className='text-3xl mt-0 font-bold h-16'>
            </h2>
            <h2 className='text-3xl mt-0 font-bold h-16'>
              About Me
            </h2>
            <h2 className='text-3xl mt-0 font-bold h-16'>
            </h2>
          </div>
          <div className='picGrid'>
            <img src={FirstPic} alt='lecture1' className='aboutPic relative rounded-3xl m-auto mt-5'/>
          </div>
          <div className='aboutmeText mx-4 mt-10 text-lg font-bold overflow-auto'>
            <p>
              Hey! My name is Jackson Leb. I am a Sophomore at the University of Michigan 
              working towards my Bachelor's degree in Science majoring in Computer Science 
              as well as Biopsychology, Cognition, and Neuroscience. 
              I have prior experience in Software Development, Analytics, and STEM Education. 
              I demonstrate a history of Software Engineering, Data Analysis, and Systems Engineering 
              throughout my involvement in Technology Consulting and Database Management work. I am 
              seeking opportunities to work in collaborative environments where I can contribute and 
              hone my skills, as well as learn other technical knowledge.
            </p>
          </div>
        </div>
    </div>
  )
}

export default About