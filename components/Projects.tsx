"use client";
import { HoverEffect } from "@/components/ui/CardHoverEffect";
import { projects } from "@/data/globals";
export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <div className="mt-44 text-center">
        <h1 className="text-white text-5xl font-bold">
          A small of recent projects
        </h1>
      </div>
      <HoverEffect items={projects} />
    </div>
  );
}
