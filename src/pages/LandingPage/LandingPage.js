import React from 'react'
import './landing.css'
import Banner from '../../components/Banner'
import Explore from './Explore'
import GoToTop from '../../components/GoToTop'

const LandingPage = ({ select, setSelect }) => {
  return (
    <div className='landing'>
      <Banner />
      <Explore select={select} setSelect={setSelect} />
      <GoToTop />
    </div>
  )
}

export default LandingPage
