import React, { useState, useRef, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Lenis from 'lenis';
import './App.css'
const Navbar = React.lazy(() => import("./components/Navbar"));
const Home = React.lazy(() => import("./components/Home"));
const Works = React.lazy(() => import("./pages/Works"));
const Services = React.lazy(() => import("./pages/Services"));
const About = React.lazy(() => import("./pages/About"));
const ProjectDetails = React.lazy(() => import("./pages/ProjectDetails"));
const Footer = React.lazy(()=>import('./components/Footer'));


function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Works />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/:title" element={<ProjectDetails />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
