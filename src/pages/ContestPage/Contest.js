import React, { useState, useEffect } from 'react'
import Spinner from './../../components/Spinner/Spinner'
import { CardBanner } from '../../components/cardBanner/CardBanner'
import GoToTop from '../../components/GoToTop'
import './contest.css'
import lt from './../../assets/logos/lt.svg'
import cc from './../../assets/logos/cc-logo.svg'
import cf from './../../assets/logos/cf.png'
import he from './../../assets/logos/he.svg'
import cn from './../../assets/logos/cn.svg'
import gfg from './../../assets/logos/gfg.svg'

const Contest = () => {
  const [codingSite, setCodingSite] = useState('leetcode.com')
  const [details, setDetails] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const url = `https://clist.by/api/v2/contest/?username=nitinpasricha&api_key=0c4f617581baa5f995bcbfcdfaf4c9d3a995df0c&host=${codingSite}&upcoming=true&format=json`
  const fetchData = async () => {
    const data = await fetch(`https://proxy-qggl.onrender.com/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        type: 'GET',
        url: url,
      }),
    })
    const response = await data.json()
    console.log(data.status)
    console.log(response.data.objects)
    setDetails(response.data.objects)
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
          className={`filter-box ${
            codingSite === 'leetcode.com' && 'selected'
          }`}
        >
          <img
            src={lt}
            onClick={(e) => {
              setIsLoading(true)
              setCodingSite(e.target.alt)
            }}
            className='logo'
            alt='leetcode.com'
          />
        </div>
        <div
          className={`filter-box ${
            codingSite === 'codechef.com' && 'selected'
          }`}
        >
          <img
            src={cc}
            className='logo'
            onClick={(e) => {
              setIsLoading(true)
              setCodingSite(e.target.alt)
            }}
            alt='codechef.com'
          />
        </div>
        <div
          className={`filter-box ${
            codingSite === 'codeforces.com' && 'selected'
          }`}
        >
          <img
            src={cf}
            className='logo'
            onClick={(e) => {
              setIsLoading(true)
              setCodingSite(e.target.alt)
            }}
            alt='codeforces.com'
          />
        </div>
        <div
          className={`filter-box ${
            codingSite === 'hackerearth.com' && 'selected'
          }`}
        >
          <img
            src={he}
            className='logo'
            onClick={(e) => {
              setIsLoading(true)
              setCodingSite(e.target.alt)
            }}
            alt='hackerearth.com'
          />
        </div>
        <div
          className={`filter-box ${
            codingSite === 'geeksforgeeks.org' && 'selected'
          }`}
        >
          <img
            src={gfg}
            onClick={(e) => {
              setIsLoading(true)
              setCodingSite(e.target.alt)
            }}
            className='logo'
            alt='geeksforgeeks.org'
          />
        </div>
        <div
          className={`filter-box ${
            codingSite === 'codingninjas.com/codestudio' && 'selected'
          }`}
        >
          <img
            src={cn}
            onClick={(e) => {
              setIsLoading(true)
              setCodingSite(e.target.alt)
            }}
            className='logo'
            alt='codingninjas.com/codestudio'
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
                        (codingSite === 'codechef.com' && cc) ||
                        (codingSite === 'leetcode.com' && lt) ||
                        (codingSite === 'codeforces.com' && cf) ||
                        (codingSite === 'geeksforgeeks.org' && gfg) ||
                        (codingSite === 'hackerearth.com' && he) ||
                        (codingSite === 'codingninjas.com/codestudio' && cn)
                      }
                      className='logo'
                      alt={codingSite}
                    />
                  </div>
                  <article className='contestDetails'>
                    <a
                      href={detail.href}
                      target='_blank'
                      rel='noreferrer nooperner'
                    >
                      {detail.event.replace(/[\u200B]/, codingSite)}
                    </a>
                    <p>{getStartTime(detail.start)}</p>
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
