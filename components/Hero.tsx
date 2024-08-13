"use client";
import { ArrowBigRight } from "lucide-react";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Navigation } from "lucide-react";
import { Download } from "lucide-react";
import { HeroHighlight } from "./ui/HeroHighlight";
const Hero = () => {
  return (
    <div className="pb-20 pt-36  max-w-7xl w-full">
      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div>
        <Spotlight
          className="-top-20 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#ffffff"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[70vw]" fill="blue" />
      </div>
      <div className="flex justify-center relative my-44 z-10">
        <div className=" flex flex-col items-center justify-center">
          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Transforming Ideas Into Reality."
            className="text-center text-[40px]  text-purple-800"
          />

          <div className="text-center  py-2 text-white shadow-lg  transition-all ease-in-out text-lg">
            <code className="">
              Hello! I'm Pam, a web developer based in the Philippines.
            </code>
          </div>
          <div className="flex  flex-col lg:flex-row items-center gap-2 mt-7 ">
            <div>
              <MagicButton
                title="Show my work"
                icon={<Navigation />}
                position="right"
              />
            </div>
            <div className="w-full md:w-60 rounded-lg text-white text-center ">
              <button className="bg-gradient-to-r from-indigo-500 to-blue-500  h-12 w-full rounded-sm">
                <span className="" />

                {/* remove px-3 py-1, add px-5 gap-2 */}
                <span
                  className={`inline-flex cursor-pointer items-center justify-center
              px-7 text-sm font-medium text-white  gap-2`}
                >
                  Resume
                  <Download />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
