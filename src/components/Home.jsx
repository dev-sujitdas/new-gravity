import React from 'react'
const Hero = React.lazy(()=>import("./Hero"));
const ProjectShowcase = React.lazy(() => import("./ProjectsShowcase"));
const ServicesShowcase = React.lazy(() => import("./ServicesShowcase"));
const TechStack = React.lazy(()=>import("./TechStack"));
const Testimonial = React.lazy(()=>import("./Testimonial"));
const CTA = React.lazy(()=>import("./CTA"));

const Home = () => {
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