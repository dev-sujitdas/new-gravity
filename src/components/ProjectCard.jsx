import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const ProjectCard = ({ num, video, tag, title, subtitle, top }) => {
  const followerRef = useRef(null);
  const containerRef = useRef(null);
  const projectRef = useRef(null)

  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth <= 1024);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFollowerMove = (e) => {
    const container = containerRef.current.getBoundingClientRect();
    const x = e.clientX - container.left - 50;
    const y = e.clientY - container.top - 50;

    gsap.to(followerRef.current, {
      opacity: 1,
      x,
      y,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const mouseEnter = (e) => {
    const video = e.currentTarget.querySelector("video");
    if (video) video.play();

    handleFollowerMove(e);
    gsap.fromTo(
      followerRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
    );
  };

  const mouseLeave = (e) => {
    const video = e.currentTarget.querySelector("video");
    if (video) video.pause();

    gsap.to(followerRef.current, { opacity: 0, scale: 0.5, duration: 0.3 });
  };

  useGSAP(() => {
    gsap.from(projectRef.current, {
      y: 50,
      opacity: 0,
      filter: "blur(30px)",
      ease: "power2.inOut",
      duration: 0.8,
      scrollTrigger: {
        trigger: projectRef.current,
        start: "top 95%",
      },
    })
  }, [])


  return (
    <Link to={`/projects/${title}`} className="z-50">
      <div
        ref={projectRef}
        className="@xs:w-[470px] md:w-[330px] lg:w-[450px] xl:w-[520px] 2xl:w-[750px] z-30"
        style={{ marginTop: isSmall ? "0px" : `${top}px` }}
      >
        <div className="mb-5 px-4">
          <h2 id="num" className="orbitron-bold text-4xl lg:text-7xl">{num}</h2>
        </div>

        <div
          ref={containerRef}
          onMouseEnter={isSmall ? null : mouseEnter}
          onMouseLeave={isSmall ? null : mouseLeave}
          onMouseMove={isSmall ? null : handleFollowerMove}
          className={`video-container w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card relative overflow-hidden ${isSmall ? "" : "cursor-none"}`}
        >
          <video
            className="w-full h-full object-contain rounded-[20px]"
            autoPlay={isSmall ? true : false}
            muted
            loop
            playsInline
          >
            {video.map((vid, i) => (
              <source key={i} src={vid.src} type={vid.type} />
            ))}
          </video>

          <div
            ref={followerRef}
            className="mousefollower absolute top-0 left-0 h-28 w-28 rounded-full bg-black/30 backdrop-blur-sm  flex justify-center items-center opacity-0 pointer-events-none z-[999]"
          >
            <h3 className="orbitron-regular text-zinc-200 text-sm">View Work</h3>
          </div>
        </div>

        <div className="flex flex-wrap flex-col w-full mt-2 px-4">
          <div className="flex flex-wrap gap-2">
            {tag?.design && (
              <div className="px-3 py-1 text-sm md:text-base text-zinc-300 bg-slate-800 rounded-lg poppins-regular">
                <h2>UI/UX Design</h2>
              </div>
            )}
            {tag?.develop && (
              <div className="px-3 py-1 text-sm md:text-base text-zinc-300 bg-slate-800 rounded-lg poppins-regular">
                <h2>Development</h2>
              </div>
            )}
            {tag?.concept && (
              <div className="px-3 py-1 text-sm md:text-base text-zinc-300 bg-red-700 rounded-lg poppins-regular">
                <h2>Concept</h2>
              </div>
            )}
          </div>

          <h3 className="text-zinc-300 text-[1rem] lg:text-[1.2rem] font-bold text-center orbitron-medium flex flex-row items-center gap-5 mt-2">
            {title}
          </h3>
          <h4 className="text-sm md:text-base lg:text-lg text-zinc-400 poppins-light">
            {subtitle}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
