import { useEffect, useState } from 'react'
import DeckShell from './components/DeckShell'
import ContentCalendar from './pages/ContentCalendar'

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
    return <ContentCalendar />
  }

  return <DeckShell />
}

export default App
