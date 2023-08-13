'use client'
import React,{useRef} from "react";
import Me from "@/public/IMG-1287.jpg";
import Image from "next/image";
import Highlight from "../Svgs/Highlight";
import AboutMeText from "./AboutMeText";
import Services from "./Services";
import Tech from "./Tech";
import {motion , useTransform , useScroll} from 'framer-motion'


const About = () => {
  const containerRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target:containerRef,
    offset:['start end','end start' ]
})

const height = useTransform(scrollYProgress,[0,1],[90,0])
  return (
    <section ref={containerRef} className="bg-[#101010] w-full  space-y-20 px-3 lg:px-5 py-10">
      <div className="py-8 w-[80%] px-4 mt-5 container flex flex-col lg:items-start lg:justify-start border-b-2 border-b-secondary/40">
        <h1 className="text-3xl md:text-6xl flex tracking-tighter leading-tight font-bold relative">
          <Highlight />
          About me.
        </h1>
        <p className="font-medium text-secondary">
          My name is Roshdy but you can call me
          <span className="pl-1 text-destructive font-bold">POSH</span>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-start lg:justify-around py-5 px-2 mt-5 container">
        <AboutMeText />

        <div className="relative w-full lg:w-[40%] h-[80vh] lg:h-[100vh]">
          <Image
            className="object-cover transition-all duration-300  translate-y-[-4px] translate-x-[-4px] shadow-[8px_8px_0_#FFF] hover:shadow-none hover:translate-x-0 hover:translate-y-0"
            src={Me}
            alt="eee"
            fill
            priority
            sizes="(max-width-[450px] 100vw ) "
          />
        </div>
      </div>
      <Services />
      <Tech />
   
     <motion.div style={{height}} className="relative mt-[100px] w-[200%]">
    <div className="w-[220%] h-[1550%] absolute shadow-2xl rounded-b-full left-[-10%]"></div>
  </motion.div>
 
    </section>
  );
};

export default About;
