import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto px-2">
        <div className="pt-24 h-screen grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center items-center space-y-8">
            <p className="text-4xl font-thin text-center">
              Welcome to&nbsp;
              <br />
              <span className="text-[#075985] font-semibold text-5xl">
                Humanize It
              </span>
            </p>
            <p className="text-sm w-2/3 md:w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed lectus vestibulum mattis. Nunc sed velit dignissim sodales ut eu. Suspendisse sed nisi lacus sed viverra tellus. Tempor id eu nisl nunc mi ipsum. Interdum velit laoreet id donec ultrices tincidunt arcu.
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