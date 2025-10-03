import React, { useContext, useEffect } from 'react'
import { ProjectContext } from '../components/context/ProjectContext'
const PageHeader = React.lazy(()=>import('../components/PageHeader'));
const ProjectCard = React.lazy(() => import("../components/ProjectCard"));
const CTA = React.lazy(() => import("../components/CTA"));

const Works = () => {
  const { projData } = useContext(ProjectContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const title = "Where Creativity Powers Innovation.";

  return (
    <section className="w-full bg-[#040414] relative overflow-hidden px-5 py-20 md:p-10 xl:p-20">
      <div className="absolute top-0 right-32  w-[12rem] h-[2rem] md:w-[30rem] md:h-[5rem] bg-[#fdbb58de] rounded-full blur-[100px] opacity-30 z-0"></div>
        <div className="absolute top-0 left-0 w-[5rem] h-[2rem] md:w-[38rem] md:h-[5rem] bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 rounded-full blur-[100px] opacity-50 z-0"></div>
      <PageHeader
        title="Where Creativity Powers Innovation."
        subtitle="Because Every Great Future Starts With a Creative Spark."
      />

      <div className='mt-30'>
        <div className="flex flex-wrap gap-5 lg:gap-10 justify-center">
          {projData.map((project, index) => (
            <ProjectCard
              {...project}
              num={project.num}
              video={project.video}
              title={project.title}
              subtitle={project.subtitle}
              tag={project.tag}
              top={project.top}
              key={index}
            />
          ))}
        </div>
      </div>
      <CTA />
    </section>
  )
}

export default Works