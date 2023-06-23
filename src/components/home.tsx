import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto px-2">
        <div className="pt-24 h-screen grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex justify-center items-center">
            <p className="text-4xl font-thin text-center">
              Welcome to&nbsp;
              <span className="text-[#075985] font-semibold">
                Humanize It
              </span>
            </p>
          </div>
          <div className="flex justify-center items-center">
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