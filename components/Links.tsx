"use client";
import { NavLinks } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Icons from "./Icons";

const Links = () => {
  const menuSlide = {
    initial: { x: "calc(100% + 100px)" },
    enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: {
      x: "calc(100% + 100px)",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const slide = {
    initial: { x: 80 },

    enter: (i: number) => ({
      x: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
    }),

    exit: (i: number) => ({
      x: 80,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
    }),
  };

  const scale = {
    open: { scale: 1, transition: { duration: 0.3 } },

    closed: { scale: 0, transition: { duration: 0.4 } },
  };
  const pathname = usePathname();
  const [selectedId, setSelecteId] = useState(pathname);
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="w-[50%] h-[100vh] fixed z-20 top-0 right-0 bg-background/80"
    >
      <div
        onMouseLeave={() => setSelecteId(pathname)}
        className="flex text-3xl font-bold gap-3 flex-col items-center justify-between w-full h-full p-24"
      >
        {NavLinks.map((link) => (
          <motion.div
            variants={slide}
            initial="initial"
            animate="enter"
            exit={"exit"}
          >
            <p>{link.title}</p>
          </motion.div>
        ))}
      </div>
      <Icons/>
    </motion.div>
  );
};

export default Links;
