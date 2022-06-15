import React from 'react'
import PropTypes from 'prop-types'
import { FaLink }  from 'react-icons/fa'

function RepoItem({ repo }) {

    const {
        name,
        description,
        html_url,
    } = repo

  return (
    <div className='mb-2 mx-2 rounded-md card bg-gray-800 hover:bg-gray-900'>
        <a href={html_url}>
        <div className='card-body'>
            <h3 className='mb-2 text-xl font-semibold'>
                    <FaLink className='inline mr-1' /> {name}
            </h3>
            <p className='mb-3'>
                {description}
            </p>
        </div>
        </a>
    </div>
  )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired,
}

export default RepoItem