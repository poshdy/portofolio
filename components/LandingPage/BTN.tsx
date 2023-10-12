import React from "react";
import HandLine from "../Svgs/HandLine";
import IconMagnecticWrapper from "../IconMagneticWrapper";
import Link from "next/link";

const BTN = () => {
  const text = "Let's";
  return (
    <div className="flex pt-3 font-bold gap-2 self-center justify-items-center lg:self-start lg:justify-items-start">
      <IconMagnecticWrapper>
        <Link
          href={"#about"}
          className="px-4 py-2 text-white transition-all rounded-none duration-300 ease-in-out hover:shadow-none shadow-[4px_4px_white] bg-destructive-foreground"
        >
          About me
        </Link>
      </IconMagnecticWrapper>
      <div className="flex flex-col gap-2">
        <IconMagnecticWrapper>
          <Link
            href={"#contact"}
            className="px-4 py-2 text-white transition-all rounded-none duration-300 ease-in-out hover:shadow-none shadow-[4px_4px_white] bg-destructive "
          >
            {text} Work Together
          </Link>
        </IconMagnecticWrapper>
        <HandLine />
      </div>
    </div>
  );
};

export default BTN;
