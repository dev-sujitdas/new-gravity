import React from 'react'

const techIcon = [
  "/Tech/figma.png", 
  "/Tech/html.png", 
  "/Tech/css.png", 
  "/Tech/javascript.png", 
  "/Tech/reactjs.png", 
  "/Tech/tailwind.png", 
  "/Tech/nodejs.png", 
  "/Tech/redux.png", 
  "/Tech/mongodb.png", 
  "/Tech/git.png", 
  "/Tech/docker.png", 
  "/Tech/threeJs.png", 
  "/Tech/gsap.png"
];

const TechStack = () => {

  const duplicatedIcons = [...techIcon, ...techIcon];

  return (
    <section className='w-full bg-[#040414] px-5 py-20 md:p-10 xl:p-20'>
      <div className='w-full flex justify-center items-center'>
        <h2 className='text-zinc-300 orbitron-regular text-3xl lg:text-4xl xl:text-5xl tracking-tight'>Our Tech Arsenal</h2>
      </div>
      <div className='marquee_track flex no-wrap will-change-transform relative mt-20'>
        <div className="absolute left-0 top-0 h-full w-20 md:w-96 bg-gradient-to-r from-[#040414] to-transparent z-10"></div>
        <div className='marquee_list flex gap-10 md:gap-16'>
          {duplicatedIcons.map((img, i) => (
            <img key={i} src={img} alt="" className='h-20 w-20' />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-96 bg-gradient-to-l from-[#040414] to-transparent z-10"></div>
      </div>
    </section>
  )
}

export default TechStack