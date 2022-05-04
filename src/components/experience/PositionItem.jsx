import React from 'react'
import { FaIdBadge, FaBuilding, FaClock} from 'react-icons/fa'

function RepoItem({ position, employer, time, description, media }) {

  return (
    <div className='positionItem mb-2 mx-2 rounded-md card bg-gray-800 overflow-auto'>
        <div className='card-body w-full ml-0 inline'>
            <h3 className='mb-2 text-xl font-semibold'>
                <div className='mr-2 badge badge-warning badge-xlg'>
                    <FaIdBadge className='inline' /> {position}
                </div>
            </h3>
            <div className='mr-2 badge badge-info badge-xlg'>
                    <FaBuilding className='inline' /> {employer}
             </div>
            <div className='mr-2 badge badge-success badge-xlg'>
                    <FaClock className='inline' /> {time}
            </div>
            <p className='mb-3 mt-1'>
                {description}
            </p>
        </div>
    </div>
  )
}

export default RepoItem