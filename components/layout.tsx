import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import Navbar from './navbar'
import Footer from './footer'


const Layout = ({ children }) => {
  const router = useRouter()
  const isNavigating = useRef(false)

  useEffect(() => {
    const handleStart = (url) => {
      // Prevent duplicate navigations to the same URL
      if (isNavigating.current && url === router.asPath) {
        return
      }
      isNavigating.current = true
    }

    const handleComplete = () => {
      isNavigating.current = false
    }

    const handleError = () => {
      isNavigating.current = false
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleError)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleError)
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