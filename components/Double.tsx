"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";

interface Iprop {
  site: string;
  github: string;
  desc: string;
  src: string | StaticImport;
  title: string;
  id: string;
  tech: string[] | null;
}
[];
const Double = ({ project }: { project: Iprop[] }) => {
  const FirstImg = useRef<null | any>(null);
  const SecImg = useRef<null | any>(null);

  let XPercent = 0;
  let requestanimationFrameId: number | null = null;
  let currentxpercent = 0;
  let speed = 0.15;
  const MouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX } = e;
    XPercent = (clientX / window.innerWidth) * 100;
    if (!requestanimationFrameId) {
      requestAnimationFrame(animate);
    }
  };

  const animate = () => {
    const deltax = XPercent - currentxpercent;
    currentxpercent = currentxpercent + deltax * speed;
    FirstImg.current.style.width = 66.66 - currentxpercent * 0.33 + "%";
    SecImg.current.style.width = 33.33 + currentxpercent * 0.33 + "%";
    if (currentxpercent == XPercent) {
      cancelAnimationFrame(requestanimationFrameId);
      requestanimationFrameId = null;
    } else {
      requestAnimationFrame(animate);
    }
  };
  return (
    <section onMouseMove={MouseMove} className="flex mt-[10vh] h-[45vw]">
      <div
        ref={FirstImg}
        className="first-of-type:w-[66.66%] last-of-type:w-[33.33%]"
      >
        <div className="pb-[66.66%] relative">
          <Image
            src={project[0].src}
            fill
            alt="ptoject"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-start gap-2 p-2">
          <h3 className="font-bold text-xl ">{project[0].title}</h3>
          <p className="text-sm text-secondary ">{project[0].desc}</p>
          <div className="flex items-start gap-2 text-sm font-bold">
            {project[0].tech?.map((tech) => (
              <p className=" text-destructive ">{tech}</p>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={SecImg}
        className="first-of-type:w-[66.66%] last-of-type:w-[33.33%]"
      >
        <div className="pb-[66.66%] relative">
          <Image
            src={project[1].src}
            fill
            alt="ptoject"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-start gap-2 p-2">
          <h3 className="font-bold text-xl ">{project[1].title}</h3>
          <p className="text-sm text-secondary ">{project[1].desc}</p>
          <div className="flex items-start gap-2 text-sm font-bold">
            {project[1].tech?.map((tech) => (
              <p className=" text-destructive ">{tech}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Double;
