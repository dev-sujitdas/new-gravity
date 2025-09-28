import React from 'react'

const PageHeader = ({title, subtitle}) => {
  return (
     <div className='w-full h-[30vh] md:h-[30vh] lg:h-[30vh] xl:h-[60vh] 2xl:h-[50vh] relative'>     
        <div className="absolute top-0 right-32  w-[30rem] h-[20rem] md:w-[30rem] md:h-[10rem] bg-[#fdbb58de] rounded-full blur-[100px] opacity-30 z-0"></div>
        <div className="absolute top-0 left-0 w-[10rem] h-[10rem] md:w-[38rem] md:h-[10rem] bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 rounded-full blur-[100px] opacity-50 z-0"></div>
        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-end items-center lg:px-32'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl orbitron-extrabold gradient-text text-center tracking-tight'>
            {title.split('').map((word, i)=>(
              <span key={i}>{word}</span>
            ))}
          </h1>
          <h3 className='text-zinc-300 mt-5 md:mt-10 poppins-regular text-sm md:text-xl lg:text-2xl'>{subtitle}</h3>
        </div>
      </div>
  )
}

export default PageHeader