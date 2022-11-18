import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import LandingPage from './pages/LandingPage/LandingPage'
import Contest from './pages/ContestPage/Contest'

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/Contest' element={<Contest />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
