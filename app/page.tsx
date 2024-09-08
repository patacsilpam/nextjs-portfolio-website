import { navItems } from "@/data/globals";
import Hero from "@/components/Hero";
import Image from "next/image";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import BentoGridSecondDemo from "@/components/ui/BentoGridSecondDemo";
import Projects from "@/components/Projects";
import { HeroHighlight } from "@/components/ui/HeroHighlight";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
export default function Home() {
  return (
    <main className="bg-[#f7f7f7] relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 ">
      <div>
        <FloatingNav navItems={navItems} />
        <Hero />
        <Services />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
