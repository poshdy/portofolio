"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SliderText = () => {
  const containerRef = useRef(null);
  const Text1Ref = useRef(null);
  const Text2Ref = useRef(null);
  let XPercent = 0;
  let Direction = 1;
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => (Direction = e.direction * -1),
      },
      x: "-=300px",
    });
  }, []);

  const animation = () => {
    if (XPercent <= -100) {
      XPercent = 0;
    }
    if (XPercent > 0) {
      XPercent = -100;
    }
    gsap.set(Text1Ref.current, { xPercent: XPercent });
    gsap.set(Text2Ref.current, { xPercent: XPercent });
    XPercent += 0.01 * Direction;
    requestAnimationFrame(animation);
  };

  return (
    <section className="relative flex space-y-10 h-[30vh] overflow-hidden mt-12 ">
      <div className="absolute top-[calc(100vh - 350px)] bg-white text-black ">
        <div
          ref={containerRef}
          className="relative whitespace-nowrap uppercase font-bold text-5xl md:text-7xl lg:text-9xl"
        >
          <p className="relative m-0 pr-9" ref={Text1Ref}>
            Ui/UX-Development-Responsive Design-Clean Code
          </p>
          <p className="m-0 pr-9 absolute left-[100%] top-0" ref={Text2Ref}>
            Ui/UX-Development-Responsive Design-Clean Code
          </p>
        </div>
      </div>
    </section>
  );
};

export default SliderText;
