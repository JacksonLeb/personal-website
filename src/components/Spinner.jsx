import React from 'react'
import Earth from '../svgs/EarthSpinner.svg'

function Spinner() {
  return (
    <div>
        <img src={Earth} alt='rocket spinner' className='spinner'/>
    </div>
  )
}

export default Spinner