import React from 'react'

function CourseItem({ title, link }) {
  return (
    <div className='courseItem mb-2 rounded-md card bg-gray-800'>
        <div className='courseCard card-body w-full ml-0 mb-2'>
            <a href={link}>
            <h3 className='mb-9 font-semibold text-white'>
             {title}
            </h3>
            </a>
        </div>
    </div>
  )
}

export default CourseItem