import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Button = ({
  width,
  title,
  titleSize,
  textColor,
  bodyColor,
  circleColor,
  bodyText,
  circleText,
  circleSize,
  onClick,  
  link
}) => {
  const icon1Ref = useRef(null);
  const icon2Ref = useRef(null);

  useGSAP(() => {
    
    gsap.set(icon1Ref.current, { x: 0, y: 0, opacity: 1 });
    gsap.set(icon2Ref.current, { x: -20, y: 20, opacity: 0 });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(icon1Ref.current, {
      x: 20,
      y: -20,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(icon2Ref.current, {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(icon2Ref.current, {
      x: -20,
      y: 20,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(icon1Ref.current, {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <>
    <div id="button" className="green-pink-gradient p-[1px] rounded-full">
    <Link to={link} >
      <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`p-1 ${bodyColor} rounded-full ${width} flex items-center justify-between cursor-pointer`}      
    >
      <h2 className={`${bodyText} px-4 orbitron-medium`} style={{ fontSize: titleSize }}>{title}</h2>

      <div
        className={`${circleColor} circle relative flex justify-center items-center rounded-full ${textColor} overflow-hidden`}
      style={{ height: circleSize, width: circleSize }}>        
        <span
          ref={icon1Ref}
          className={`absolute w-full h-full flex items-center justify-center text-lg ${circleText}`}
        >
          <FiArrowUpRight />
        </span>        
        <span
          ref={icon2Ref}
          className={`absolute w-full h-full flex items-center justify-center text-lg ${circleText}`}
        >
          <FiArrowUpRight />
        </span>
      </div>
    </button>
    </Link>
    </div>
    </>
    
  );
};

export default Button;
