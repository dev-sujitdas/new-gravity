import React from 'react'


const PageHeader = ({title, subtitle}) => {
  return (
     <div id='page-header' className='w-full mt-[5rem] md:mt-[10rem] relative'>             
        <div className='w-full h-full flex flex-col justify-end items-center lg:px-32'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl orbitron-extrabold gradient-text text-center tracking-tight'>
            {title.split('').map((word, i)=>(
              <span key={i}>{word}</span>
            ))}
          </h1>
          <h3 className='text-zinc-300 mt-5 md:mt-10 poppins-regular text-sm md:text-xl lg:text-2xl text-center'>{subtitle}</h3>
        </div>
      </div>
  )
}

export default PageHeader