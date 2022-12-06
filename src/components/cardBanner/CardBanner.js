import b1 from './../../assets/banners/b1.jpg'
import b2 from './../../assets/banners/b2.jpg'
import b3 from './../../assets/banners/b3.jpg'
import b4 from './../../assets/banners/b4.jpg'
import b5 from './../../assets/banners/b5.jpg'
import b6 from './../../assets/banners/b6.jpg'
import b7 from './../../assets/banners/b7.jpg'
import b8 from './../../assets/banners/b8.jpg'

const banners = [b1, b2, b3, b4, b5, b6, b7, b8]
export const CardBanner = ({ idx }) => {
  const randBg = () => {
    return banners[idx % banners.length]
  }
  return (
    <div
      style={{
        background: `url(${randBg()})`,
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '100px',
        borderTopLeftRadius: '0.5rem',
        borderTopRightRadius: '0.5rem',
      }}
    ></div>
  )
}
