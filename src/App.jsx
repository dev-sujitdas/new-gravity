import React, { useState, useRef, useEffect, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis';
import './App.css'
import Contact from './pages/Contact';
import Loader from './suspense/Loader';
const Navbar = React.lazy(() => import("./components/Navbar"));
const Home = React.lazy(() => import("./pages/Home"));
const Works = React.lazy(() => import("./pages/Works"));
const Services = React.lazy(() => import("./pages/Services"));
const About = React.lazy(() => import("./pages/About"));
const ProjectDetails = React.lazy(() => import("./pages/ProjectDetails"));
const Footer = React.lazy(() => import('./components/Footer'));
import PageTransition from './components/transition/PageTransition';


const App = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
  const lenisRef = useRef(null);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true)

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

  useEffect(() => {
    const loadApp = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };
    loadApp();
  }, []);

  return (
    <>
      {isLoading ? (<Loader isLoading={isLoading} />) : (
        <Suspense fallback={<Loader isLoading={true} />}>
          <Navbar />
          <PageTransition key={location.pathname}>
            <main className='max-w-[150rem] mx-auto'>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Works />} />
                <Route path="/services" element={<Services lenis={lenisRef} />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects/:title" element={<ProjectDetails />} />
              </Routes>
            </main>
          </PageTransition>
          <Footer />
        </Suspense>
      )}
    </>
  )
}

export default App
