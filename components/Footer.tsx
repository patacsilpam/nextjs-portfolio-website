import React from "react";
import MagicButton from "./ui/MagicButton";
import { socialList } from "@/data/globals";
import Link from "next/link";

const Footer = () => {
  const year = new Date();
  const currentYear = year.getFullYear();
  return (
    <div className="p-10 flex flex-row justify-between">
      <span className="flex flex-col">
        <p>Built by Pam Patacsil</p>
        <p>&copy; {currentYear}</p>
      </span>
      <ul>
        {socialList.map((item, key) => (
          <a
            key={key}
            href={item.link}
            className="font-light mx-3"
            target="_blank"
          >
            {item.title}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
