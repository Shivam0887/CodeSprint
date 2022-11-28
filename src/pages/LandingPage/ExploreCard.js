import { Link } from 'react-router-dom'
const ExploreCard = ({ bg, feature, desc, action, link, setSelect }) => {
  return (
    <div
      className='explore-container'
      style={{
        background: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <article className='exploreCard'>
        <h3>{feature}</h3>
        <p>{desc}</p>
        <Link to={link}>
          <button
            className='exp-btn'
            onClick={() => {
              setSelect(feature)
            }}
          >
            {action}
          </button>
        </Link>
      </article>
    </div>
  )
}
export default ExploreCard
