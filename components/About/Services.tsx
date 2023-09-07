import React from "react";
import Reveal from "../Reveal";

const SERVICES = [
  {
    no: "01",
    title: "Design",
    content:
      "Using Figma, I can help you translate your imaginative ideas into a stunning, user-friendly website with modern and engaging design that graps your prospect's attention",
  },
  {
    no: "02",
    title: "Development",
    content:
      "I can build your dream website from scratch using the most recent web technologies OR transform a existing one from ANY software to highly scalable code and make it Responsive on all devices",
  },
  {
    no: "03",
    title: "BOTH",
    content:
      "I specialize in designing and developing projects from the ground up, utilizing the latest technologies. I ensure high-quality service and ongoing support to guarantee your project's success. Let's collaborate to turn your vision into reality.",
  },
];
const Services = () => {
  const HEADING =
    "font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tighter";

  return (
    <div className="container space-y-5">
      <h2 className={HEADING}>Services I offer</h2>
      <div className="flex flex-col  justify-start gap-4 lg:flex-row">
        {SERVICES.map((service) => (
          <div className="space-y-3 w-full lg:w-[33.33%]" key={service.no}>
            <Reveal>
              <span className="text-secondary border-b-2 border-b-secondary ">
                {service.no}
              </span>
            </Reveal>
            <Reveal>
              <h3 className={HEADING}>{service.title}</h3>
            </Reveal>
            <Reveal>
              <p className="text-secondary w-[80%]">{service.content}</p>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
