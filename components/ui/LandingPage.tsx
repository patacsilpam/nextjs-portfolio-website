import React from 'react'

const LandingPage = () => {
  return (
    <div className="bg-[#EBEDF6] md:h-[400px] h-[350px] w-[400px] relative overflow-hidden rounded-sm">
        <div>
          <img src="/images/projects/landing-page-1.png" alt="" className=" absolute z-20 top-10 left-20"
        style={{ transform: 'rotate(-32deg)', scale:'1.1'}} />
          
        </div>
        <div className="-mt-20">
          <img src="/images/projects/landing-page-2.png" alt="" className="-mt-[80px] -ml-20" style={{ transform: 'rotate(-12deg)' ,scale:'1.5'}}/>
        </div>
    </div>
  )
}

export default LandingPage