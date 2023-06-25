import React from 'react'
import Image from 'next/image'

const MapDesc = () => {
  return (
    <div className="py-36 max-w-5xl mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
            <div>
                <Image
                    src="/logo.png"
                    alt=""
                    width="1000"
                    height="1000"
                    className=""
                />
            </div>
            <p className="font-light p-8 rounded-lg bg-gray-100 shadow-md">
                If you&apos;re not familiar with this specific set of data, this probably isn&apos;t anything
                more than a colorful map. This map contains only enough information to analyze the rates of
                suicide per state. 
                <br /><br />
                Now, for context, the rates shown are <em className="font-semibold">age adjusted rates</em>&#42; per 100,000 total population.
                For every 100,000 people in California, <span className="font-semibold">10.1</span> of them died 
                by suicide in 2021, a total of <span className="font-semibold">4,148</span> people. For every 100,000 people 
                in Wyoming, <span className="font-semibold">32.3</span> of them died by suicide in 2021, a total of
                <span className="font-semibold"> 190</span> people.
                <br /><br />
                While this map is certainly accurate in presenting age adjusted rates, it does very little to highlight 
                the differing rates between states, how these rates can differ so drastically, or really <em>any other relevant factor</em>. 
                Here at Humanize It, we value data, but only when it's complete. 
                <br /><br />
                Because, <em> again</em>, these are more than numbers.
                <br />
                <em className="font-semibold text-lg">These are people</em>.
            </p>
        </div>
    </div>
  )
}

export default MapDesc