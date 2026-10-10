import React from 'react';
import './assets/css/portfolio.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ScrollTopBtn from './components/ScrollTopBtn';

function App() {
  return (
    <div className="portfolio-shell">
      <div className="ambient-grain" aria-hidden="true" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <ScrollTopBtn />
    </div>
  );
}

export default App;
