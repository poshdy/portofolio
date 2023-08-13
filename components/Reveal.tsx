"use client";
import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";

const Reveal = ({ children }: { children: React.ReactNode }) => {
  const animate = {
    start: { y: "100%" },
    enter: { y: "0", transition: { duration: 0.9, ease: [0.33, 1, 0.68, 1] } },
  };
  const bodyRef = useRef(null);
  const InView = useInView(bodyRef, {
    once: true,
    margin: "-10%",
  });
  return (
    <div ref={bodyRef}>
      <div className="overflow-hidden">
        <motion.div
          variants={animate}
          initial="start"
          animate={InView ? "enter" : ""}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default Reveal;
