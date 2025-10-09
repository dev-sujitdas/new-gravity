import React, { useContext, useRef } from "react";
import gsap from "gsap";
import { FaStarOfLife } from "react-icons/fa";
const ProjectCard = React.lazy(() => import("../components/ProjectCard"));
import { ProjectContext } from "./context/ProjectContext";
import Button from "./buttons/Button";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const words = "A Creative, Strategic Partner — for Dreamers and Doers.";
const para = "Where clutter dominates, we bring clarity. With fearless creativity and precise strategy, we transform brands into stories that captivate, inspire, and move people to act.";

const ProjectsShowcase = () => {
  const { projData } = useContext(ProjectContext);
  const gradientTitleRef = useRef(null);
  const paraRef = useRef(null);  
  const buttonRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const spans = gradientTitleRef.current.querySelectorAll("span");
    
    gsap.timeline({
      scrollTrigger: {
        trigger: subtitleRef.current,
        start: "top 90%",
      }
    })
    .from(subtitleRef.current, {
      width: 0,
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut"
    })
    .from(spans, {
      y: 40,
      filter: "blur(20px)",
      opacity: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: "power2.inOut"
    }, "-=0.3")
    .from(buttonRef.current, {
      opacity: 0,
      y: 40,
      filter: "blur(20px)",
      duration: 0.8,
      ease: "power2.inOut"
    }, ">");
 
}, []);

  useGSAP(() => {
    const paraWords = paraRef.current.querySelectorAll("span");
    gsap.fromTo(
      paraWords,
      { color: "#555" },
      {
        color: "#fff",
        stagger: 0.1,
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 100%",
          end: "bottom 30%",
          scrub: true,
        },
      }
    );
    
  }, []);


  return (
    <section className="w-full bg-[#040414] px-5 py-20 md:p-10 xl:p-20 relative overflow-hidden">
      <div ref={subtitleRef} className="w-full xl:w-[95%] 2xl:w-[90%]">
        <h4 className="text-sm md:text-lg poppins-semibold tracking-tighter uppercase gradient-text2 flex gap-2 items-center">
          <span className="text-[#ffbd599a]">
            <FaStarOfLife />
          </span>
          {"Small preview, big possibilities.".split("").map((char, i) => <span key={i}>{char}</span>)}
        </h4>

        {/* Gradient title */}
        <h2
          ref={gradientTitleRef}
          id="gradient-title"
          className="flex flex-wrap gap-2 text-3xl md:text-5xl xl:text-7xl 2xl:text-8xl orbitron-semibold mt-5 md:mt-10"
        >
          {words.split(" ").map((char, i) => (
            <span key={i} className="inline-block text-zinc-200">{char}</span>
          ))}
        </h2>

        <div className="absolute mt-5 top-[10%] right-0 -translate-x-[50%] translate-y-1/2 w-[10rem] h-[10rem] md:w-[20rem] md:h-[20rem] bg-[#fdbb58c7] rounded-full blur-[100px] opacity-20 z-0"></div>
      </div>

      <div className="absolute mt-5 bottom-[30%] left-0 translate-x-[50%] translate-y-1/2 w-[10rem] h-[10rem] md:w-[14rem] md:h-[14rem] bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 rounded-full blur-[100px] opacity-50 z-0"></div>

      <div ref={buttonRef} className="w-full flex justify-end p-5">
        <Button title="See all work" link="/work" />
      </div>

      {/* Project Cards */}
      <div  className="flex flex-wrap gap-5 xl:gap-10 justify-center">
        {projData.slice(0, 4).map((project, index) => (
          <ProjectCard
            {...project}
            key={index}                       
          />
        ))}
      </div>

      {/* Paragraph */}
      <div className="w-full text-justify mt-20 lg:mt-32">
        <h2
          ref={paraRef}
          className="orbitron-regular text-[clamp(1.4rem,3vw,3rem)] mx-auto leading-relaxed"
        >
          {para.split("").map((word, i) => (
            <span key={i}>{word}</span>
          ))}
        </h2>

        <div  className="w-fit mt-10">
          <Button
            ref={buttonRef}
            title="Start a project"
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
  );
};

export default ProjectsShowcase;
