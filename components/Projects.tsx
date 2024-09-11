"use client";
import Covid19 from "./ui/Covid19";
import LandingPage from "./ui/LandingPage";
import MangMacs from "./ui/MangMacs";
import MobileApp from "./ui/MobileApp";
import TravelOrder from "./ui/TravelOrder";
export default function Projects() {
  return (
    <div className="min-h-[768px] h-full bg-[#000000] flex flex-col items-center justify-center p-10">
      <h1 className="text-white font-openSans text-5xl max-w-2xl w-full text-center">Take a look at the latest project that I've crafted.</h1>
      <div className="grid place-items-center lg:grid-cols-2 grid-cols-1 gap-10 p-20">
        <LandingPage/>
        <MobileApp/>
        <Covid19/>
        <MangMacs/>
        <TravelOrder/>
      </div>
    </div>
  );
}
