import React from "react";
import Arrow from "./Svgs/Arrow";
import Mockup from "./Mockup";

const Projects = () => {
  return (
    <section>
      <div className="-space-y-5 flex flex-col items-center justify-center md:justify-start md:items-start">
        <h1 className="text-5xl md:text-6xl lg:text-9xl uppercase  font-extrabold">Projects</h1>
        <Arrow />
      </div>
      {/* <Mockup /> */}
    </section>
  );
};

export default Projects;
