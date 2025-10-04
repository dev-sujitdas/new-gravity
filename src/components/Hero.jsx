import React, { Suspense, useRef } from "react";
const Orb = React.lazy(() => import("./shadersComponents/Orb"));
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Loader from "../suspense/Loader";


const Hero = () => {
  const wordRefs = useRef([]);
  const orbRef = useRef(null);
  const bottomRef = useRef(null);

  useGSAP(() => {
  // Step 1 & 2: bottom content -> orb
  const mainTl = gsap.timeline({
    defaults: { ease: "power2.inOut" },
  });

  mainTl
    .from(bottomRef.current, {
      delay: 1.2,
      y: 100,
      opacity: 0,
      filter: "blur(20px)",
      duration: 1.4,
    })
    .from(orbRef.current, {
      z: 0,
      opacity: 0,
      duration: 0.7,
    });

  // Step 3: word loop starts after mainTl completes
  mainTl.call(() => {
    const wordTl = gsap.timeline({
      repeat: -1,
      defaults: { duration: 1, ease: "power2.inOut" },
    });

    wordRefs.current.forEach((el) => {
      wordTl.fromTo(
        el,
        { opacity: 0, filter: "blur(20px)", y: 50 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1 }
      );
      wordTl.to(el, {
        opacity: 0,
        filter: "blur(0px)",
        y: -50,
        duration: 1,
        delay: 0.8,
      });
    });
  });
}, []);


  return (
    <section
      id="hero"
      className="w-full h-[100svh] md:h-screen bg-[#040414] flex justify-center items-center relative p-10 md:p-20"
    >
      {/* Orb */}
      <div ref={orbRef} className="h-full w-full">
        <Suspense fallback={<Loader/>}>
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
            className="orb"
          />
        </Suspense>
      </div>

      {/* Animated Text */}
      <div className="absolute flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center items-center pointer-events-none relative">
          {["Design", "Develop", "Deploy"].map((word, i) => (
            <h1
              key={i}
              ref={(el) => (wordRefs.current[i] = el)}
              className="opacity-0 hero-title text-5xl md:text-8xl lg:text-9xl xl:text-8xl 2xl:text-9xl orbitron-extrabold text-zinc-50 uppercase absolute"
            >
              {word}
            </h1>
          ))}
        </div>
      </div>

      {/* Bottom Content */}
      <div
        ref={bottomRef}
        className="absolute bottom-0 left-0 w-full px-5 md:px-10 xl:px-20 flex lg:flex-row flex-col justify-between items-center"
      >
        <div className="content left 2xl:w-[30%] xl:w-[40%] lg:w-[50%] w-full md:pb-10">
          <h2 className="text-3xl md:text-3xl xl:text-3xl 2xl:text-4xl orbitron-bold text-zinc-200">
            Creative Agency
          </h2>
          <p className="text-base md:text-base 2xl:text-lg mt-5 pb-5 md:pb-0 text-zinc-300 poppins-light">
            Gravity Global Solution creates digital experiences that transform
            brands and engage audiences. We’re your creative partner, bringing
            visions to life.
          </p>
        </div>

        <div className="right lg:flex flex-col justify-center items-center hidden">
          <div>
            <h2 className="text-zinc-200 text-2xl xl:text-3xl orbitron-regular">
              You bring the vision
            </h2>
            <h2 className="text-zinc-200 text-2xl xl:text-3xl orbitron-regular">
              {" "}
              — We craft the journey.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
