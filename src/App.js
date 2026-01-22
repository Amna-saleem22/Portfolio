import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// eslint-disable-next-line no-unused-vars
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Blog from './components/Blog'

import Service from './components/Service';
import Contact from './components/Contact';
import './App.css';
import "./assets/css/vendor.css";
import "./assets/css/styles.css";// Importing the CSS file for App component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
    
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='blog' element={<Blog></Blog>}/>
        <Route path="/service" element={<Service/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
