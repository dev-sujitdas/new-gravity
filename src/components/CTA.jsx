import React, { useRef } from 'react'
import Button from './buttons/Button';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let title = "ENTER THE NEXT DIMENSION OF POSSIBILITY";
const CTA = () => {
const ctaRef = useRef(null);

    useGSAP(()=>{
         gsap.from(ctaRef.current,{
      y: 50,
      opacity: 0,
      filter: "blur(20px)",
      ease: "power2.inOut",
      duration: 0.8,
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 90%",
      },
    })
    },[])

    return (
        <section className='w-full pt-10 pb-20 md:pt-30 md:pb-30 relative'>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10rem] h-[10rem] md:w-[20rem] md:h-[20rem] bg-[#fdbb58c7] rounded-full blur-[100px] opacity-30 z-0"></div>
            <div ref={ctaRef} className='flex justify-center items-center flex-col'>
                <div className='2xl:w-[65%] z-50'>
                    <h2 className='gradient-text text-3xl md:text-4xl lg:text-5xl xl:text-6xl orbitron-bold gap-2 text-center tracking-tight'>
                        {title.split('').map((word, i) => (
                            <span key={i}>{word}</span>
                        ))}                      
                    </h2>
                </div>
                <div className='mt-10 z-50'>
                    <Button
                        title="Let's start a project"
                        bodyColor="bg-[#040414]"
                        bodyText="text-white"
                        titleSize="1rem"
                        width="w-fit"
                        circleColor="bg-white"
                        circleSize="2.5rem"
                        link="/contact"                                   
                    />
                </div>
            </div>           
        </section>
    )
}

export default CTA