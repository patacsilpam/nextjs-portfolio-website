import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-[#EBEDF6] md:h-[400px] h-[350px] w-[400px] relative overflow-hidden rounded-sm">
      <div>
        <img
          src="/images/projects/mangmacs-admin-2.png"
          alt=""
          className="  absolute z-20 shadow-md  mt-56 ml-20"
          style={{ transform: "rotate(-12deg)", scale: "1.5" }}
        />
      </div>
      <div className="">
        <img
          src="/images/projects/mangmacs-admin-1.png"
          alt=""
          className="shadow-md mt-10"
          style={{ transform: "rotate(-12deg)", scale: "1.5" }} //dasboard
        />
      </div>
    </div>
  );
};

export default LandingPage;
