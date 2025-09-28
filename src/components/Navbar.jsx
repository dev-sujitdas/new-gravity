import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import GGS from "/GGS.png";
import GGSIco from "/GGS-icon.png";
import Button from './buttons/Button';

const menuItem = [
  { title: "Work", link: "/work" },
  { title: "Services", link: "/services" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
]

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    const handleResize = ()=> setIsMobile(window.innerWidth <=768);

    handleResize();
    window.addEventListener('resize', handleResize);

    return ()=> window.removeEventListener('resize', handleResize);
  },[]);

  return (
    <nav className='w-full flex justify-center items-center overflow-hidden fixed top-0 z-999'>
      <div className="h-auto w-full max-w-[150rem] mx-auto px-5 md:px-10 xl:px-20 py-3 flex justify-between items-center shadow-md transition-transform">
        <div className='left'>
          {isMobile ? (
            <Link to={"/"}><img src={GGSIco} alt="logo" id='logo' className='h-12 md:h-16 w-fit' /></Link>
          ): (
            <Link to={"/"}><img src={GGS} alt="logo" id='logo' className='h-16 w-fit' /></Link>
          )}
        </div>
        {isMobile ? (
          <>
          <div className='mob-nav-right'>
            <h2 className='flex flex-col gap-2'>
              <div className='h-1 w-8 bg-zinc-100 rounded-2xl'></div>
              <div className='h-1 w-6 bg-zinc-400 rounded-2xl'></div>
              <div className='h-1 w-8 bg-zinc-100 rounded-2xl'></div>
            </h2>
          </div>
          </>
        ) : (
          <div className='nav-right flex items-center gap-10 bg-white/10 backdrop-blur-2xl rounded-xl px-5 py-3'>
          {menuItem.map((menu, index) => (
            <Link key={index} to={menu.link} >
            <h4  className='orbitron-regular text-white hover:text-[#5985F4]'>{menu.title}</h4>
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