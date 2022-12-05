import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import ExploreCard from './ExploreCard'
import { dataExp } from './dataExp'
import './explore.css'

const Explore = ({ setSelect }) => {
  const [width, setWidth] = useState()
  const carousel = useRef()
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth + 20)
  }, [])
  return (
    <div className='explore' id='exp'>
      {/* <div className='underline'></div> */}
      <h2>Explore CodeSprint</h2>
      <div className='underline'></div>
      <motion.div
        ref={carousel}
        className='carousel'
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          className='inner-carousel'
        >
          {dataExp.map((feature, idx) => {
            return <ExploreCard {...feature} setSelect={setSelect} key={idx} />
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}
export default Explore
