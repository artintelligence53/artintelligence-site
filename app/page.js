import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Services from './components/Services'
import Benefits from './components/Benefits'
import Process from './components/Process'
import Guarantee from './components/Guarantee'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="gradient-bg min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <Benefits />
        <Process />
        <Guarantee />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
