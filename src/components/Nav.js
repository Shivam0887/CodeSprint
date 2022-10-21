import React from 'react'
import './nav.css'
const Nav = () => {
  return (
    <nav>
      <div className='navbar'>
        <div className='title'>
          <h3>CodeSprint</h3>
        </div>
        <div className='nav-links'>
          <p>Practice</p>
          <p>Contest</p>
          <p>Courses</p>
        </div>
      </div>
    </nav>
  )
}

export default Nav
