import { Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="relative min-h-[600px] h-full flex flex-col justify-center items-center space-y-5  ">
      <img
        className="absolute bg-[url('/wavelines.png')] bg-no-repeat bg-cover h-fit opacity-30 overflow-hidden inset-0 "
        src="/wavelines.png"
      />
      <div className="z-20 grid place-items-center gap-y-2">
        <p className="text-5xl max-w-4xl text-center font-light">
          Let's work on something that leads to remarkable success.
        </p>
        <p className="text-lg font-light shadow-inherit">
          Together, we'll turn your vision into a thriving reality and drive
          impactful results.
        </p>
        <a
          href="mailto:pamelampatacsil@gmail.com"
          className="bg-black text-white text-center p-3 max-w-[250px] w-full flex justify-center gap-2 z-20"
        >
          Get in Touch <Send />
        </a>
      </div>
    </div>
  );
};

export default Contact;
