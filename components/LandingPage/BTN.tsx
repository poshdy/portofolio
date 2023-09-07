import React from "react";
import { Button } from "../ui/button";
import HandLine from "../Svgs/HandLine";
import IconMagnecticWrapper from "../IconMagneticWrapper";

const BTN = () => {
  const text = "Let's";
  return (
    <div className="flex pt-3 font-bold gap-2 self-center justify-items-center lg:self-start lg:justify-items-start">
      <IconMagnecticWrapper>
        <Button className="px-3 py-1 text-white transition-all rounded-none duration-300 ease-in-out hover:shadow-none shadow-[4px_4px_white] bg-destructive-foreground">
          About me
        </Button>
      </IconMagnecticWrapper>
      <div className="flex flex-col gap-2">
        <IconMagnecticWrapper>
          <Button className="px-3 py-1 text-white transition-all rounded-none duration-300 ease-in-out hover:shadow-none shadow-[4px_4px_white] bg-destructive ">
            {text} Work Together
          </Button>
        </IconMagnecticWrapper>
        <HandLine />
      </div>
    </div>
  );
};

export default BTN;
