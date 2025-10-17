import { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Button from './buttons/Button';
import device from "/Images/device.webp";
import { ServiceContext } from "./context/ServiceContext";
import { useGSAP } from "@gsap/react";


const heading = "Where Visions Take Orbit";

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
]


const ServicesShowcase = () => {
  const imgRefs = useRef([]);
  const headerRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const buttonRef = useRef(null);
  const approachRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);
  const { serviceData } = useContext(ServiceContext);

  const mobileView = 768;
  useEffect(() => {
    const checkResize = () => {
      setIsMobile(window.innerWidth < mobileView);
    };

    checkResize();
    window.addEventListener("resize", checkResize);

    return () => window.removeEventListener("resize", checkResize);
  }, []);

  const handleMouseMove = (e, index) => {
    const img = imgRefs.current[index];

    if (!img) return;

    const parent = e.currentTarget;
    const rect = parent.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const moveX = (offsetX - rect.width / 2) / 10;
    const moveY = (offsetY - rect.height / 2) / 10;

    gsap.to(img, {
      x: moveX,
      y: moveY,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    const img = imgRefs.current[index];
    if (!img) return;

    gsap.to(img, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  useGSAP(() => {
    const spans = headerRef.current.querySelectorAll("span");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 95%",
      }
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 90%",
      }
    });

    tl.from(spans, {
      y: 40,
      filter: "blur(20px)",
      opacity: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: "power2.inOut",
    });

    tl.from(buttonRef.current, {
      y: 40,
      filter: "blur(20px)",
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
    })

    gsap.utils.toArray(".service-list").forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 100%",
          end: "top 50%",
        },
        duration: 0.4,
        filter: "blur(30px)",
        opacity: 0,
        ease: "back.out(1.5)",
      });
    })

    tl2.from(headingRef.current, {
      y: 40,
      filter: "blur(20px)",
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
    })

    tl2.from(subheadingRef.current, {
      y: 40,
      filter: "blur(20px)",
      opacity: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: "power2.inOut",
    })

    tl2.from(".device", {
      y: 40,
      filter: "blur(20px)",
      opacity: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: "power2.inOut",
    })
    
    gsap.from(approachRefs.current, {
      scrollTrigger: {
        trigger: approachRefs.current[0],
        start: "top 90%",
        end: "top 50%",
      },
      y: 40,
      duration: 0.8,
      filter: "blur(30px)",
      opacity: 0,
      ease: "power2.inOut",
      stagger: 0.2, 
    });
  
  }, [])


  return (
    <section className='w-full px-5 py-20 md:p-10 xl:p-20 bg-[#040414] relative'>
      {/* <div className="absolute mt-5 top-0 right-0 -translate-x-[50%] translate-y-[10%] w-[10rem] h-[10rem] md:w-[30rem] md:h-[30rem] bg-[#FDBC58] rounded-full blur-[100px] opacity-20 z-10"></div> */}
      <div className='flex md:flex-row flex-col justify-between'>
        <h2 ref={headerRef} className='text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-zinc-100 orbitron-regular space-x-3'>
          {"Our Creative Arsenal".split(" ").map((w, i) => (<span key={i} className="inline-block">{w}</span>))}
        </h2>
        <div ref={buttonRef} className='md:px-5 w-full md:w-auto h-auto flex justify-end items-center mt-5 md:mt-0'>
          <Button
            title="Explore more"
            bodyColor="bg-[#040414]"
            bodyText="text-white"
            titleSize="1rem"
            width="w-fit"
            circleColor="bg-white"
            circleSize="2.5rem"
            link="/services"
          />
        </div>
      </div>


      <div className='w-full mt-20 lg:mt-30'>
        {serviceData.map((items, index) => {
          const isFirst = index === serviceData.length - 5;
          const isMid = index !== serviceData.length - 1;
          const isLast = index === serviceData.length - 1;
          return (
            <div
              key={index}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className={`service-list ${isFirst ? "pt-[1px]" : ""} ${isMid && "pb-[1px]"} ${isLast && "pb-[1px]"} gradient-to-right relative group`}>
              <div className={` flex lg:flex-row flex-col select-none  hover:bg-transparent duration-500 transition-all bg-[#040414]`}>
                <div
                  className={`xl:w-[40%] w-full py-3 md:py-[2rem] md:px-5 flex gap-5 items-center`}
                >
                  <div className="w-24 flex">
                    <h2
                      id="num2"
                      className=" text-4xl md:text-4xl xl:text-5xl orbitron-semibold text-transparent"
                    >
                      {items.num}
                    </h2>
                  </div>
                  <h2 className="title 2xl:w-[20rem] w-full text-2xl xl:text-3xl 2xl:text-4xl orbitron-regular text-zinc-300 tracking-tight">
                    {items.title}
                  </h2>
                </div>
                <div
                  className={isMobile ? "hidden" : "w-[25%] pointer-events-none "}
                >
                  <img
                    ref={(el) => (imgRefs.current[index] = el)}
                    className="absolute w-72 h-64 -top-20 rounded-xl object-cover z-[777] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    src={items.img}
                    alt=""
                  />
                </div>
                <div className="xl:w-[45%] pb-3  w-full flex justify-center items-center lg:px-5 lg:py-3 relative">
                  <p className="text-sm lg:text-base 2xl:text-lg text-justify poppins-regular text-zinc-400 group-hover:text-[#313133] leading-7">
                    {items.description}
                  </p>

                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className='flex flex-col justify-center items-center mt-24 md:mt-32 relative'>
        <h2 ref={headingRef} className='gradient-text text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl orbitron-semibold w-full md:w-[70%] text-center z-50  tracking-tight'>
          {heading.split('').map((words, i) => (
            <span key={i}>{words}</span>
          ))}
        </h2>
        <div ref={subheadingRef} className=' w-full md:w-[50%] 2xl:w-[45%] mt-10 z-50'>
          <h3 className='text-zinc-400 text-center xl:text-xl 2xl:text-2xl poppins-light'>
            Gravity Global Solution connects ideas and innovation
            — through creative web design, seamless development, responsive design
            and meaningful digital impact.
          </h3>
        </div>

        <div className='relative flex justify-center items-center'>
          <div className='device mt-20 w-full md:w-[80%] z-50'>
            <img src={device} alt="" />
          </div>
        </div>
        <div className="absolute mt-5 bottom-0 left-1/2 -translate-x-[50%]  w-[10rem] h-[10rem] md:w-[48rem] md:h-[48rem] bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 rounded-full blur-[100px] opacity-30 z-0"></div>

        <div className='flex flex-wrap gap-5 md:gap-10 justify-center items-center mt-20 z-50'>
          {devApproach.map((item, i) => (
            <div ref={(el) => (approachRefs.current[i] = el)} key={i} className='w-full md:w-80 p-4 rounded-xl bg-[#9d9dad27] backdrop-blur-2xl z-50'>
              <h2 className='orbitron-semibold text-lg md:text-xl text-zinc-200'>{item.title}</h2>
              <p className='poppins-light text-sm md:text-base text-zinc-400 mt-4'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesShowcase
