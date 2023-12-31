import React from "react";

import Mockup from "./Mockup";
import Project from "./Project";
import { Data } from "@/constants";
import Arrow from "../Svgs/Arrow";
import { StaticImageData } from "next/image";
interface Iprop {
  id: string,
  title: string,
  desc: string,
  tech: (string | undefined)[],
  github:string,
  site: string,
  src:  StaticImageData,
}
const Projects = () => {
  return (
    <section id="projects" className="container my-4">
      <h1 className="text-4xl md:text-5xl lg:text-8xl leading-tight tracking-tighter uppercase font-bold">
        projects
        <Arrow />
      </h1>
      <div className="flex flex-col items-center justify-center md:flex-row md:flex-wrap gap-2 w-full">
        {Data.map((project:Iprop) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
