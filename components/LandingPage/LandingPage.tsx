import React from "react";
import LpImage from "./LpImage";
import BTN from "./BTN";
import Icons from "../Icons";
import LandingpageTexts from "./LandingpageTexts";

const LandingPage = () => {
  return (
    <section className="flex container flex-col-reverse items-center  lg:flex-row lg:justify-around pt-5 my-20">
      <div className="flex flex-col items-center justify-center gap-3 lg:justify-start lg:items-start">
        <LandingpageTexts />
        <BTN />
        <Icons height="25px" />
      </div>
      <LpImage />
    </section>
  );
};

export default LandingPage;
