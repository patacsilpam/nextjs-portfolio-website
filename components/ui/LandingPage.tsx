import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-[#EBEDF6] md:h-[400px] h-[350px] w-[400px] relative overflow-hidden rounded-sm">
      <div>
        <img
          src="/images/projects/landing-page-1.png"
          alt=""
          className=" absolute z-20 top-10 left-28"
          style={{ transform: "rotate(-20deg)", scale: "1.2" }}
        />
      </div>
      <div className="-mt-20">
        <img
          src="/images/projects/landing-page-2.png"
          alt=""
          className="-mt-[80px] -ml-16"
          style={{ transform: "rotate(0deg)", scale: "1.6" }}
        />
      </div>
    </div>
  );
};

export default LandingPage;
