import React from 'react'

const EckoPhotography = () => {
  return (
    <div className="bg-[#EBEDF6] md:h-[400px] h-[350px] w-[400px] relative overflow-hidden rounded-sm">
        <div>
          <img src="/images/projects/ecko-photography-1.png" alt="" className="-mt-[280px] -ml-20  absolute z-20 top-10 shadow-md"
        style={{ transform: 'rotate(-12deg)',scale: '0.9'}} />
          
        </div>
        <div className="">
          <img src="/images/projects/ecko-photography-2.png" alt="" className="-mt-10 ml-40  shadow-md"  style={{ transform: 'rotate(-12deg)', scale:'0.7'}} />
        </div>
    </div>
  )
}

export default EckoPhotography