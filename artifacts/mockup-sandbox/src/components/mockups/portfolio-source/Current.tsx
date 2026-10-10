import React from 'react';
import './_source-index.css';
import './_group.css';
import Navbar from './_source/components/Navbar.jsx';
import Hero from './_source/components/Hero.jsx';
import About from './_source/components/About.jsx';
import Skills from './_source/components/Skills.jsx';
import Services from './_source/components/Services.jsx';
import Projects from './_source/components/Projects.jsx';
import Experience from './_source/components/Experience.jsx';
import Contact from './_source/components/Contact.jsx';
import Footer from './_source/components/Footer.jsx';
import ScrollProgress from './_source/components/ScrollProgress.jsx';
import ScrollTopBtn from './_source/components/ScrollTopBtn.jsx';

export function Current() {
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
