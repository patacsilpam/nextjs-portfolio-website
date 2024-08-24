import React from "react";
import MagicButton from "./ui/MagicButton";
import { socialList } from "@/data/globals";
const Footer = () => {
  return (
    <div className="text-white pb-10 pt-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className="lg:text-5xl text-xl font-bold text-center max-w-[50vw]">
          Ready to take your{" "}
          <span className="text-violet-500">digital presence</span> to the next
          level?
        </h1>
        <span className="my-5 text-neutral-300">
          Reach met out today and let's discuss how can I achieve your goals.
        </span>
        <MagicButton title="Let's get in touch" />
      </div>
      <div className="flex flex-col-reverse  lg:flex-row justify-between items-center mt-36">
        <span>Copyright © 2024 Pam Patacsil</span>
        <div className="flex space-x-3 mb-2">
          {socialList.map((item, id) => (
            <span
              key={id}
              className="border border-1 border-neutral-600 p-2 rounded-lg"
            >
              <item.icon />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
