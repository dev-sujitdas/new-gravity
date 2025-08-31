import React, { createContext, useState } from 'react'
import { Data as ProjCardData } from "../../data/Data";

export const ProjectContext = createContext();

const ProjectProvider = ({children}) => {
  const [projData, setProjData] = useState(ProjCardData);

  return (
    <ProjectContext.Provider value={{projData}}>
      {children}
    </ProjectContext.Provider>
  )
}

export default ProjectProvider;
