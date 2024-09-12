import React from 'react'

const LandingPage = () => {
  return (
    <div className="bg-[#EBEDF6] md:h-[400px] h-[350px] w-[400px] relative overflow-hidden rounded-sm">
        <div>
          <img src="/images/projects/mangmacs-admin-2.png" alt="" className="mt-24  h-[250px] absolute z-20 top-10 left-20 shadow-md"
        style={{ transform: 'rotate(-12deg)' }} />
          
        </div>
        <div className="">
          <img src="/images/projects/mangmacs-admin-1.png" alt="" className="-rotate-12 -ml-2 h-[300px] w-[850px] scale-110 shadow-md" />
        </div>
    </div>
  )
}

export default LandingPage