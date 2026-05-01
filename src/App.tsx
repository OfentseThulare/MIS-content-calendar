import { lazy, Suspense, useEffect, useState } from 'react'
import DeckShell from './components/DeckShell'
import { brand } from './lib/brand'

const ContentCalendar = lazy(() => import('./pages/ContentCalendar'))

function App() {
  const [path, setPath] = useState<string>(() =>
    typeof window !== 'undefined' ? window.location.pathname : '/',
  )

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  if (path.startsWith('/calendar')) {
    return (
      <Suspense fallback={<RouteFallback />}>
        <ContentCalendar />
      </Suspense>
    )
  }

  return <DeckShell />
}

function RouteFallback() {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        inset: 0,
        background: brand.colors.lightBg,
        color: brand.colors.darkGreen,
        fontFamily: brand.fonts.primary,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        fontWeight: 500,
      }}
    >
      Loading the calendar
    </div>
  )
}

export default App
