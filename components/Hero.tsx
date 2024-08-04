"use client";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import TypingText from "./ui/TypingTextEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 h-[1000px]">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="h-[80vh]  top-10 " fill="purple" />
        <Spotlight className=" top-28 h-[80vh] " fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}

      <div className="flex justify-center relative my-20 z-10">
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

          <div className="md:tracking-wider mb-4  text-xl text-[#594bff] text-center">
            <TypingText
              alwaysVisibleCount={0}
              delay={50}
              smooth
              text="Hello! I'm Pam, a web developer based in the Philippines."
              waitTime={1500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
