import React, { useState, useEffect } from 'react'
import Spinner from './../../components/Spinner/Spinner'
import { CardBanner } from '../../components/cardBanner/CardBanner'
import GoToTop from '../../components/GoToTop'
import './contest.css'
import lt from './../../assets/logos/lt.svg'
import cc from './../../assets/logos/cc-logo.svg'
import cf from './../../assets/logos/cf.png'
import he from './../../assets/logos/he.svg'
import hr from './../../assets/logos/hr.svg'

const Contest = () => {
  const [codingSite, setCodingSite] = useState('leet_code')
  const [details, setDetails] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const url = `https://www.kontests.net/api/v1/${codingSite}`
  const url2 =
    'https://clist.by/api/v2/contest/?username=nitinpasricha&api_key=0c4f617581baa5f995bcbfcdfaf4c9d3a995df0c&host=leetcode.com&upcoming=true&format=json'
  const fetchData = async () => {
    const data = await fetch(url2)
    const response = await data.json()
    console.log(response)
    setDetails(response)
    setIsLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [codingSite])
  const getStartTime = (time) => {
    let startTime = new Date(time).toLocaleString()
    let timeZone = new Date().getTimezoneOffset()
    let absTime = Math.abs(timeZone)
    let hr = parseInt(absTime / 60)
    let min = absTime % 60
    return `${startTime} GMT${timeZone > 0 ? '-' : '+'}${hr}:${min}`
  }

  return (
    <div className='container'>
      <div className='filters'>
        <div
          className={`filter-box ${codingSite === 'leet_code' && 'selected'}`}
        >
          <img
            src={lt}
            onClick={(e) => {
              setIsLoading(true)
              setCodingSite(e.target.alt)
            }}
            className='logo'
            alt='leet_code'
          />
        </div>
        <div
          className={`filter-box ${codingSite === 'code_chef' && 'selected'}`}
        >
          <img
            src={cc}
            className='logo'
            onClick={(e) => {
              setIsLoading(true)
              setCodingSite(e.target.alt)
            }}
            alt='code_chef'
          />
        </div>
        <div
          className={`filter-box ${codingSite === 'codeforces' && 'selected'}`}
        >
          <img
            src={cf}
            className='logo'
            onClick={(e) => {
              setIsLoading(true)
              setCodingSite(e.target.alt)
            }}
            alt='codeforces'
          />
        </div>
        <div
          className={`filter-box ${codingSite === 'hacker_rank' && 'selected'}`}
        >
          <img
            src={hr}
            className='logo'
            onClick={(e) => {
              setIsLoading(true)
              setCodingSite(e.target.alt)
            }}
            alt='hacker_rank'
          />
        </div>
        <div
          className={`filter-box ${
            codingSite === 'hacker_earth' && 'selected'
          }`}
        >
          <img
            src={he}
            className='logo'
            onClick={(e) => {
              setIsLoading(true)
              setCodingSite(e.target.alt)
            }}
            alt='hacker_earth'
          />
        </div>
      </div>
      {isLoading && <Spinner />}
      <div className='contests'>
        {!isLoading &&
          details.map((detail, index) => {
            return (
              <div className='card' key={index}>
                <CardBanner idx={index} />
                <div className='info'>
                  <div className='logo-container'>
                    <img
                      src={
                        (codingSite === 'code_chef' && cc) ||
                        (codingSite === 'leet_code' && lt) ||
                        (codingSite === 'codeforces' && cf) ||
                        (codingSite === 'hacker_rank' && hr) ||
                        (codingSite === 'hacker_earth' && he)
                      }
                      className='logo'
                      alt={codingSite}
                    />
                  </div>
                  <article className='contestDetails'>
                    <a href={detail.url} target='_blank' rel='noreferrer nooperner'>
                      {detail.name.replace(/[\u200B]/, codingSite)}
                    </a>
                    <p>{getStartTime(detail.start_time)}</p>
                    <p>Duration: {(detail.duration / 3600).toFixed(2)} hours</p>
                  </article>
                </div>
              </div>
            )
          })}
      </div>
      <GoToTop />
    </div>
  )
}

export default Contest
