import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
const GoToTop = () => {
  const routePath = useLocation()
  const onTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
  useEffect(() => {
    onTop()
  }, [routePath])
}

export default GoToTop
