import React, { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const PageHeader = ({title, subtitle}) => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  useGSAP(()=>{
    const spans = titleRef.current.querySelectorAll("span");
   const tl = gsap.timeline();
    tl.from(spans, {
      y: 40,
      filter: "blur(30px)",
      opacity: 0,
      delay: 2,
      duration: 0.8,
      stagger: 0.05,
      ease: "power2.inOut"
    })
    tl.from(subtitleRef.current, {
      y: 40,
      filter: "blur(30px)",
      opacity: 0,
      duration: 0.6,
      ease: "power2.inOut"
    }, "-=0.3")
  },[])

  return (
     <div id='page-header' className='w-full mt-[5rem] md:mt-[10rem] relative'>             
        <div className='w-full h-full flex flex-col justify-end items-center lg:px-32'>
          <h1 ref={titleRef} className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl orbitron-bold text-zinc-200 space-x-3 text-center tracking-tight'>
            {title.split(' ').map((word, i)=>(
              <span key={i} className='inline-block'>{word}</span>
            ))}
          </h1>
          <h3 ref={subtitleRef} className='text-zinc-400 mt-5 md:mt-10 poppins-regular text-sm md:text-xl lg:text-2xl text-center'>{subtitle}</h3>
        </div>
      </div>
  )
}

export default PageHeader