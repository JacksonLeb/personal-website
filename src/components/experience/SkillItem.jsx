import React from 'react'

function SkillItem({ name }) {
  return (
     <h3 className='mb-2 text-xl font-semibold'>
        <div className='mr-2 badge badge-secondary badge-xlg'>
            {name}
        </div>
    </h3>
  )
}

export default SkillItem