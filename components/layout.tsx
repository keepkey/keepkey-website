import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import Navbar from './navbar'
import Footer from './footer'


const Layout = ({ children }) => {
  const router = useRouter()
  const lastNavigationUrl = useRef('')
  const navigationTimeout = useRef(null)

  useEffect(() => {
    const handleStart = (url) => {
      if (url === lastNavigationUrl.current) {
        return
      }

      lastNavigationUrl.current = url

      if (navigationTimeout.current) {
        clearTimeout(navigationTimeout.current)
      }

      navigationTimeout.current = setTimeout(() => {
        lastNavigationUrl.current = ''
      }, 500)
    }

    const handleComplete = () => {
      if (navigationTimeout.current) {
        clearTimeout(navigationTimeout.current)
      }
      lastNavigationUrl.current = ''
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      if (navigationTimeout.current) {
        clearTimeout(navigationTimeout.current)
      }
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout