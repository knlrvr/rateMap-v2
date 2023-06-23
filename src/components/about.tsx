import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div
    className="relative h-full w-full bg-fixed bg-no-repeat bg-auto"
    style={{
      backgroundImage: `url(/para-6.png)`,
    }}
  >
    <div className="flex items-center justify-center p-8 h-80">
        <div className="flex flex-col">
            <span className="text-4xl text-[#222] font-thin">
              This will eventually be an about section.
            </span>
        </div>
    </div>
  </div>
  )
}

export default About