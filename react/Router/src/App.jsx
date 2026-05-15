import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
    </>
  )
}


export default App
