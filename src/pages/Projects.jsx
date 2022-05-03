import React from 'react'
import { useEffect, useContext } from 'react'
import {FaCode, FaCodepen, FaStore, FaUserFriends, FaUsers} from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'
import { getUser, getUserRepos } from '../context/github/GithubActions'
import Stars from '../components/Stars'
import Spinner from '../components/Spinner'
import RepoList from '../components/repose/RepoList'

function Projects() {

  const {user, repos, loading, dispatch} = useContext(GithubContext)

  const params = useParams()

  useEffect(() => {
    dispatch({type: 'SET_LOADING'})

    const getUserData = async() => {
      console.log("before")
      const userData = await getUser(params.login)
      console.log("after")
      dispatch({type: 'GET_USER', payload: userData})
      

      const userRepoData = await getUserRepos(params.login)
      dispatch({type: 'GET_REPOS', payload: userRepoData})
    }
    getUserData()
  }, [])


  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user
  console.log(name)

  if(loading) {
    return  (
      <div>
        <Stars />
        <Spinner />
      </div>
    )
  }

  return (
    <div className='projectsPage pointer-events-none'>
        <Stars />
        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
            <div className='custom-card-image mb-6 md:mb-0'>
                <div className='rounded-xl'>
                  <a href={html_url} className='pointer-events-auto'>
                    <img src={avatar_url} alt='profile' className='rounded-full'/>
                  </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects