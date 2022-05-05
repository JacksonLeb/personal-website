import React from 'react'
import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
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
  }, [dispatch, params.login])


  const {
    html_url,
  } = user

  if(loading) {
    return  (
      <div>
        <Stars />
        <Spinner />
      </div>
    )
  }

  return (
    <div className='projectsPage pointer-events-none h-full overflow-auto'>
        <Stars />
        <div className='projectsHeader'>
          <h1 className='text-good-blue font-bold text-3xl ml-2 mt-2'>Projects</h1>
        </div>
        <div className='relative'>
          <a href={html_url} className='pointer-events-auto'>
            <img src={GithubAvatar} alt='profile' className='githubPic relative rounded-3xl m-auto mt-5 h-1/4'/>
          </a>
        </div>
        <RepoList repos={repos} className='pointer-events-auto'/>
    </div>
  )
}

export default Projects