import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProjectContext } from '../components/context/ProjectContext';
const CTA = React.lazy(() => import("../components/CTA"));
const PageHeader = React.lazy(()=>import('../components/PageHeader'));

const ProjectDetails = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { title } = useParams();
  const { projData } = useContext(ProjectContext)



  const project = projData.find(p => p.title === title);

  return (
    <section id='project-dets' className='w-full h-full relative overflow-hidden px-5 py-20 md:p-10 xl:p-20'>  
    <div className="absolute top-0 right-32  w-[12rem] h-[2rem] md:w-[30rem] md:h-[5rem] bg-[#fdbb58de] rounded-full blur-[100px] opacity-30 z-0"></div>
        <div className="absolute top-0 left-0 w-[5rem] h-[2rem] md:w-[38rem] md:h-[5rem] bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 rounded-full blur-[100px] opacity-50 z-0"></div>  
       <div className='w-full mt-[5rem] md:mt-[10rem]'>        
        <div className='w-full h-full flex flex-col justify-end items-center'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl orbitron-extrabold text-white text-center tracking-tight'>
            {project.subtitle.split('').map((word, i) => (
              <span key={i}>{word}</span>
            ))}
          </h1>
          <h3 className='text-zinc-300 mt-5 md:mt-10 poppins-regular text-sm md:text-lg lg:text-xl'>{project.description}</h3>
        </div>
      </div>

      <div className='w-full flex flex-col justify-center items-center mt-20 md:mt-30'>
        <div className='w-full lg:h-[35rem] xl:h-[50rem] rounded-xl overflow-hidden'>
          <video
            autoPlay
            muted
            playsInline
            loop
            className='h-full w-full object-cover'
          >
            {project.video.map((vid, i) => (
              <source key={i} src={vid.src} type={vid.type} />
            ))}
          </video>
        </div>
        <div className='w-full flex xl:flex-row flex-col xl:justify-between xl:items-center  mt-5'>
          <div>
            <h2 className='text-zinc-200 orbitron-semibold text-lg md:text-xl'>How did we help:</h2>
            <div className="tag flex gap-2 mt-3">
              {project.tag?.design && (
                <div className="px-3 py-1 text-zinc-200 bg-slate-800 rounded-lg poppins-regular">
                  <h2>UI/UX Design</h2>
                </div>
              )}
              {project.tag?.develop && (
                <div className="px-3 py-1 text-zinc-200 bg-slate-800 rounded-lg poppins-regular">
                  <h2>Development</h2>
                </div>
              )}
              {project.tag?.concept && (
                <div className="px-3 py-1 text-zinc-200 bg-red-700 rounded-lg poppins-regular">
                  <h2>Concept</h2>
                </div>
              )}
            </div>
          </div>
          <div>
            <h2 className='text-zinc-200 orbitron-semibold text-start xl:text-end text-lg md:text-xl mt-5 xl:mt-0'>Tech-Stack Used:</h2>
            <div className='flex flex-wrap gap-3 mt-3'>
              {project.techStack.tech.map((t, i) => (
                <div key={i} className='flex justify-center items-center gap-1'>
                  <img src={t.icon} alt="tech-icon" className='h-10 w-10' />
                  <h3 className='text-zinc-300 text-lg md:text-xl'>{t.tech}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id='metrics' className='w-full mt-30'>
          <h3 className='text-[#AA04E0] uppercase poppins-regular text-lg'>Metrics</h3>
          <div className='w-full lg:w-[60%] xl:w-[40%] mt-5'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl text-zinc-200 poppins-semibold'>{project.metrics.title}</h2>
            <p className='text-zinc-300 text-base lg:text-lg poppins-regular mt-5'>{project.metrics.description}</p>
          </div>
          <div className='w-full flex flex-wrap gap-10 mt-10'>
            {project.metrics.values.map((v, i) => (
              <div key={i} className='w-80 '>
                <h2 className='text-5xl md:text-6xl lg:text-7xl text-[#AA04E0] orbitron-extrabold'>{v.number}</h2>
                <p className='text-zinc-300 poppins-regular mt-5'>{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div id='problem' className='w-full mt-30 '>
          <h3 className='text-[#AA04E0] uppercase poppins-regular text-lg'>The Problem</h3>
          <div className='w-full flex xl:flex-row flex-col justify-between'>
            <div className='w-full lg:w-[60%] xl:w-[30%] mt-5'>
              <h2 className='text-2xl md:text-3xl lg:text-4xl text-zinc-200 poppins-semibold'>{project.problem.title}</h2>
              <p className='text-zinc-300 text-base lg:text-lgpoppins-regular mt-5'>{project.problem.description}</p>
            </div>
            <div className='xl:w-[60%] flex flex-wrap gap-5 xl:gap-10 mt-10 xl:mt-0'>
              {project.problem.reason.map((r, i) => (
                <div key={i} className='w-96'>
                  <h2 className='text-zinc-200 poppins-semibold text-xl lg:text-2xl'>{r.reasonTitle}</h2>
                  <p className='text-zinc-300 poppins-regular lg:mt-3 xl:mt-4'>{r.reasonDesc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id='approach' className='w-full mt-30'>
          <h3 className='text-[#AA04E0] uppercase poppins-regular text-lg'>Our Approach</h3>
          <div className='w-full h-full flex xl:flex-row flex-col justify-between'>
            <div className='w-full xl:w-1/2'>
              <div className='w-full lg:w-[65%] mt-5'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl text-zinc-200 poppins-semibold'>{project.approach.title}</h2>
                <p className='text-zinc-300 text-lg poppins-regular mt-5'>{project.approach.description}</p>
              </div>
              <div className='w-full flex flex-wrap gap-10 mt-5 xl:mt-10'>
                {project.approach.reason.map((r, i) => (
                  <div key={i} className='w-96'>
                    <h2 className='text-zinc-200 poppins-semibold text-xl lg:text-2xl'>{r.reasonTitle}</h2>
                    <p className='text-zinc-300 poppins-regular mt-4'>{r.reasonDesc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full xl:w-1/2 md: lg:h-[30rem] mt-10 xl:mt-0 rounded-xl overflow-hidden">
              <img src={project.image} alt="" className="h-full w-full rounded-xl" />
            </div>
          </div>
        </div>

      </div>
      <CTA />
    </section>
  )
}

export default ProjectDetails