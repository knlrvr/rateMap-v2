import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <>
        <div className="max-w-5xl mx-auto px-2">
            <div className="py-36 md:h-screen grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex justify-center items-center">
                    <Image 
                        src="/talks.png"
                        alt=""
                        width="1000"
                        height="1000"
                        className=""
                    />
                </div>
                <div className="flex justify-center items-center p-8 rounded-lg bg-gray-100 shadow-md">
                    <p className="font-light text-lg">
                        Suicide is a vastly complex issue influenced by numerous interconnected factors,
                        including <em>mental health</em>, <em>socioeconomic</em>, and <em>cultural</em> factors. Data alone
                        simply <span className="font-medium"> cannot </span> capture the intricate web of 
                        causes and risk factors associated with suicide. Relying solely on statistical data 
                        <em> oversimplifies</em> the problem and leads to incomplete or misleading interpretations. 
                    </p>
                </div>
                <div className="flex justify-center items-center order-2 md:order-1 p-8 rounded-lg bg-gray-100 shadow-md">
                    <p className="font-light text-lg">
                        Statistical data on suicide often lacks the broader context necessary for 
                        a comprehensive understanding. Establishing a causal relationship between factors
                        and suicide is challenging. Statistical correlations alone do not always 
                        imply causation. Without careful consideration of confounding variables or
                        other contextual factors, misinterpretation occurs. 
                    </p>
                </div>
                <div className="flex justify-center items-center order-1 md:order-2">
                    <Image 
                        src="/talks-2.png"
                        alt=""
                        width="1000"
                        height="1000"
                        className=""
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-2">
                <div className="row-span-2 text-lg md:text-3xl font-thin p-4 md:p-8 rounded-lg bg-gray-100 shadow-md">
                    Take a look at the following map displaying the suicide rates for each year from 2017 to 2021. We will 
                    provide no additional context <em>yet</em>.
                </div>
                <div className="border-b"></div>
                <div className=""></div>
            </div>
        </div>
    </>
  )
}

export default About