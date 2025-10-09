import React, { useEffect, useRef, useState } from 'react'
import orb from "/Images/orb.webp";
import khushi from "/Images/Khushi.png"
import sujit from "/Images/sujit.jpg"
import ravi from "/Images/Ravi.png"
import { useGSAP } from '@gsap/react';
import gsap from "gsap"
const PageHeader = React.lazy(() => import('../components/PageHeader'));
const CTA = React.lazy(() => import("../components/CTA"))
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const devApproach = [
  {
    title: "Designing",
    desc: "Creating user-centered designs that are both visually appealing and highly functional."
  },
  {
    title: "Development",
    desc: "Delivering robust, scalable, and efficient digital solutions tailored to your business needs."
  },
  {
    title: "Deployment",
    desc: "Ensuring smooth launches with secure, optimized, and reliable deployment strategies."
  },
];

const teams = [
  {
    image: sujit,
    name: "Sujit Das",
    role: "Founder",
    role2: "Full-Stack Developer",
    top: "0"
  },
  {
    image: khushi,
    name: "Khushi Sachdeva",
    role: "Freelancer",
    role2: "Graphic Designer",
    top: "10"
  },
  {
    image: ravi,
    name: "Ravi Singh",
    role: "Freelancer",
    role2: "SEO Specilist",
    top: "20"
  },
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isMobile, setIsMobile] = useState(false);
  const titleRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      };
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const spans = titleRef.current.querySelectorAll("span");
      const tl = gsap.timeline();
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".creation",
          start: "top 95%",
          once: true,
        },
      });
      tl.from(spans, {
        y: 40,
        filter: "blur(30px)",
        opacity: 0,
        delay: 2,
        duration: 0.8,
        stagger: 0.05,
        ease: "power2.inOut"
      })
      tl.from(".para", {
        y: 40,
        filter: "blur(30px)",
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut"
      }, "-=0.3")
      tl.from(".image", {
        scale: 0,
        rotateZ: 90,
        filter: "blur(30px)",
        opacity: 0,
        duration: 1.5,
        ease: "power2.inOut"
      }, "-=0.3")

      tl2.from(".creation span", {
        y: 40,
        filter: "blur(30px)",
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power2.inOut"
      })
      tl2.from(".approach #card", {
        y: 40,
        filter: "blur(30px)",
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power2.inOut"
      })
      gsap.from("#title", {
        scrollTrigger: {
          trigger: "#title",
          start: "top 95%"
        },
        y: 40,
        filter: "blur(30px)",
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut"
      })
      gsap.from(".card-container #card", {
        scrollTrigger: {
          trigger: ".card-container",
          start: "top 90%"
        },
        y: 40,
        filter: "blur(30px)",
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.inOut"
      })
    });

    return () => ctx.revert();
  }, []);



  return (
    <section className="w-full bg-[#040414] relative overflow-hidden px-5 py-20 md:p-10 xl:p-20">
      <div className="absolute top-0 right-32  w-[12rem] h-[2rem] md:w-[30rem] md:h-[5rem] bg-[#fdbb58de] rounded-full blur-[100px] opacity-30 z-0"></div>
      <div className="absolute top-0 left-0 w-[5rem] h-[2rem] md:w-[38rem] md:h-[5rem] bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 rounded-full blur-[100px] opacity-50 z-0"></div>
      <PageHeader
        title="Shaping Tomorrow with Creativity."
        subtitle="Transforming ideas into meaningful digital experiences."
      />
      <div className='w-full mt-20 md:mt-30'>
        <div className='w-full flex lg:flex-row flex-col-reverse justify-between items-center py-10 lg:py-20'>
          <div className='w-full lg:w-1/2'>
            <h2 ref={titleRef} className='orbitron-regular text-zinc-200 tracking-tight text-3xl md:text-5xl lg:text-6xl space-x-3'>
              {"Who We Are".split(" ").map((w, i) => (<span key={i} className='inline-block'>{w}</span>))}
            </h2>
            <p className='para poppins-regluar text-zinc-300 md:text-xl lg:text-2xl mt-10'>
              At Gravity, we believe creativity is more than just design - it’s the force that pushes boundaries,
              sparks innovation, and shapes the future. From bold ideas to seamless execution,
              we craft digital experiences that not only look stunning but also perform with purpose.
              Whether it’s immersive 3D design, scalable development, or powerful branding, we transform visions into experiences that truly resonate.
            </p>
          </div>
          <div className='w-full lg:w-1/2 flex justify-center items-center relative'>
            <div className='image w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[25rem] lg:h-[25rem] z-50 mb-10 lg:mb-0'>
              <img src={orb} alt="" className='w-full h-full' />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10rem] h-[10rem] md:w-[30rem] md:h-[30rem] bg-gradient-to-r bg-blue-600  rounded-full blur-[100px] opacity-30 z-0"></div>
          </div>
        </div>

        <div className='w-full py-10 lg:py-20'>
          <h2 className='creation orbitron-regular text-zinc-200 tracking-tight text-3xl md:text-5xl lg:text-6xl space-x-3'>
            {"Our Creation Sequence".split(" ").map((w, i) => (<span key={i} className='inline-block'>{w}</span>))}
          </h2>
          <div className='approach flex flex-wrap gap-10 justify-center items-center mt-20 z-50'>
            {devApproach.map((item, i) => (

              <div id='card' key={i} className='w-80 p-4 rounded-xl bg-[#9d9dad27] backdrop-blur-2xl z-50'>
                <h2 className='orbitron-semibold text-xl text-zinc-200'>{item.title}</h2>
                <p className='poppins-light text-zinc-400 mt-4'>{item.desc}</p>
              </div>

            ))}
          </div>
        </div>

        <div className='w-full flex justify-center items-center flex-col py-10 lg:py-20'>
          <div className='w-full lg:w-[70%]'>
            <h2 id='title' className='orbitron-bold text-4xl md:text-6xl lg:text-7xl gradient-text text-center'>A creative force backed by collaborators.</h2>
          </div>
          <div className='card-container flex flex-wrap justify-center gap-10 py-10 lg:py-20'>
            {teams.map((team, index) => (
              <div id='card' key={index} className={`rounded-xl h-fit bg-[#9d9dad27] backdrop-blur-2xl`}
                style={{ marginTop: isMobile ? "0px" : `${team.top}px` }}
              >
                <div className='w-full md:w-96 h-96 p-1 rounded-xl'>
                  <img src={team.image} className='w-full h-full object-cover rounded-xl' alt="" />
                </div>
                <div className='p-5 space-y-1'>
                  <h2 className='orbitron-regular text-zinc-200'>{team.name}</h2>
                  <h3 className='poppins-regular text-zinc-400'>{team.role}</h3>
                  <h3 className='poppins-regular text-zinc-300'>{team.role2}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <CTA />
      </div>
    </section>
  )
}

export default About