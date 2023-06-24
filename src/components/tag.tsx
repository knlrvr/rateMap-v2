import React from 'react'
import Link from 'next/link'

const Tag = () => {
  return (
    <div
    className="relative h-full w-full bg-fixed bg-no-repeat bg-auto bg-center"
    style={{
      backgroundImage: `url(/para-3.png)`,
    }}
  >
    <div className="flex items-center justify-center p-8 h-80">
        <div className="flex flex-col max-w-5xl mx-auto">
          <p className="text-2xl md:text-5xl text-[#222] font-thin">
            Statistics are easily misunderstood, misrepresented, or biased. Without any context, it's easy to 
            read numbers. 
            <br /><br />
            But these aren't numbers. These are <em className="font-semibold">people</em>. 
          </p>
        </div>
    </div>
  </div>
  )
}

export default Tag