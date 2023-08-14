import React from "react";
import Arrow from "./Svgs/Arrow";
import Mockup from "./Mockup";
import Double from "./Double";
import { Data } from "@/constants";
import Image from "next/image";
import netflixPorject from "@/public/netflixPorject.png";

const Projects = () => {
  return (
    <section id="projects" className="container">
      <div className="-space-y-5 flex flex-col items-center justify-center md:justify-start md:items-start">
        <h1 className="text-5xl md:text-6xl lg:text-9xl uppercase  font-extrabold">
          Projects
        </h1>
        <Arrow />
      </div>
      <section className="gallery">
        <Double project={[Data[0], Data[1]]} />
        <Double project={[Data[2], Data[3]]} />
      </section>
    </section>
  );
};

export default Projects;
