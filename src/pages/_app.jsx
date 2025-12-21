import Aos from 'aos'
import { useEffect } from 'react'
import '../styles/index.scss'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    })
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
