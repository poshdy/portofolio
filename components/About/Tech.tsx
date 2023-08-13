import React from "react";
const TECH = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "REACT",
  "NEXT",
  "TAILWIND CSS",
  "SUPABASE",
  "REACT REDUX",
];
const Tools = ["VS CODE", "FIGMA", "GIT", "GITHUB"];
const Tech = () => {
    const HEADING = "font-bold text-5xl leading-tight tracking-tighter";
  return <section className="container">
    <div className="">
        <h3 className={HEADING}>Tech I use</h3>
        <div className="flex flex-col items-center gap-2">
          {TECH.map((tech,I)=>(
            <h4 key={I}>{tech}</h4>
          ))}
        </div>
    </div>
  </section>;
};

export default Tech;
