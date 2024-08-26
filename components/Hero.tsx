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
      <div>
        {/**
         * <Spotlight
          className="left-80 top-28 h-[80vh] w-[60vw]"
          fill="#ffffff"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        /> <hr className="-mt-9 border-[15px] border-[#0525c8d6] animate-expand" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[70vw]" fill="blue" /> */}
      </div>
      <div className="flex flex-row my-36">
        <div className="flex flex-col items-center  w-fit">
          <div className="md:w-[50vw] w-full">
            <TextGenerateEffect
              words={`I'm Pam 👋, a junior developer shaping digital solutions that inspire.`}
            />
            <div className="-mt-4 h-7 bg-gradient-to-r from-[#0525c8d6] to-[#041d995f] animate-expand" />
            <div className="w-fit  mt-5">
              <span className="text-neutral-200">
                Specializing in creating efficient, user-friendly mobile and web
                applications.
              </span>
            </div>
            <div className="flex md:flex-row flex-col gap-3 mt-5">
              <button className="bg-[#0527c8] h-12 w-[250px] md:w-60  text-white ">
                <span
                  className={`inline-flex cursor-pointer items-center justify-center
              px-7 text-sm font-medium text-white  gap-2`}
                >
                  RESUME
                  <Download />
                </span>
              </button>
              <MagicButton
                title="SHOW MY WORK"
                icon={<Navigation />}
                position="right"
                otherClasses="w-[96]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
