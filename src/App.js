import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { GithubProvider } from './context/github/GithubContext';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';

function App() {
  return <>
  <GithubProvider>
    <Router>
      <div className='pageContainer absolute h-full left-0 w-full overflow-hidden bg-space-grey'>
        <Header className='header'/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
      </div>
    </Router>
    </GithubProvider>
  </>
}

export default App;