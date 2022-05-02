import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Header from './components/Header';

function App() {
  return <>
    <Router>
      <div className='h-full absolute left-0 w-full overflow-hidden bg-space-grey'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  </>
}

export default App;
