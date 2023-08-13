
import React from "react";

const DEVELOPMENT = [
  { title: "TypeScript" },
  { title: "Javascript" },
  { title: "React" },
  { title: "Next js" },
  { title: "HTML" },
  { title: "Supabase" },
  { title: "Firebase" },
  { title: "Redux toolkit" },
  { title: "React query" },
];
const SYLING_UI_UX = [
  { title: "Css" },
  { title: "Figma" },
  { title: "Tailwind css" },
  { title: "Shdcn ui" },
];
const Tools = ["VS CODE", "GIT", "GITHUB"];
const Tech = () => {
  const HEADING = "font-bold text-5xl leading-tight tracking-tighter";
  return (
    <section className="container space-y-6">
      <h3 className={HEADING}>Tech I use</h3>
      <div className="flex flex-col items-start justify-start gap-5">

     
      <div className="flex flex-col gap-2 ">
          <h2 className="leading-tight font-semibold tracking-tighter text-2xl">For Development #</h2>
        <div className="flex items-center flex-wrap gap-2">
          {DEVELOPMENT.map((tech, I) => (
            <h4 key={I} className="font-bold border-2 border-primary text-secondary px-3 py-1 bg-transparent rounded-full">
              {tech.title}
            </h4>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 ">
          <h2 className="leading-tight font-semibold tracking-tighter text-2xl">For Styling and Design</h2>
        <div className="flex items-center flex-wrap gap-2">
          {SYLING_UI_UX.map((tech, I) => (
            <h4 key={I} className="font-bold border-2 border-primary text-secondary px-3 py-1 bg-transparent rounded-full">
              {tech.title}
            </h4>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 ">
          <h2 className="leading-tight font-semibold tracking-tighter text-2xl">Tools</h2>
        <div className="flex items-center flex-wrap gap-2">
          {Tools.map((tech, I) => (
            <h4 key={I} className="font-bold border-2 border-primary text-secondary px-3 py-1 bg-transparent rounded-full">
              {tech}
            </h4>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Tech;
//  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6"><rect width="256" height="256" fill="none"></rect><line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
