import { Component, lazy, Suspense, useEffect, useState, type ReactNode } from 'react'
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
      <RouteErrorBoundary>
        <Suspense fallback={<RouteFallback />}>
          <ContentCalendar />
        </Suspense>
      </RouteErrorBoundary>
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

type ErrorBoundaryState = { error: Error | null }

class RouteErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error }
  }

  componentDidCatch(error: Error): void {
    if (typeof window !== 'undefined' && 'reportError' in window) {
      window.reportError(error)
    }
  }

  handleRetry = (): void => {
    this.setState({ error: null })
    if (typeof window !== 'undefined') window.location.reload()
  }

  render(): ReactNode {
    if (this.state.error) {
      return (
        <div
          role="alert"
          style={{
            position: 'fixed',
            inset: 0,
            background: brand.colors.lightBg,
            color: brand.colors.bodyText,
            fontFamily: brand.fonts.primary,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            padding: 24,
            textAlign: 'center',
          }}
        >
          <div
            style={{
              color: brand.colors.amber,
              fontSize: 13,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Could not load the calendar
          </div>
          <div style={{ color: brand.colors.darkGreen, fontSize: 18, maxWidth: 480 }}>
            The calendar bundle did not load. Check your connection and try again.
          </div>
          <button
            type="button"
            onClick={this.handleRetry}
            style={{
              padding: '12px 22px',
              background: brand.colors.darkGreen,
              color: brand.colors.gold,
              border: `1px solid ${brand.colors.gold}66`,
              borderRadius: 999,
              fontWeight: 600,
              fontSize: 14,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          >
            Retry
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

export default App
