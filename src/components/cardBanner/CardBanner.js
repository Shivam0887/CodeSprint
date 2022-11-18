import b1 from './banners/b1.jpg'
import b2 from './banners/b2.jpg'
import b3 from './banners/b3.jpg'
import b4 from './banners/b4.jpg'
import b5 from './banners/b5.jpg'
import b6 from './banners/b6.jpg'
import b7 from './banners/b7.jpg'
import b8 from './banners/b8.jpg'

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
        width: 'inherit',
        height: '100px',
        borderTopLeftRadius: '0.5rem',
        borderTopRightRadius: '0.5rem',
      }}
    ></div>
  )
}
