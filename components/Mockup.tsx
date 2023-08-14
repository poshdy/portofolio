'use client'
import React,{useRef} from "react";
import Netflix from "@/public/netflixPorject.png";
import Image from "next/image";
import {motion , useScroll , useTransform} from 'framer-motion'


const Mockup = () => {
  const containerRef = useRef<null|any>(null)
  const {scrollYProgress} = useScroll({
    target:containerRef,
    offset:['start end',"end start"]
  })
  // const conwidth = containerRef.current.window.innerWidth
  const width = useTransform(scrollYProgress,[0,0.9],[300,1200])
  return (
    <motion.div style={{width}} ref={containerRef} className="relative  aspect-video flex items-center justify-center ">
    <Image alt="netflixPorject" src={Netflix} fill sizes="(max-width:700px)" className="object-cover"/>
          </motion.div>
  );
};

export default Mockup;
