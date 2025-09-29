import React from 'react'

const Loader = ({ isLoading }) => {
  return (
    isLoading && (
      <div className="flex justify-center items-center flex-col h-screen w-screen">
        <div className="loader-container flex justify-center items-center relative">
          <div className="loader-border"></div>
          <div className="loader-content flex flex-col items-center justify-center">
            <span className="canvas-loader flex flex-col items-center justify-center">
              <h3 className="text-lg orbitron-regular text-slate-100">
                Loading...
              </h3>
            </span>
          </div>
        </div>
      </div>
    )
  )
}

export default Loader