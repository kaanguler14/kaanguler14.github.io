import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SelectedWorks from './components/SelectedWorks'
import Resume from './components/Resume'
import Journal from './components/Journal'
import Explorations from './components/Explorations'
import Stats from './components/Stats'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <main className="relative min-h-screen bg-bg">
          <div className="noise-overlay" />
          <Navbar />
          <Hero />
          <SelectedWorks />
          <Resume />
          <Journal />
          <Explorations />
          <Stats />
          <Footer />
        </main>
      )}
    </>
  )
}

export default App
