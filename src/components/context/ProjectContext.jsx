import React, { createContext, useState } from 'react'
import { ProjectData } from "../../data/ProjectData";

export const ProjectContext = createContext();

const ProjectProvider = ({children}) => {
  const [projData, setProjData] = useState(ProjectData);
  return (
    <ProjectContext.Provider value={{projData}}>
      {children}
    </ProjectContext.Provider>
  )
}

export default ProjectProvider;
