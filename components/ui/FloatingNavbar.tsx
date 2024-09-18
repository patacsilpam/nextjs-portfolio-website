"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { socialList } from "@/data/globals";
export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex flex-row justify-between items-center  h-[90px] px-4  fixed  inset-x-0 mx-auto  rounded-full  bg-white  z-[5000]  ",
          className
        )}
        style={{
          backdropFilter: "blur(20px) saturate(240%)",
          backgroundColor: "#f7f7f7",
          borderRadius: "2px",
          //border: "1px solid rgba(255, 255, 255, 0.125)",
          //shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
        }}
      >
        {" "}
        {/**border border-transparent dark:border-white/[0.2] */}
        <div className="mx-10 ">
          <div className="flex flex-col gap-x-10 ">
            <span className="text-xl font-semibold text-[#0F0F12]">
              Pam Patacsil
            </span>
            <span className="font-openSans text-sm text-[#1D1E20]">
              Developer
            </span>
          </div>
        </div>
        <div className="flex gap-7">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative  flex items-center "
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span>
                <p className="hidden sm:block mx-5 text-sm  text-[#0F0F12] font-openSans">
                  {navItem.name}
                </p>
              </span>
            </Link>
          ))}
        </div>
        <div className="flex flex-row gap-5 ">
        {socialList.map((item, key) => (
          <a
            key={key}
            href="https://github.com/patacsilpam/nextjs-portfolio-website/blob/main/components/Footer.tsx"
            className="cursor-pointer "
            target="_blank"
          >
            <p className=" text-sm font-openSans">{item.title}</p>
          </a>
        ))}
      </div>
      </motion.div>
    </AnimatePresence>
  );
};
