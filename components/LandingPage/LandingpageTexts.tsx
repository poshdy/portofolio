import React from "react";
import Spark from "../Svgs/Spark";
import Pattern from "../Svgs/Pattern";
import Reveal from "../Reveal";

const LandingpageTexts = () => {
  const text2 = "I'm";
  return (
    <div className="flex flex-col items-center justify-center text-center lg:text-left lg:items-start gap-5">
      <div className="flex items-center lg:items-start -space-y-4 relative flex-col text-5xl md:text-6xl lg:text-7xl">
        <div className="absolute -z-10 -top-9 -left-16 -rotate-[107deg]">
          <Spark />
        </div>
        <Reveal>
          <h1 className="relative tracking-tighter leading-tight font-bold text-[#f0f0f0]">
            Hello There {text2} Roshdy
          </h1>
        </Reveal>
        <Reveal>
          <h2 className="text-[#d2d2d2] text-5xl font-semibold tracking-tight leading-snug">
            But They Call me
            <span className="text-desturvtive2 font-bold"> POSH</span>
          </h2>
        </Reveal>
        {/* <Pattern /> */}
      </div>
      <Reveal>
        <p className="text-sm md:text-lg max-w-[500px] text-[#c2c2c2] text-center lg:text-start font-medium">
          A self-taught FRONT-END developer with MASSIVE experience in building
          High scalable web Pages
        </p>
      </Reveal>
    </div>
  );
};

export default LandingpageTexts;

//   /* <div className="flex flex-col items-center lg:items-start gap-5">
// <div className="flex items-center lg:items-start -space-y-3 relative flex-col">
//   <div className="text-6xl tracking-tighter leading-tight font-bold">
//     <div className="absolute -z-10 -top-9 -left-16 -rotate-[107deg]">
//       <Spark />
//     </div>
//     <Reveal>
//       <h1 className="text-[#f0f0f0]">Hello There! {text2} Roshdy</h1>
//     </Reveal>
//     <Reveal>

//     </Reveal>
//   </div>
// </div>
// <Reveal>
//   <p className="text-sm md:text-lg max-w-[500px] text-center lg:text-start">
//     A self-taught FRONT-END developer with MASSIVE experience in building
//     High scalable web Pages
//   </p>
// </Reveal>
// </div>
