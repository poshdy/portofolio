import React from "react";
import IconMagnecticWrapper from "../IconMagneticWrapper";
const text= "I'm"
const AboutMeText = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 lg:items-start lg:justify-start w-full lg:w-[30%] py-2 lg:py-4">
      <p className="text-secondary text-xs lg:text-sm  text-center lg:text-left   ">
        Hey 👋 My name is Roshdy and {text} a self-taught Front-end developer with
        1 year of experience in all recent front-end development technologies
        such as: HTML CSS Javascript Typescript And frameworks like: React NEXT
        js Tailwind CSS
        <br />
        <br />
        {text} a dedicated and hardworking person that will not only develop and
        design your website in such a unique and modern way but make sure that
        it is easy to navigate and provide a seamless experience for users which
        will grab their attention and help you make more sales or book more
        sessions/ appointments.
        <br />
        <br />
        I built real-world projects such as:  Netflix clone , Spotify
        clone
        <br />
        {text} currently digging into backend development to build a powerful AI
        SaaS platform. If you are looking to build your own website in a modern
        way using all the recent technologies, feel free to book a free call
        with me using the calendar
      </p>
      <IconMagnecticWrapper>
      <p className="px-4 cursor-pointer py-2 w-fit text-white transition-all font-bold rounded-none duration-300 ease-in-out hover:shadow-none shadow-[4px_4px_white] bg-[#1BCF90] ">
        Let's Work Together
      </p>
      </IconMagnecticWrapper>
    </div>
  );
};

export default AboutMeText;
