import React from 'react'
import { Link } from 'react-router-dom';
import GGS from "/GGS.png";
import Button from './buttons/Button';

const menuItem = [
  { title: "Work", link: "/work" },
  { title: "Services", link: "/services" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
]

const Navbar = () => {
  return (
    <nav className='w-full flex justify-center items-center overflow-hidden fixed top-0 z-999'>
      <div className="h-auto w-full max-w-[150rem] mx-auto px-5 md:px-20 py-3 flex justify-between items-center shadow-md transition-transform">
        <div className='left'>
          <Link to={"/"}><img src={GGS} alt="logo" id='logo' className='h-16 w-fit' /></Link>
        </div>
        <div className='right flex items-center gap-10 bg-transparent bg-opacity-30 backdrop-blur-2xl rounded-xl px-5 py-3'>
          {menuItem.map((menu, index) => (
            <Link key={index} to={menu.link} >
            <h4  className='orbitron-regular text-white hover:text-[#AC04E3]'>{menu.title}</h4>
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
      </div>
    </nav>
  )
}

export default Navbar