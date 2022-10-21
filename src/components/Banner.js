import React from 'react'
import './banner.css'
import bn from './../bn.svg'
import { AiOutlineArrowRight } from 'react-icons/ai'
const Banner = () => {
  return (
    <div className='banner'>
      <article className='content'>
        <h1 className='heading'>CodeSprint</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          voluptatum inventore ex minima ullam iste, accusamus veritatis omnis
          quas nihil.
        </p>
        <button className='btn'>
          Explore
          <AiOutlineArrowRight />
        </button>
      </article>
      <div className='img-container'>
        <img src={bn} alt='' />
      </div>
    </div>
  )
}

export default Banner
