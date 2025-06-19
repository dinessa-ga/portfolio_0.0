import './App.css'
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

function App() {
  return (
    <div
      className="bg-dark1 text-base-white font-sans"
      style={{ margin: 0, padding: 0 }}
    >
      <Header />

      <main >
        <About />
        <Projects />
        <Services />
        <Skills />
        {/* <Contact /> */}
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;