import React from 'react'
import Link from 'next/link'

import { BsArrowUpRight } from 'react-icons/bs'

const AfspInfo = () => {
  return (
    <div
    className="relative h-full w-full bg-fixed bg-no-repeat bg-auto"
    style={{
      backgroundImage: `url(/para-3.png)`,
    }}
  >
    <div className="flex items-center justify-center p-8 h-80 max-w-5xl mx-auto">
        <div className="flex flex-col">
            <p className="text-2xl md:text-4xl text-[#222] text-center font-thin">
                Learn more about suicide awareness & prevention from the people who know it best at the 
                <Link href="https://afsp.org/" target="_blank" className="group flex justify-center items-center mt-2">
                    <span className="font-semibold">
                        American Foundation for Suicide Prevention
                        <BsArrowUpRight 
                        className="inline-flex ml-2 text-xl md:text-3xl group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-200" />
                    </span>
                </Link>
            </p>
        </div>
    </div>
  </div>
  )
}

export default AfspInfo