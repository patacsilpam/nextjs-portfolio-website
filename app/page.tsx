import { navItems } from "@/data/globals";
import Hero from "@/components/Hero";
import Image from "next/image";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import BentoGridSecondDemo from "@/components/ui/BentoGridSecondDemo";
import Projects from "@/components/Projects";
import { HeroHighlight } from "@/components/ui/HeroHighlight";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="bg-[#0d0e0e]   relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />{" "}
        {/*bg-gradient-to-b from-[#030712] via-[#03061b] to-[#070a25]*/}
        <Hero />
        <BentoGridSecondDemo />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
