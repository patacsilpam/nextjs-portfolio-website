import React from 'react'

const Covid19 = () => {
  return (
    <div className="bg-[#EBEDF6] md:h-[400px] h-[350px] w-[400px] relative overflow-hidden rounded-sm">
        <div>
          <img src="/images/projects/covid-19-1.png" alt="" className=" w-full absolute z-20 -bottom-5 left-32 skew-x-6  transform -rotate-45 scale-150"
        style={{ transform: 'rotate(-12deg)' }} />
          
        </div>
        <div className="">
          <img src="/images/projects/covid-19-2.png" alt="" className="h-[500px] absolute left-5" style={{ transform: 'rotate(-12deg)'}}/>
        </div>
    </div>
  )
}

export default Covid19