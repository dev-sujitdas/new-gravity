import React, { useEffect } from 'react'
const Hero = React.lazy(()=>import("../components/Hero"));
const ProjectShowcase = React.lazy(() => import("../components/ProjectsShowcase"));
const ServicesShowcase = React.lazy(() => import("../components/ServicesShowcase"));
const TechStack = React.lazy(()=>import("../components/TechStack"));
const Testimonial = React.lazy(()=>import("../components/Testimonial"));
const CTA = React.lazy(()=>import("../components/CTA"));

const Home = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);
  return (
    <div className='max-w-[150rem] mx-auto overflow-hidden'>
        <Hero/>
        <ProjectShowcase/>
        <ServicesShowcase/>
        <TechStack/>
        <Testimonial/>
        <CTA/>
    </div>
  )
}

export default Home