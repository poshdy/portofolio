import React from 'react'
import Image from 'next/image'
import Me from "@/public/me 1.jpg";
const LpImage = () => {
  return (
    
       <div className=" w-full relative max-w-[150px] sm:max-w-[200px] lg:max-w-[350px] aspect-square">
        <Image
          alt="Me"
          className=" rounded-full transition-all duration-300  hover:translate-y-[-4px] hover:translate-x-[-4px] hover:shadow-[8px_8px_0_#FB2576] object-cover"
          priority
          fill
          src={Me}
          sizes="(max-width-[550px] 100vw)"
        />
      </div> 
  )
}

export default LpImage