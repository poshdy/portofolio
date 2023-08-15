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
      className="w-[50%] h-[100vh] fixed z-20 top-0 right-0 bg-black"
    >
      <div
        onMouseLeave={() => setSelecteId(pathname)}
        className="flex font-bold  gap-3 flex-col items-center justify-between w-full h-[80%]  p-24"
      >
        {NavLinks.map((link) => (
          <motion.div
            variants={slide}
            initial="initial"
            animate="enter"
            exit={"exit"}
           className="-space-y-5"
          >
            <p className="text-3xl">{link.title}</p>
          </motion.div>
        ))}
        <div className="flex w-full flex-col gap-3 justify-center items-center">
          <h3 className="text-sm font-bold text-secondary">Social Links</h3>
        <Icons height='20px' />
        </div>
      </div>
    </motion.div>
  );
};

export default Links;
