import React from "react";
import Spark from "../Svgs/Spark";
import Pattern from "../Svgs/Pattern";
import Reveal from "../Reveal";

const LandingpageTexts = () => {
  return (
    <div className="flex flex-col items-center lg:items-start gap-5">
      <Reveal>
        <p className="w-fit pl-2 text-secondary text-sm font-bold text-center md:text-xl">
          Hi, my name is Roshdy, But they call me POSH
        </p>
      </Reveal>
      <div className="flex items-center lg:items-start -space-y-3 relative flex-col font-bold text-6xl tracking-tighter uppercase leading-tight md:text-7xl lg:text-9xl">
        <div className="absolute -z-10 -top-9 -left-16 -rotate-[107deg]">
          <Spark />
        </div>
        <Reveal>
          <h1 className=" relative  ">FRONTEND</h1>
        </Reveal>
        <Reveal>
          <h1 className=" text-destructive">Developer</h1>
        </Reveal>
        <Pattern />
      </div>
      <Reveal>
        <p className="text-sm md:text-lg max-w-[500px] text-center lg:text-start font-bold">
          A self-taught FRONT-END developer with MASSIVE experience in building
          High scalable web Pages and also i’m Gym rat
        </p>
      </Reveal>
    </div>
  );
};

export default LandingpageTexts;
{
}
