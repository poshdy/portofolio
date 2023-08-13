import { useState, useEffect } from "react";

import React from "react";

const useDemintion = () => {
  const [DemintionValue, setDemintionValue] = useState({ width: 0, height: 0 });
  const updateWindowValue = () => {
    const { innerWidth, innerHeight } = window;
    setDemintionValue({ width: innerWidth, height: innerHeight });
  };
  useEffect(() => {
    updateWindowValue();
    window.addEventListener("resize", updateWindowValue);
    return () => window.removeEventListener("resize", updateWindowValue);
  }, []);
  return DemintionValue;
};

export default useDemintion;
