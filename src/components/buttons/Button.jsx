import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Button = ({ title, onClick, link, type }) => {
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
            type={type}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`p-1 bg-[#040414] rounded-full w-fit flex items-center justify-between cursor-pointer`}
          >
            <h2 className={`text-white px-4 orbitron-medium text-sm md:text-base`}>{title}</h2>

            <div
              className={`bg-white circle relative flex justify-center items-center rounded-full overflow-hidden h-[2rem] w-[2rem] md:h-[2.5rem] md:w-[2.5rem]`}>
              <span
                ref={icon1Ref}
                className={`absolute w-full h-full flex items-center justify-center text-lg text-black`}
              >
                <FiArrowUpRight />
              </span>
              <span
                ref={icon2Ref}
                className={`absolute w-full h-full flex items-center justify-center text-lg text-black`}
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
