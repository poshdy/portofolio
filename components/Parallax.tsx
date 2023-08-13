'use client'
import Image, { StaticImageData } from "next/image";
import React, { useEffect ,useState} from "react";
import One from "@/public/images/1.png";
import Two from "@/public/images/2.png";
import Three from "@/public/images/3.png";
import Four from "@/public/images/4.png";
import Five from "@/public/images/5.png";
import Six from "@/public/images/6.png";
import Seven from "@/public/images/7.png";
import Eight from "@/public/images/8.png";
import Nine from "@/public/images/9.png";
import Ten from "@/public/images/10.png";
import el from "@/public/images/11.png";
import Tw from "@/public/images/12.png";
import { useScroll , useTransform , motion } from "framer-motion";
import {useRef} from 'react'
import Lenis from "@studio-freight/lenis";
import useDemintion from "@/hooks/use-Demintion";
const IMGS = [
  One,
  Two,
  Three,
  Five,
  Four,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  el,
  Tw,
];

const Parallax = () => {
  const [dimension, setDimension] = useState({width:0, height:0});

  const {height} = useDemintion()
  const container = useRef<null>(null)
  const {scrollYProgress} = useScroll({
    target:container,
    offset:['start end','end start']
  })
  const y = useTransform(scrollYProgress , [0,1], [0,height * 2])
  const y2 = useTransform(scrollYProgress , [0,1], [0,height * 3.3])
  const y3 = useTransform(scrollYProgress , [0,1], [0,height * 1.25])
  const y4 = useTransform(scrollYProgress , [0,1], [0,height * 3])


  useEffect(()=>{
    const lenis = new Lenis()
   
    function raf(time:number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
   },[])


  return (
    <section className="w-full">
      {/* <div className="bg-white h-[60vh]"></div> */}
      <div ref={container} className="h-[175vh] relative box-border bg-black flex overflow-hidden gap-[2vw] p-[2vw]">
        <Column  y={y} images={[IMGS[5], IMGS[1], IMGS[2]]} />
        <Column  y={y2} images={[IMGS[3], IMGS[0], IMGS[4]]} />
        <Column  y={y3} images={[IMGS[6], IMGS[7], IMGS[8]]} />
        <Column  y={y4} images={[IMGS[9], IMGS[10], IMGS[11]]} />
      </div>
      {/* <div className="bg-white h-[60vh]"></div> */}
    </section>
  );
};

export default Parallax;

const Column = ({images,y=0}:{images:StaticImageData[],y:any}) => {
  return (
    <motion.div style={{y}} className="w-[25%] h-full min-w-[250px] Targetchild relative flex flex-col gap-[2vw] ">
      {images.map((img, index) => (
        <div className="relative w-full h-full rounded-md overflow-hidden " key={index}>
          <Image fill alt="img" src={img} className="object-cover opacity-75" />
        </div>
      ))}
    </motion.div>
  );
};
