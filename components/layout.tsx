import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import Navbar from './navbar'
import Footer from './footer'


const Layout = ({ children }) => {
  const router = useRouter()
  const lastNavigationUrl = useRef('')
  const navigationTimeout = useRef(null)
  const [isHydrated, setIsHydrated] = useState(false)

  // Handle hydration
  useEffect(() => {
    setIsHydrated(true)
  }, [])

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

    const handleError = () => {
      if (navigationTimeout.current) {
        clearTimeout(navigationTimeout.current)
      }
      lastNavigationUrl.current = ''
    }

    if (isHydrated) {
      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError', handleError)
    }

    return () => {
      if (navigationTimeout.current) {
        clearTimeout(navigationTimeout.current)
      }
      if (isHydrated) {
        router.events.off('routeChangeStart', handleStart)
        router.events.off('routeChangeComplete', handleComplete)
        router.events.off('routeChangeError', handleError)
      }
    }
  }, [router, isHydrated])

  return (
    <>
      {isHydrated ? (
        <>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </>
      ) : null}
    </>
  )
}

export default Layout