
import './App.css'
import Header from './components/Header.jsx'
import Nav from './components/Nav'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
// import Contact from './components/Contact'
import Footer from './components/Footer'

import { useState } from 'react';
function App() {

  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  // className="bg-base-100 text-neutral_dark font-sans" style={{ margin: 0, padding: 0 }}
  
  return (
    <div className="bg-base-100 text-neutral font-sans">
      <Header toggleNav={toggleNav} />
      <Nav isOpen={isNavOpen} toggleNav={toggleNav} />
      <main className="p-4">
        <About />
        <Projects />
        <Skills />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App;
