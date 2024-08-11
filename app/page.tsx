import { navItems } from "@/data/globals";
import Hero from "@/components/Hero";
import Image from "next/image";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import BentoGridSecondDemo from "@/components/ui/BentoGridSecondDemo";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <main className="bg-gradient-to-t bg-[#000319] to-indigo-500 relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <BentoGridSecondDemo />
        <Projects />
      </div>
    </main>
  );
}
