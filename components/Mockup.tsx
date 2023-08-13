import React from "react";
import Netflix from "@/public/netflixPorject.png";
import Image from "next/image";
import Misc from "./Svgs/Misc";
import Spark from "./Svgs/Spark";

const Mockup = () => {
  return (
    <section className="flex flex-col items-center justify-center lg:flex-row lg:justify-center">
      <div className=" flex flex-col items-center lg:items-start w-[80%] ">
        <span className="text-desturvtive2">Featured Porject</span>
        <h1 className="text-2xl md:text-5xl font-bold flex gap-1">
          Netflix clone <Misc />
        </h1>
        <div className="flex flex-col gap-1 items-center text-center md:text-left justify-center">
        <p>
          This Project (Netflix clone) is a Movie database website it comes with
          full authentication system built with supabase aslo it has full search
          functionalty and it contains feature like user can add Favorite movies and show to his list 
        </p>
        {/* <svg
        
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-external-link self-start"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" x2="21" y1="14" y2="3" />
        </svg> */}
      </div>
      </div>
      <div className="relative w-full aspect-square ">
        <div className="absolute -z-10  top-32  left-5 -rotate-[107deg]">
          <Spark />
        </div>
        <Image src={Netflix} className="object-cover" fill alt="Project" />
        <div className="absolute -z-10  top-32  right-5">
          <Spark />
        </div>
      </div>

    </section>
  );
};

export default Mockup;
