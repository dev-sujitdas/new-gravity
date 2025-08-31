import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from './buttons/Button';
import device from "/Images/device.png";
import design from "/Images/design.jpg";
import development from "/Images/development.jpg";
import design3d from "/Images/3d.jpg";
import branding from "/Images/branding.jpg";
import seo from "/Images/seo.jpg";


const services = [
  {
    num: "01",
    title: "UI/UX Design",
    description: "We craft intuitive, user-centered interfaces that enhance engagement, improve usability, and deliver seamless digital experiences.",
    img: design
  },
  {
    num: "02",
    title: "3D Web Design",
    description: "We design and develop 3d websites that grabs user's attention, blending functionality with creativity from concept to launch.",
    img: design3d
  },
  {
    num: "03",
    title: "Development",
    description: "We build scalable, high-performance web solutions with clean code and modern technologies, turning creative ideas into reliable digital products.",
    img: development
  },  
  {
    num: "04",
    title: "Branding",
    description: "We shape powerful brand identities that reflect your values, connect with audiences, and establish strong, lasting recognition.",
    img: branding
  },
  {
    num: "05",
    title: "SEO",
    description: "We optimize websites for higher search engine rankings, increased visibility, and sustainable organic traffic that drives conversions.",
    img: seo
  },
];

const ServicesShowcase = () => {
  const imgRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <section className='w-full p-20 bg-[#040414] relative'>
      {/* <div className="absolute mt-5 top-0 right-0 -translate-x-[50%] translate-y-[10%] w-[10rem] h-[10rem] md:w-[30rem] md:h-[30rem] bg-[#FDBC58] rounded-full blur-[100px] opacity-20 z-10"></div> */}
      <div className='flex justify-between'>
        <h2 className='text-6xl text-zinc-100 orbitron-regular'>Our Creative Arsenal</h2>
        <div className='px-5'>
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

      <div className='w-full mt-30'>
        {services.map((items, index) => {
          const isFirst = index === services.length - 5;
          const isMid = index !== services.length - 1;
          const isLast = index === services.length - 1;
          return (
            <div
              key={index}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className={`${isFirst ? "pt-[1px]" : "" } ${isMid && "pb-[1px]"} ${isLast && "pb-[1px]" } gradient-to-right relative group`}>
              <div className={`service-list flex lg:flex-row flex-col select-none  hover:bg-transparent transition-all bg-[#040414]`}>
                <div
                  className={`xl:w-[30%] w-full py-[2rem] px-5 flex justify-between gap-12 items-center`}
                >
                  <h2
                    id="num2"
                    className="text-4xl md:text-5xl orbitron-semibold text-transparent"
                  >
                    {items.num}
                  </h2>
                  <h2 className="xl:w-[20rem] w-full text-4xl orbitron-regular text-zinc-300">
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
                <div className="xl:w-[45%] w-full flex justify-center items-center lg:px-5 lg:py-3 relative">

                  <p className="lg:text-lg text-sm text-justify poppins-regular text-zinc-400 group-hover:text-zinc-800 leading-7">
                    {items.description}
                  </p>

                </div>
              </div>
            </div>
          );
        })}

      </div>

      <div className='flex flex-col justify-center items-center mt-32 relative'>
        <h2 className='text-zinc-100 text-8xl orbitron-semibold w-[70%] text-center z-50 leading-24'>
          {heading.split('').map((words, i) => (
            <span key={i}>{words}</span>
          ))}
        </h2>
        <div className='w-[45%] mt-10 z-50'>
          <h3 className='text-zinc-400 text-center text-2xl poppins-light'>
            Gravity Global Solution connects ideas and innovation
            — through creative web design, seamless development, responsive design
            and meaningful digital impact.
          </h3>
        </div>

        <div className='relative flex justify-center items-center'>
          <div className='mt-20 w-[80%] z-50'>
            <img src={device} alt="" />
          </div>
        </div>
        <div className="absolute mt-5 bottom-0 left-1/2 -translate-x-[50%]  w-[10rem] h-[10rem] md:w-[48rem] md:h-[48rem] bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 rounded-full blur-[100px] opacity-30 z-0"></div>

        <div className='flex flex-wrap gap-10 justify-center items-center mt-20 z-50'>
          {devApproach.map((item, i) => (
            <div key={i} className='w-80 p-4 rounded-xl bg-[#9d9dad27] backdrop-blur-2xl z-50'>
              <h2 className='orbitron-semibold text-xl text-zinc-200'>{item.title}</h2>
              <p className='poppins-light text-zinc-400 mt-4'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesShowcase
