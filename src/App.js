import React from 'react';
import './assets/css/elegant.css';
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
    <div style={{ background: '#0f0f13', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
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
