import React from "react";

import Mockup from "./Mockup";
import Project from "./Project";
import { Data } from "@/constants";

const Projects = () => {
  return (
    <section id="projects" className="container my-4">
      <div className="flex flex-col items-center justify-center md:flex-row md:flex-wrap gap-2 w-full">
        {Data.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
