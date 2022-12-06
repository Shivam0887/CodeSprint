import { Link } from 'react-router-dom'
import './nav.css'
const Nav = ({ select, setSelect }) => {
  return (
    <nav>
      <div className='navbar'>
        <Link to='/'>
          <div className='title' onClick={() => setSelect('codesprint')}>
            <h3>&#123;CodeSprint&#125;</h3>
          </div>
        </Link>
        <div className='nav-links'>
          <Link to='/Practice'>
            <p
              className={select === 'Practice' ? 'clicked' : ''}
              onClick={() => setSelect('Practice')}
            >
              Practice
            </p>
          </Link>
          <Link to='/Contest'>
            <p
              className={select === 'Contest' ? 'clicked' : ''}
              onClick={() => setSelect('Contest')}
            >
              Contest
            </p>
          </Link>
          <Link to='/Courses'>
            <p
              className={select === 'Courses' ? 'clicked' : ''}
              onClick={() => setSelect('Courses')}
            >
              Courses
            </p>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
