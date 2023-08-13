"use client";
import React, { useState, useEffect } from "react";
import Links from "./Links";
import { AnimatePresence } from "framer-motion";
import Circle from "./Svgs/Circle";

const NavBar = () => {
  const [Active, setActive] = useState(false);
  const [scroll, setScroll] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 5) {
        setScroll(true);
      } else {
        setScroll(false);
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-1 z-50 pt-3`}>
      <nav
        className={`hidden md:flex items-center leading-tight tracking-tighter font-bold text-secondary space-x-9 text-base justify-center duration-300 ease-in-out p-2 ${
          scroll ? "border-2 border-white" : "border-none"
        }`}
      >
        <>
          <p>Home</p>
          <p>About</p>
        </>
        <h1 className="text-2xl  text-desturvtive2 md:text-4xl">Posh.dev</h1>
        <>
          <p>Projects</p>

          <p className="relative">
            <Circle />
            Contact
          </p>
        </>
      </nav>
      <nav className="flex items-center justify-between px-2 md:hidden">
        <h1 className="text-2xl leading-tight tracking-tighter font-bold text-desturvtive2">
          Posh.dev
        </h1>
        <div
          onClick={() => setActive(!Active)}
          className="fixed right-0 rounded-full w-12 h-12 cursor-pointer z-30 bg-destructive flex items-center justify-center"
        >
          <div className={`w-full flex items-center relative gap-1  flex-col`}>
            <span className={` absolute w-[40%] h-[1px] top-[-5px] bg-white ${Active && 'top-[-1px] rotate-[-45deg]'}`}></span>
            <span className={` absolute w-[40%] h-[1px] top-[5px] bg-white ${Active && 'top-[1px] rotate-[45deg]'} `}></span>
          </div>
        </div>
      </nav>
      <AnimatePresence mode="wait">{Active && <Links />}</AnimatePresence>
    </header>
  );
};

export default NavBar;