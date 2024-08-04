import { navItems } from "@/data/globals";
import Hero from "@/components/Hero";
import Image from "next/image";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
export default function Home() {
  return (
    <main className="bg-[#000319] min-h-screen p-24">
      <FloatingNav navItems={navItems} />
      <Hero />
    </main>
  );
}
