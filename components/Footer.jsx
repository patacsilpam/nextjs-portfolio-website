import React from "react";
import MagicButton from "./ui/MagicButton";
const Footer = () => {
  return (
    <div className="text-white py-12">
      <div className="flex flex-col justify-center items-center">
        <h1 className="lg:text-5xl sm:text-3xl font-bold text-center max-w-[50vw]">
          Ready to take your{" "}
          <span className="text-violet-500">digital presence</span> to the next
          level?
        </h1>
        <span className="my-5 text-neutral-300">
          Reach met out today and let's discuss how can I achieve your goals.
        </span>
        <MagicButton title="Let's get in touch" />
      </div>
      <div>
        <span>Copyright © 2024 Pam Patacsil</span>
      </div>
    </div>
  );
};

export default Footer;
