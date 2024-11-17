import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Navbar from './navbar'
import Footer from './footer'


const Layout = ({ children }) => {
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const logNavigationEvent = (type: string, url: string) => {
      if (typeof window === 'undefined') return

      console.log(`[Navigation ${type}] ${url} - ${new Date().toISOString()}`)
      if (window.performance) {
        const perfEntry = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (perfEntry) {
          console.log(`[Performance] Load Time: ${perfEntry.loadEventEnd}ms`)
        }
      }
    }

    if (isMounted) {
      router.events.on('routeChangeStart', (url) => {
        performance.mark('routeChangeStart')
        logNavigationEvent('Start', url)
      })

      router.events.on('routeChangeComplete', (url) => {
        performance.mark('routeChangeComplete')
        performance.measure('Navigation Duration', 'routeChangeStart', 'routeChangeComplete')
        logNavigationEvent('Complete', url)
      })
    }

    return () => {
      if (isMounted) {
        router.events.off('routeChangeStart', logNavigationEvent)
        router.events.off('routeChangeComplete', logNavigationEvent)
      }
    }
  }, [router, isMounted])

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout