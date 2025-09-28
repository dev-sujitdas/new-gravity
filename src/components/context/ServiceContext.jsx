import React, { createContext, useState } from 'react'
import { servicesData } from '../../data/ServiceData'

export const ServiceContext = createContext();

const ServiceProvider = ({children}) => {
    const [serviceData, setServiceData] = useState(servicesData);
  return (
    <ServiceContext.Provider value={{serviceData}}>
        {children}
    </ServiceContext.Provider>
  )
}

export default ServiceProvider