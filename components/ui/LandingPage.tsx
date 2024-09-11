import React from 'react'

const LandingPage = () => {
  return (
    <div className="bg-[#EBEDF6] md:h-[400px] h-[350px] w-[400px] relative overflow-hidden rounded-sm">
        <div>
          <img src="/images/projects/landing-page-1.png" alt="" className="h-[250px] absolute z-20 top-10 left-10  transform -rotate-12"
        style={{ transform: 'rotate(-40deg)' }} />
          
        </div>
        <div className="-mt-20">
          <img src="/images/projects/landing-page-2.png" alt="" className="-rotate-12 scale-150"/>
        </div>
    </div>
  )
}

export default LandingPage