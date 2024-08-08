"use client";
import { ArrowBigRight } from "lucide-react";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import TypingText from "./ui/TypingTextEffect";
import { Navigation } from "lucide-react";
import { Download } from "lucide-react";
import { HeroHighlight } from "./ui/HeroHighlight";
const Hero = () => {
  return (
    <HeroHighlight className="pb-20 pt-36  max-w-7xl w-full">
      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#ffffff"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="#220f3f"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[70vw]" fill="blue" />
      </div>
      <div className="flex justify-center relative my-36 z-10">
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
              <button className="bg-gradient-to-r from-indigo-500 to-blue-500  h-12 w-full rounded-lg">
                <span className="" />

                {/* remove px-3 py-1, add px-5 gap-2 */}
                <span
                  className={`inline-flex cursor-pointer items-center justify-center rounded-lg
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
      <br />
      <br />
      <br />
      <div className="relative flex overflow-x-hidden text-white">
        <div className="py-12 animate-marquee whitespace-nowrap">
          <span className="text-4xl mx-4">Marquee Item 1</span>
          <span className="text-4xl mx-4">Marquee Item 2</span>
          <span className="text-4xl mx-4">Marquee Item 3</span>
          <span className="text-4xl mx-4">Marquee Item 4</span>
          <span className="text-4xl mx-4">Marquee Item 5</span>
        </div>

        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          <span className="text-4xl mx-4">Marquee Item 1</span>
          <span className="text-4xl mx-4">Marquee Item 2</span>
          <span className="text-4xl mx-4">Marquee Item 3</span>
          <span className="text-4xl mx-4">Marquee Item 4</span>
          <span className="text-4xl mx-4">Marquee Item 5</span>
        </div>
      </div>
    </HeroHighlight>
  );
};

export default Hero;
