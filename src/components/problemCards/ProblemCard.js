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
          color: 'whitesmoke',
          marginTop: '20px',
          userSelect: 'none',
        }}
      >
        DSA SDE-SHEET
      </h1>
      <div className='div1'> </div>
      <div className='div2'> </div>
      <div className='card-container'>
        <Link to='/practice/sde-sheet-love-babbar' className='link'>
          <Card title='By Love Babbar' totalProblems='400+' />
        </Link>
        <Link to='/practice/sde-sheet-striver' className='link'>
          <Card title='By Striver' totalProblems='180+' />
        </Link>
        <Link to='/practice/sde-sheet-shradha' className='link'>
          <Card title='By Shradha Didi & Aman Bhaiya' totalProblems='350+' />
        </Link>
      </div>
      <GoToTop />
    </div>
  )
}

export default ProblemCard
