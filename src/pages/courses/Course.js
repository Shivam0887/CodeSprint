import { useEffect, useState } from 'react'
import GoToTop from '../../components/GoToTop'
import './course.css'

const Course = () => {
  const [data, setData] = useState([])

  const onActive = [
    'color: darkblue; background: transparent; min-width: 60px',
    'color: white; background: darkblue; min-width: 60px',
  ]

  const content = [
    'All',
    'Web_Development',
    'Data_structure_and_Algorithms',
    'Programming_Languages',
  ]

  const courses = [
    {
      Data_structure_and_Algorithms: [{ DSA: ['B31LgI4Y4DQ', 'BBpAmxU_NQo'] }],
    },
    {
      Web_Development: [
        { HTML: ['UB1O30fR-EE', 'HcOc7P5BMi4'] },
        { CSS: ['yfoY53QXEnI', '1Rs2ND1ryYc'] },
        { Javascript: ['hdI2bqOjy3c', 'W6NZfCO5SIk'] },
        { ReactJs: ['w7ejDZ8SWv8', 'Ke90Tje7VS0'] },
      ],
    },
    {
      Programming_Languages: [
        { 'C++': ['ZzaPdXTrSb8', 'vLnPwxZdW4Y'] },
        { Java: ['UmnCZ7-9yDY', 'aQatrXw0njs'] },
        { Python: ['vLqTf2b6GZw', '_uQrJ0TkZlc'] },
      ],
    },
  ]

  const handleClick = (e) => {
    const select = e.target.id

    for (let i = 1; i < 4; i++) {
      const pattern = `.course__item.${content[i]}`
      const arr = document.querySelectorAll(pattern)
      if (content[i] !== select && select !== 'All') {
        arr.forEach((topic) => topic.classList.add('hide'))
      } else if (document.querySelector(pattern).classList.contains('hide')) {
        arr.forEach((topic) => topic.classList.remove('hide'))
      }
    }

    for (let i = 0; i < 4; i++) {
      document.querySelector(`#${content[i]}`).style.cssText +=
        content[i] === select ? onActive[1] : onActive[0]
    }
  }

  useEffect(() => {
    courses.forEach((course) => {
      const key = Object.keys(course)
      const topic = course[key].map((value, index) => {
        const topicKey = Object.keys(value)

        return (
          <div className={`course__item ${key}`} key={index}>
            <h3>{topicKey}</h3>
            <div className='frame__container'>
              <div className='skeleton__loading1'>
                <div className='loading'>
                  <div className='circle'></div>
                  <div className='para'></div>
                </div>
                <div className='play'></div>
              </div>
              <div className='skeleton__loading2'>
                <div className='loading'>
                  <div className='circle'></div>
                  <div className='para'></div>
                </div>
                <div className='play'></div>
              </div>
              <iframe
                width='380'
                height='250'
                src={`https://www.youtube.com/embed/${value[topicKey][0]}`}
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
              <iframe
                width='380'
                height='250'
                src={`https://www.youtube.com/embed/${value[topicKey][1]}`}
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )
      })
      setData((prev) => [...prev, topic])
    })

    const id = setTimeout(() => {
      const loading1 = document.getElementsByClassName('skeleton__loading1')
      const loading2 = document.getElementsByClassName('skeleton__loading2')

      for (let i = 0; i < loading1.length; i++) {
        loading1[i].classList.add('hide')
        loading2[i].classList.add('hide')
      }
    }, 5000)

    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <div className='course__container'>
      <div className='btn__container'>
        {content.map((val, index) => (
          <button
            key={index}
            className='btn__course'
            id={val}
            style={
              val === 'All'
                ? { background: 'darkblue', color: 'white', minWidth: '60px' }
                : {}
            }
            onClick={handleClick}
          >
            {val.replace(/_/g, ' ')}
          </button>
        ))}
      </div>
      {data && data}
      <GoToTop />
    </div>
  )
}

export default Course
