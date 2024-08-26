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
          "flex flex-row h-[90px] justify-around items-center   fixed  inset-x-0 mx-auto  rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000]  px-5 py-3 space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(20px) saturate(240%)",
          backgroundColor: "rgba(17, 25, 40, 0.20)",
          borderRadius: "2px",
          //border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {" "}
        {/**border border-transparent dark:border-white/[0.2] */}
        <div className="mx-10">
          <span className="text-xl font-black text-neutral-300 ">
            Pam Patacsil
          </span>
        </div>
        <div className="flex flex-row justify-between w-1/4 mx-10">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative  text-[#ececefe6]  font-medium  items-center flex  dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm  text-[13px] ">
                {navItem.name}
              </span>
            </Link>
          ))}
          <div>
            <button className=" text-[13px] font-extralight tracking-widest relative  text-black dark:text-white   ease-in duration-75 rounded-sm p-2 shadow-md">
              <span className="">LET'S TALK</span>
              {/*<span className="absolute inset-x-0  mx-auto bottom-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-[2px]" /> */}
            </button>
          </div>
        </div>
        <div className="flex space-x-3 mb-2">
          {socialList.map((item, id) => (
            <span
              key={id}
              className=" text-neutral-400 border-neutral-600 p-2 rounded-lg"
            >
              <item.icon />
            </span>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
