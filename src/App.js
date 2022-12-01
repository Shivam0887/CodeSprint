import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { getBabbarData, getStriverData, getData, updateDB } from './db'
import TopicCard from './components/topicCard/TopicCard'
import ProblemCard from './components/problemCards/ProblemCard'
import Topic from './components/topic/Topic'
import details from './assets/platform'
import Course from './pages/courses/Course'
import loveBabbar from './assets/image/loveB.jpg'
import striver from './assets/image/striver.jpg'
import apnaCollege from './assets/image/apnaCollege.jpg'
import Nav from './components/Nav'
import LandingPage from './pages/LandingPage/LandingPage'
import Contest from './pages/ContestPage/Contest'

function App() {
  const [select, setSelect] = useState(undefined)
  const [babbarData, setBabbarData] = useState([])
  const [striverData, setStriverData] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    getBabbarData((question) => {
      setBabbarData(question)
    })
    getStriverData((question) => {
      setStriverData(question)
    })
    getData((question) => {
      setData(question)
    })
  }, [])

  const updateData = (key, updatedData, position, author) => {
    if (author === 'striver') {
      let newData = striverData.map((topic, index) => {
        if (index === position) {
          updateDB(key, updatedData, author)
          return {
            topicName: topic.topicName,
            position: topic.position,
            ...updatedData,
          }
        } else return topic
      })
      setStriverData(newData)
    }
    if (author === 'babbar') {
      let newData = babbarData.map((topic, index) => {
        if (index === position) {
          updateDB(key, updatedData, author)
          return {
            topicName: topic.topicName,
            position: topic.position,
            ...updatedData,
          }
        } else return topic
      })
      setBabbarData(newData)
    }
    if (author === 'apnaCollege') {
      let newData = data.map((topic, index) => {
        if (index === position) {
          updateDB(key, updatedData, author)
          return {
            topicName: topic.topicName,
            position: topic.position,
            ...updatedData,
          }
        } else return topic
      })
      setData(newData)
    }
  }
  return (
    <div className='App'>
      <Router>
        <Nav select={select} setSelect={setSelect} />
        <Routes>
          <Route
            path='/'
            element={<LandingPage select={select} setSelect={setSelect} />}
          />
          <Route path='/Contest' element={<Contest />} />
          <Route path='/Practice' element={<ProblemCard />} />
          <Route path='/Courses' element={<Course />} />
          <Route
            path='/Practice/sde-sheet-love-babbar'
            element={
              <TopicCard
                data={babbarData}
                linkedIn={details.linkedIn[0]}
                yt={details.youTube[0]}
                image={loveBabbar}
              />
            }
          />
          <Route
            path='/Practice/sde-sheet-striver'
            element={
              <TopicCard
                data={striverData}
                linkedIn={details.linkedIn[1]}
                yt={details.youTube[1]}
                image={striver}
              />
            }
          />
          <Route
            path='/Practice/sde-sheet-shradha'
            element={
              <TopicCard
                data={data}
                linkedIn={details.linkedIn[2]}
                yt={details.youTube[2]}
                image={apnaCollege}
              />
            }
          />
          {babbarData &&
            babbarData.map((value, index) => {
              const topic = value.topicName
                .replace(/[^A-Z]+/gi, '')
                .toLowerCase()
              return (
                <Route
                  key={index}
                  path={`/Practice/sde-sheet-love-babbar/${topic}`}
                  element={
                    <Topic
                      Data={babbarData[index]}
                      updateData={updateData}
                      author={'babbar'}
                    />
                  }
                />
              )
            })}
          {striverData &&
            striverData.map((value, index) => {
              const topic = value.topicName
                .replace(/[^A-Z]+/gi, '')
                .toLowerCase()
              return (
                <Route
                  key={index}
                  path={`/Practice/sde-sheet-striver/${topic}`}
                  element={
                    <Topic
                      Data={striverData[index]}
                      updateData={updateData}
                      author={'striver'}
                    />
                  }
                />
              )
            })}
          {data &&
            data.map((value, index) => {
              const topic = value.topicName
                .replace(/[^A-Z]+/gi, '')
                .toLowerCase()
              return (
                <Route
                  key={index}
                  path={`/Practice/sde-sheet-shradha/${topic}`}
                  element={
                    <Topic
                      Data={data[index]}
                      updateData={updateData}
                      author={'apnaCollege'}
                    />
                  }
                />
              )
            })}
        </Routes>
      </Router>
    </div>
  )
}

export default App
