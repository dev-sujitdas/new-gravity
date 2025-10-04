import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import gsap from "gsap";
import GGS from "/GGS.png";
import GGSIco from "/GGS-icon.png";
import Button from './buttons/Button';
import { useGSAP } from '@gsap/react';

const menuItem = [
  { title: "Work", link: "/work" },
  { title: "Services", link: "/services" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
]

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [toggle, setToggle] = useState(false);
  const navbuttonRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleHandler = () => setToggle((prev) => !prev);

  const linkToggle = () => setToggle(false);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (toggle) {
        gsap.to(".topLine", {
          rotation: 50,
          transformOrigin: "left center",
          duration: 0.4,
          ease: "power2.inOut"
        });

        gsap.to(".middleLine", {
          opacity: 0,
          duration: 0.3
        });

        gsap.to(".bottomLine", {
          rotation: -50,
          transformOrigin: "left center",
          duration: 0.4,
          ease: "power2.inOut"
        });
      } else {
        gsap.to(".topLine", { rotation: 0, duration: 0.4 });
        gsap.to(".middleLine", { opacity: 1, duration: 0.3 });
        gsap.to(".bottomLine", { rotation: 0, duration: 0.4 });
      }
    }, navbuttonRef);

    return () => ctx.revert();
  }, [toggle]);

  useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(navbarRef.current, {
      delay: 1.2,
      y: -100,
      opacity: 0,
      filter: "blur(20px)",
      duration: 1.4,
      ease: "power2.inOut"
    });
  });

  return () => ctx.revert();
  }, []);



  return (
    <nav ref={navbarRef} className='w-full flex justify-center items-center fixed top-0 z-[999] '>
      <div className="h-auto w-full max-w-[150rem] mx-auto px-5 md:px-10 xl:px-20 py-3 flex justify-between items-center transition-transform relative">
        <div className='left z-[999]'>
          {isMobile ? (
            <Link onClick={linkToggle} to={"/"}><img src={GGSIco} alt="logo" id='mobLogo' className='h-12 md:h-16 w-fit' /></Link>
          ) : (
            <Link to={"/"}><img src={GGS} alt="logo" id='logo' className='h-16 w-fit ' /></Link>
          )}
        </div>
        {isMobile ? (
          <>
            <div className='mob-nav-right z-[999]'>
              <button
                ref={navbuttonRef}
                onClick={toggleHandler}
                className="flex flex-col gap-2 focus:outline-none"
                aria-label="Toggle navigation"
              >
                <div className="topLine h-1 w-8 bg-zinc-100 rounded-2xl"></div>
                <div className="middleLine h-1 w-6 bg-zinc-400 rounded-2xl"></div>
                <div className="bottomLine h-1 w-8 bg-zinc-100 rounded-2xl"></div>
              </button>

            </div>
            {toggle && (
              <div className='fixed top-0 left-0 h-[100svh] w-full z-[777]'>
                <div className='nav-container h-full w-full flex flex-col gap-10 justify-center items-center bg-white/10 backdrop-blur-3xl'>
                  {menuItem.map((menu, i) => (
                    <Link onClick={linkToggle} key={i} to={menu.link} >
                      <h4 className='orbitron-semibold text-3xl md:text-4xl text-white hover:text-[#5985F4]'>{menu.title}</h4>
                    </Link>
                  ))}
                  <div className='mt-10'>
                    <Button
                      title="Start a project"
                      bodyColor="bg-[#040414]"
                      bodyText="text-white"
                      titleSize="1.5rem"
                      width="w-fit"
                      circleColor="bg-white"
                      circleSize="2.8rem"
                    />
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className='nav-right flex items-center gap-10 bg-white/10 backdrop-blur-2xl rounded-xl px-5 py-3'>
            {menuItem.map((menu, index) => (
              <Link key={index} to={menu.link} >
                <h4 className='orbitron-regular text-white hover:text-[#5985F4]'>{menu.title}</h4>
              </Link>
            ))}
            <div className='ml-5'>
              <Button
                title="Start a project"
                bodyColor="bg-[#040414]"
                bodyText="text-white"
                titleSize="1rem"
                width="w-fit"
                circleColor="bg-white"
                circleSize="2.5rem"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar