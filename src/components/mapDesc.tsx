import React from 'react'
import Image from 'next/image'

const MapDesc = () => {
  return (
    <div className="py-36 max-w-5xl mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <Image
                    src="/logo.png"
                    alt=""
                    width="1000"
                    height="1000"
                    className=""
                />
            </div>
            <p className="font-light">
                If you're not familiar with this specific set of data, this probably isn't anything
                more than a colorful map. Luckily, this map contains a lot of information, but only
                enough information to capture total numbers through out these years. 
                <br /><br />
                Now, for context, the rates shown are per 100,000 total population.
                So, for every 100,000 people in California, 10.1 of them died by suicide.
                <br /><br />
                While this map is certainly accurate in presenting total yearly numbers,
                it does very little to highlight the epidemic of suicide in the United States.
                <em> Again</em>, these are more than numbers.
                <br /><br />
                <em className="font-semibold text-lg">These are people</em>.
            </p>
        </div>
    </div>
  )
}

export default MapDesc