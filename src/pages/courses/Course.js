import { useEffect, useState } from 'react';
import {content, courses} from './CourseData';

import './course.css'

const Course = () => {
  const [data, setData] = useState([]);

  const onActive = [
    'color: darkblue; background: transparent; min-width: 60px',
    'color: white; background: darkblue; min-width: 60px',
  ]

  const handleClick = (e) => {
    const select = e.target.id

    for (let i = 1; i < 4; i++) {
      const pattern = `.course__item.${content[i]}`
      const arr = document.querySelectorAll(pattern);

      if (content[i] !== select && select !== 'All') 
        arr.forEach((topic) => topic.classList.add('hide'))
      else if (document.querySelector(pattern).classList.contains('hide'))
        arr.forEach((topic) => topic.classList.remove('hide'))
    }

    for (let i = 0; i < 4; i++) {
      document.querySelector(`#${content[i]}`).style.cssText +=
        content[i] === select ? onActive[1] : onActive[0]
    }
  }

  const handleLoad = (e) => {
     const loaded = e.target.classList;
     if(loaded[0] === 'iframe1')
        document.querySelector(`.skeleton__loading1.${loaded[1]}`).classList.add('hide');
     else
        document.querySelector(`.skeleton__loading2.${loaded[1]}`).classList.add('hide');
  }

  useEffect(() => {
    courses.forEach((course) => {
      const key = Object.keys(course)
      const topic = course[key].map((value, index) => {
        const topicKey = Object.keys(value)

        return (
          <div className={`course__item ${key}`} key={index}>
            <h3>{topicKey}</h3>
            <div className='iframe__container'>
              <iframe
                className={`iframe1 ${topicKey}1`}
                width='380'
                height='250'
                src={`https://www.youtube.com/embed/${value[topicKey][0]}`}
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                onLoad={handleLoad}
              ></iframe>
              <iframe
                className={`iframe2 ${topicKey}2`}
                width='380'
                height='250'
                src={`https://www.youtube.com/embed/${value[topicKey][1]}`}
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                onLoad={handleLoad}
              ></iframe>
              <div className={`skeleton__loading1 ${topicKey}1`}>
                <div className='loading'>
                  <div className='circle'></div>
                  <div className='para'></div>
                </div>
                <div className='play'></div>
              </div>
              <div className={`skeleton__loading2 ${topicKey}2`}>
                <div className='loading'>
                  <div className='circle'></div>
                  <div className='para'></div>
                </div>
                <div className='play'></div>
              </div>
            </div>
          </div>
        )
      })
      setData((prev) => [...prev, topic])
    })

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
      {data}
    </div>
  )
}

export default Course
