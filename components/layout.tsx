import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Layout = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    const logPerformanceMetrics = (type: string, url: string) => {
      console.log(`[Navigation Event] ${type} - ${url}`)

      if (window.performance) {
        const perfEntries = performance.getEntriesByType('navigation')
        const metrics = {
          url,
          type,
          timestamp: new Date().toISOString(),
          loadTime: perfEntries[0]?.loadEventEnd,
          domComplete: perfEntries[0]?.domComplete,
          navigationStart: perfEntries[0]?.navigationStart,
        }

        // Log to server
        fetch('/api/log-performance', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(metrics)
        }).catch(console.error)
      }
    }

    router.events.on('routeChangeStart', (url) => {
      performance.mark('routeChangeStart')
      logPerformanceMetrics('start', url)
    })

    router.events.on('routeChangeComplete', (url) => {
      performance.mark('routeChangeComplete')
      performance.measure('navigationDuration', 'routeChangeStart', 'routeChangeComplete')
      logPerformanceMetrics('complete', url)
    })

    router.events.on('routeChangeError', (err, url) => {
      logPerformanceMetrics('error', url)
      console.error('[Navigation Error]', err)
    })

    return () => {
      router.events.off('routeChangeStart', logPerformanceMetrics)
      router.events.off('routeChangeComplete', logPerformanceMetrics)
      router.events.off('routeChangeError', logPerformanceMetrics)
    }
  }, [router])

  return <>{children}</>
}

export default Layout