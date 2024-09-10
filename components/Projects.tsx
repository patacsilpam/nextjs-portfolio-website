"use client";
import LandingPage from "./ui/LandingPage";
export default function Projects() {
  return (
    <div className="min-h-[768px] h-full bg-[#000000] flex flex-col items-center justify-center p-10">
      <h1 className="text-white font-openSans text-5xl max-w-2xl w-full text-center">Take a look at the latest project that I've crafted.</h1>
      <div className="grid place-items-center lg:grid-cols-2 grid-cols-1 gap-10 p-20">
        <LandingPage/>
        <LandingPage/>
      </div>
    </div>
  );
}
