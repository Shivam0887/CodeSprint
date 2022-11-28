import React from 'react'
import './landing.css'
import Banner from '../../components/Banner'
import Explore from './Explore'

const LandingPage = ({select, setSelect}) => {
  
  return (
    <div className='landing'>
      <Banner />
      <Explore select={select} setSelect={setSelect} />
    </div>
  )
}

export default LandingPage
