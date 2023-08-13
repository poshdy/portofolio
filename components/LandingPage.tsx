import React from "react";
import LpImage from "./LandingPage/LpImage";
import BTN from "./LandingPage/BTN";
import LpMe from "./LandingPage/LpMe";
import Icons from "./Icons";

const LandingPage = () => {
  return (
    <section className="flex container flex-col-reverse items-center gap-3 lg:flex-row  lg:justify-around pt-5">
      <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start">
        <LpMe />
        <BTN />
        <Icons/>
      </div>
      <LpImage />
    </section>
  );
};

export default LandingPage;
