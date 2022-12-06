import './style.css'
import { Link } from 'react-router-dom'
import GoToTop from '../GoToTop'
import Card from './Card'

function ProblemCard({ callback }) {
  return (
    <div className='container__'>
      <h1
        style={{
          textAlign: 'center',
          color: 'white',
          margin: '20px',
          userSelect: 'none',
          padding: '0 1rem',
          lineHeight: '1.5',
          border: '2px solid darkblue',
          borderRadius: '1rem',
          width: 'max-content',
          letterSpacing: '0.07rem',
          fontStyle: 'oblique',
          background: 'darkblue',
        }}
      >
        Curated DSA Lists
      </h1>
      <div className='card-container'>
        <Link to='/practice/sde-sheet-love-babbar' className='link'>
          <Card title='By Love Babbar' totalProblems='400+' />
        </Link>
        <Link to='/practice/sde-sheet-striver' className='link'>
          <Card title='By Striver' totalProblems='180+' />
        </Link>
        <Link to='/practice/sde-sheet-shradha' className='link'>
          <Card title='By Shradha Didi' totalProblems='350+' />
        </Link>
      </div>
      <GoToTop />
    </div>
  )
}

export default ProblemCard
