import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProjectContext } from '../components/context/ProjectContext';

const ProjectDetails = () => {
  const {title} = useParams();
  const {projData} = useContext(ProjectContext)

  const project = projData.find(p=> p.title === title);

  return (
    <section className='w-full h-screen bg-red-500'>
        <h1>{project.title}</h1>
        <div className='w-96'>
          <video src={project.video} className='w-full h-full'></video>
        </div>
    </section>
  )
}

export default ProjectDetails