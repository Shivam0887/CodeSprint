import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import LandingPage from './pages/LandingPage/LandingPage'
import Contest from './pages/ContestPage/Contest'

function App() {
  const [select, setSelect] = useState(undefined)
  return (
    <div className='App'>
      <Router>
        <Nav select={select} setSelect={setSelect} />
        <Routes>
          <Route
            path='/'
            element={<LandingPage select={select} setSelect={setSelect} />}
          />
          <Route path='/Contest' element={<Contest />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
