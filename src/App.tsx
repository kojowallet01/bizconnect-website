import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { Work } from './components/Work'
import { Testimonials } from './components/Testimonials'
import { CTA } from './components/CTA'
import { About } from './components/About'
import { Process } from './components/Process'
import { Sectors } from './components/Sectors'
import { Team } from './components/Team'
import { FAQ } from './components/FAQ'
import { Enquiry } from './components/Enquiry'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main role="main" aria-label="Bizconnect Technologies – Web design and digital marketing for businesses in Ghana">
        <Hero />
        <div className="light-body">
          <Stats />
          <Work />
          <Testimonials />
          <CTA />
          <About />
          <Process />
          <Sectors />
          <Team />
          <FAQ />
          <Enquiry />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
