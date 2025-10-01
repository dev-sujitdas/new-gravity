import React, { useEffect, useContext } from 'react';
import { ServiceContext } from "../components/context/ServiceContext";
import { ProjectContext } from '../components/context/ProjectContext';
const ProjectCard = React.lazy(()=>import('../components/ProjectCard'));
const PageHeader = React.lazy(() => import('../components/PageHeader'));
const CTA = React.lazy(() => import("../components/CTA"));

const Services = () => {
  const { serviceData } = useContext(ServiceContext);
  const { projData } = useContext(ProjectContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const servicesBtn = [
    { title: "UI/UX Design", link: "ui-ux" },
    { title: "3D Web Design", link: "design" },
    { title: "Development", link: "dev" },
    { title: "Branding", link: "branding" },
    { title: "SEO", link: "seo" },
  ];

  return (
    <section className="w-full bg-[#040414] md:px-0 relative overflow-hidden px-5 py-20 md:p-10 lg:p-10 xl:p-20">      
      <div className='px-5'>
        <PageHeader
          title="Services That Power Tomorrow."
        />
        <div className='serviceBtn flex flex-wrap justify-center items-center gap-5 mt-5 md:px-10'>
          {servicesBtn.map((btn, i) => (
            <button key={i} className='gradient-to-right p-[1px] rounded-full cursor-pointer'>
              <div className='px-4 py-2 rounded-full bg-[#040414] hover:bg-transparent transition-all text-zinc-200 text-sm md:text-xl orbitron-regular'>
                {btn.title}
              </div>
            </button>
          ))}
        </div>
      </div>
      
      <div className='w-full mt-20 md:mt-30 md:p-10'>
        {serviceData.map((service, index) => {
          const isLast = index === serviceData.length - 1
          const isLastThree = index >= serviceData.length - 3;
          const relatedProject = projData.find(
            (project) => project.serviceTitle === service.title
          );

          return (
            <div key={index} className={`pt-[1px] ${isLast ? "pb-[1px]" : ""} gradient-to-right relative group`}>
              <div className={`service-card w-full flex flex-col-reverse md:flex-row  justify-between items-center bg-[#040414] ${isLastThree ? "md:pt-10 pt-5" : "pt-5"} pb-10`}>

                {/* Left */}
                <div className='w-full lg:w-1/2 mt-5 md:mt-0 md:px-2 xl:p-5'>
                  <h2 className='text-2xl md:text-3xl lg:text-5xl orbitron-semibold text-zinc-200'>{service.title}</h2>
                  <h3 className='text-sm md:text-base lg:text-xl poppins-regular mt-5 text-zinc-300'>{service.description}</h3>
                  <ul className="list-disc pl-6 mt-5 space-y-2">
                    {service.list.map((list, i) => (
                      <li key={i} className='text-sm lg:text-lg poppins-regular text-zinc-400'>{list}</li>
                    ))}
                  </ul>
                </div>

                {/* Right */}
                <div className='w-full lg:w-1/2 flex justify-center items-center'>
                  {relatedProject ? (
                    <ProjectCard
                      {...relatedProject}
                      num=""
                      video={relatedProject.video}
                      title={relatedProject.title}
                      subtitle={relatedProject.subtitle}
                      tag={relatedProject.tag}
                      top={relatedProject.top}
                      key={index}
                    />
                  ) : (
                    <p className="text-gray-500 text-sm">No video available</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <CTA title={"title"} />
    </section>
  );
};

export default Services;
