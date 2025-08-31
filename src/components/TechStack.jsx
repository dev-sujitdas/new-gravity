import React from 'react'
import figma from "/Tech/figma.png";
import html from "/Tech/html.png";
import css from "/Tech/css.png";
import javascript from "/Tech/javascript.png";
import react from "/Tech/reactjs.png";
import tailwind from "/Tech/tailwind.png";
import node from "/Tech/nodejs.png";
import redux from "/Tech/redux.png";
import mongodb from "/Tech/mongodb.png";
import git from "/Tech/git.png";
import docker from "/Tech/docker.png";

const techIcons = [figma, html, css, javascript, react, tailwind, node, redux, mongodb, git, docker];

const TechStack = () => {


  return (
    <section className='w-full bg-[#040414] p-20'>
      <div className='w-full flex justify-center items-center'>
        <h2 className='text-zinc-300 orbitron-regular text-5xl'>Our Tech Arsenal</h2>
      </div>
        <div className='marquee_track flex no-wrap will-change-transform relative mt-20'>
            <div className="absolute left-0 top-0 h-full w-96 bg-gradient-to-r from-[#040414] to-transparent z-10"></div>
            <div className='marquee_list flex gap-16'>
            {[...techIcons, ...techIcons].map((img, i)=>(
                <img key={i} src={img} alt="" className='h-24 w-24' />
            ))}
            </div>
            <div className="absolute right-0 top-0 h-full w-96 bg-gradient-to-l from-[#040414] to-transparent z-10"></div>
        </div>    
    </section>
  )
}

export default TechStack