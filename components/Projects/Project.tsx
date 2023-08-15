import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import IconMagnecticWrapper from "../IconMagneticWrapper";
import Reveal from "../Reveal";
interface Iprop {
  id: string,
  title: string,
  desc: string,
  tech: (string | undefined)[],
  github:string,
  site: string,
  src:  StaticImageData,
}
const Project = ({ desc, id, github, src, tech, site, title }: Iprop) => {
  return (
    <div className="w-full md:w-[40%] ">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg flex justify-center items-center rounded-md pt-6">
        <div className="relative w-[90%] aspect-video rounded-t-md overflow-clip">
          <Image src={src} alt="project" fill className="object-cover" />
        </div>
      </div>
      <div className="flex flex-col items-start gap-2 py-2">
        <Reveal>
          <h2 className="text-2xl font-semibold leading-tight tracking-tighter">
            {title}
          </h2>
        </Reveal>
        <div className="flex flex-wrap gap-2">
          {tech.map((t,i) => (
            <Reveal key={i}>
              <p className="text-desturvtive2 text-sm ">{t}</p>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="font-light text-secondary">{desc}</p>
          <div className="flex gap-2 text-lg text-desturvtive2">
            <IconMagnecticWrapper>
              <a href={github} target="_blank">
                <FaGithub />
              </a>
            </IconMagnecticWrapper>
            <IconMagnecticWrapper>
              <a href={site} target="_blank">
                <FaLink />
              </a>
            </IconMagnecticWrapper>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Project;
