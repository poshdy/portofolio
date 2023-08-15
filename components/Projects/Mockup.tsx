import React from "react";
import Netflix from "@/public/netflixPorject.png";
import Image from "next/image";

const Mockup = () => {
  return (
    <section className="w-full h-[200vh]">
      <div className="relative aspect-video flex items-center justify-center ">
        <Image
          alt="netflixPorject"
          src={Netflix}
          fill
          sizes="(max-width:700px)"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Mockup;
