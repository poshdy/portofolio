import React from 'react'
import { Button } from '../../app/ui/button'
import HandLine from '../Svgs/HandLine'

const BTN = () => {
  return (
    <div className="flex pt-3 font-bold gap-2 self-center justify-items-center lg:self-start lg:justify-items-start">
    <Button className="px-3 py-1 text-white transition-all rounded-none duration-300 ease-in-out hover:shadow-none shadow-[4px_4px_white] bg-destructive-foreground">
      About me
    </Button>
    <div className="flex flex-col gap-2">
      <Button  className="px-3 py-1 text-white transition-all rounded-none duration-300 ease-in-out hover:shadow-none shadow-[4px_4px_white] bg-destructive ">
        Let's Work Together
      </Button>
      <HandLine/>
    </div>
  </div>
  )
}

export default BTN