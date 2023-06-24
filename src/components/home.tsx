import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto px-2">
        <div className="pt-24 h-screen grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center items-center space-y-12">
            <p className="text-4xl font-thin text-center">
              Welcome to&nbsp;
              <br />
              <span className="text-[#075985] font-semibold text-6xl">
                Humanize It
              </span>
            </p>
            <p className="text-sm w-4/5 md:w-2/3">
              Our goal at <span className="text-[#075985]">Humanize It</span> is to help readers understand statistics related 
              to suicide in the United States. It's easy to read numbers, but it's harder 
              to read people. We <em className="text-orange-400">humanize</em> the numbers.
            </p>
          </div>
          <div className="flex justify-center items-center h-1/2 md:h-full">
            <Image
              src="/logo.png"
              alt=""
              width="1000"
              height="1000"
              className="scale-200"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home