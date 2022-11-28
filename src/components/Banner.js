import React from 'react'
import './banner.css'
import bn from './../assets/bn.svg'
import { AiOutlineArrowRight } from 'react-icons/ai'
const Banner = () => {
  return (
    <div className='banner'>
      <article className='content'>
        <h1 className='heading'>CodeSprint</h1>
        <p>Get! Set! Code...</p>
        <a href='#exp'>
          <button className='btn'>
            Explore
            <AiOutlineArrowRight className='arrow' />
          </button>
        </a>
      </article>
      <div className='img-container'>
        <img src={bn} alt='' />
      </div>
    </div>
  )
}

export default Banner
