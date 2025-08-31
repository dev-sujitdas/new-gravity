import React, { useContext } from "react";
import { FaStarOfLife } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import { ProjectContext } from "./context/ProjectContext";
import { Link } from "react-router-dom";
import Button from './buttons/Button';

const ProjectsShowcase = () => {
  const { projData } = useContext(ProjectContext);

  const words = "A Creative, Strategic Partner — for Dreamers and Doers.";
  const para = "Where clutter dominates, we bring clarity. With fearless creativity and precise strategy, we transform brands into stories that captivate, inspire, and move people to act."

  return (
    <section className="w-full bg-[#040414] p-20 relative overflow-hidden">
      <div className="w-[95%]">
        <h4 className="text-lg poppins-regular uppercase text-zinc-300 flex gap-2 items-center">
          <span>
            <FaStarOfLife />
          </span>
          Small preview, big possibilities.
        </h4>       
        <h2 className="text-white text-8xl orbitron-semibold mt-10">
          {words.split('').map((word, i) => (
            <span key={i}>{word}</span>
          ))}
        </h2>
       
        <div className="absolute mt-5 top-[10%] right-0 -translate-x-[50%] translate-y-1/2 w-[10rem] h-[10rem] md:w-[20rem] md:h-[20rem] bg-[#fdbb58c7] rounded-full blur-[100px] opacity-20 z-0"></div>
      </div>
      <div className="absolute mt-5 bottom-[30%] left-0 translate-x-[50%] translate-y-1/2 w-[10rem] h-[10rem] md:w-[14rem] md:h-[14rem] bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 rounded-full blur-[100px] opacity-50 z-0"></div>
      <div className="w-full flex justify-end p-5">
        <Button
          title="See all work"
          bodyColor="bg-[#040414]"
          bodyText="text-white"
          titleSize="1rem"
          width="w-fit"
          circleColor="bg-white"
          circleSize="2.5rem"
          link="/work"
        />
      </div>
      <div className="flex flex-wrap gap-10 justify-center">
        {projData.slice(0, 4).map((data, index) => (
          <Link key={index} to={`/projects/${data.title}`} className="z-50">
            <ProjectCard
              {...data}
            />
          </Link>
        ))}
      </div>

      <div className="w-full text-justify mt-32">     

        <h2 className="text-zinc-200 orbitron-regular text-[clamp(1.6rem,4vw,3rem)]">
          {para.split('').map((words, i) => (
            <span key={i}>{words}</span>
          ))}
        </h2>

        <div className="w-fit mt-10">
          <Button
            title="Strat a project"
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
