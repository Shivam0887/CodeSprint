import './topicCard.css'
import { Link } from 'react-router-dom'
import { AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import ProgressBar from '../progressBar/ProgressBar'

const TopicCard = ({ data, linkedIn, yt, image }) => {
  let totalQuestions = 0
  let totalDone = 0
  const arr = data.map((value, index) => {
    totalQuestions += value.questions.length
    totalDone += value.doneQuestions

    return (
      <Link
        to={`${value.topicName.replace(/[^A-Z]+/gi, '').toLowerCase()}`}
        style={{
          textDecoration: 'none',
          color: 'black',
          fontSize: '0.7rem',
        }}
        key={index}
      >
        <div
          className='grid__items'
          style={{
            background: value.started ? 'rgb(155,194,168)' : 'rgb(155,189,223)',
          }}
        >
          <h2>{value.topicName} </h2>
          {value.started ? (
            <span className='start' style={{ background: '#269840' }}>
              Solve Now &#128373;{' '}
            </span>
          ) : (
            <span className='start'>Start Now </span>
          )}
          <h3 className='total__question'>{`Total Questions: ${value.questions.length}`}</h3>
          {value.started ? (
            <i>{value.questions.length - value.doneQuestions} more to go</i>
          ) : (
            <i>Not yet started</i>
          )}
        </div>
      </Link>
    )
  })

  function calculate(a, b) {
    let c = (a / b) * 100
    return c.toFixed(1)
  }

  return (
    <div className='div-container'>
      <div className='sticky__'>
      <div className='author__detail'>
        <img
          src={image}
          alt=''
          style={{
            height: '130px',
            width: '130px',
            margin: '20px',
            borderRadius: '50%',
            border: '1.5px solid whitesmoke',
          }}
        ></img>
        <div className='socialmedia'>
          <a href={linkedIn}>
            <AiFillLinkedin
              style={{ color: 'blue', height: '30px', width: '30px' }}
            />
          </a>
          <a href={yt}>
            <AiFillYoutube
              style={{
                color: 'red',
                height: '30px',
                width: '30px',
                marginLeft: '10px',
              }}
            />
          </a>
        </div>
      </div>
      <div>
        <h2 className='done-problem'>{`Problems Solved: ${totalDone}/${totalQuestions} (${calculate(
          totalDone,
          totalQuestions
        )}%)`}</h2>
        <ProgressBar progress={calculate(totalDone, totalQuestions)} />
      </div>
      </div>
      <div className='grid__container'>{arr}</div>
    </div>
  )
}

export default TopicCard
