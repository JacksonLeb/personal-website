import React from 'react'
import { useEffect, useContext } from 'react'
import {FaGithubSquare, FaCode, FaCodepen, FaStore, FaUserFriends, FaUsers} from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'
import { getUser, getUserRepos } from '../context/github/GithubActions'
import Stars from '../components/Stars'
import Spinner from '../components/Spinner'
import RepoList from '../components/repose/RepoList'
import GithubAvatar from '../svgs/githubAvatar.png'

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
  console.log("USER")
  console.log(user)
  console.log("loading")
  console.log(loading)
  console.log("repos")
  console.log(repos)

  if(loading) {
    return  (
      <div>
        <Stars />
        <Spinner />
      </div>
    )
  }

  return (
    <div className='projectsPage pointer-events-none h-full'>
        <Stars />
        <div className='projectsHeader'>
          <h1 className='text-good-blue font-bold text-3xl ml-2 mt-2'>Projects</h1>
        </div>
        <div className='relative'>
          <a href={html_url} className='pointer-events-auto'>
            <img src={GithubAvatar} alt='profile' className='githubPic relative rounded-3xl m-auto mt-5 h-1/4'/>
          </a>
        </div>
          <div className='statsBar py-5 my-4 rounded-lg stats overflow-auto pointer-events-auto'>
            <div className='stat'>
                <div className='stat-figure text-secondary'>
                    <FaUsers className='text-3xl md:text-5xl' />
                </div>
                <div className='stat-title pr-5'>
                    Followers
                </div>
                <div className='stat-value pr-5 text-3xl md:text-4xl'>
                    {followers}
                </div>
            </div>
            <div className='stat'>
                <div className='stat-figure text-secondary'>
                    <FaUserFriends className='text-3xl md:text-5xl' />
                </div>
                <div className='stat-title pr-5'>
                    Following
                </div>
                <div className='stat-value pr-5 text-3xl md:text-4xl'>
                    {following}
                </div>
            </div>
            <div className='stat'>
                <div className='stat-figure text-secondary'>
                    <FaCodepen className='text-3xl md:text-5xl' />
                </div>
                <div className='stat-title pr-5'>
                    Public Repos
                </div>
                <div className='stat-value pr-5 text-3xl md:text-4xl'>
                    {public_repos}
                </div>
            </div>
            <div className='stat'>
                <div className='stat-figure text-secondary'>
                    <FaStore className='text-3xl md:text-5xl' />
                </div>
                <div className='stat-title pr-5'>
                    Public Gists
                </div>
                <div className='stat-value pr-5 text-3xl md:text-4xl'>
                    {public_gists}
                </div>
            </div>
        </div>
        <RepoList repos={repos} className='pointer-events-auto'/>
    </div>
  )
}

export default Projects