"use client";
import React, { useState, useEffect } from "react";
import Links from "./Links";
import { AnimatePresence } from "framer-motion";
import Circle from "./Svgs/Circle";
import Link from "next/link";

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
  }, [scroll]);

  return (
    <header className={`sticky top-0 z-50 pt-3 ${scroll && 'bg-white bg-opacity-20 backdrop-blur-sm drop-shadow-lg'} `}>
      <nav
        className={`hidden md:flex items-center leading-tight tracking-tighter font-bold text-secondary space-x-9 text-base justify-center duration-300 ease-in-out p-2 ${scroll && 'border-2 border-fuchsia-100'}`}
      >
        <>
          <Link href='/'>Home</Link>
          <Link href='#about'>About</Link>
        </>
        <h1 className="text-2xl  text-desturvtive2 md:text-4xl">Posh.dev</h1>
        <>
          <Link href='#projects'>Projects</Link>

          <Link href='#contact' className="relative">
            <Circle />
            Contact
          </Link>
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
        <div className={`burger ${Active ? 'burgerActive' : ""}`}></div>
        </div>
      </nav>
      <AnimatePresence mode="wait">{Active && <Links />}</AnimatePresence>
    </header>
  );
};

export default NavBar;
