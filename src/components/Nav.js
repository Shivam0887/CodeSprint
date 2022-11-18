import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
const Nav = () => {
  return (
    <nav>
      <div className='navbar'>
        <Link to='/'>
          <div className='title'>
            <h3>&#123;CodeSprint&#125;</h3>
          </div>
        </Link>
        <div className='nav-links'>
          <Link to='#'>
            <p>Practice</p>
          </Link>
          <Link to='/Contest'>
            <p>Contest</p>
          </Link>
          <Link to='#'>
            <p>Courses</p>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
