import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ num, video, title, subtitle, href, icon, top, tag }) => {
  return (
  
    <div className={`@xs:w-[470px] w-[370px] lg:w-[750px] z-30`} style={{ marginTop: window.innerWidth >= 1024 ? `${top}px` : "0px" }}>
      <div className="mb-5 px-4">
        <h2 id="num" className="orbitron-bold text-4xl lg:text-7xl">
          {num}
        </h2>
      </div>
      <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <video
          src={video}
          className="w-full h-full object-contain rounded-[20px]"
          autoPlay
          muted
          loop
          loading="lazy"
        ></video>
      </div>
      <div className="flex flex-col w-full mt-2 px-4">
        <div className='flex gap-2'>
          {tag?.design && (<div className=' px-3 py-1 text-zinc-200 bg-slate-800 rounded-lg poppins-regular'><h2>UI/UX Design</h2></div>)}          
          {tag?.develop && (<div className=' px-3 py-1 text-zinc-200 bg-slate-800 rounded-lg poppins-regular'><h2>Development</h2></div>)}
          {tag?.concept && (<div className=' px-3 py-1 text-zinc-200 bg-red-700 rounded-lg poppins-regular'><h2>Concept</h2></div>)}
        </div>
        <h3
          className="text-zinc-300 text-[1rem] lg:text-[1.2rem] font-bold text-center orbitron-medium flex flex-row items-center gap-5 mt-2"
          draggable="false"
        >
         {title}          
        </h3>
        <h4 className='text-lg text-zinc-300 poppins-light'>{subtitle}</h4>
      </div>
    </div>

  )
}

export default ProjectCard