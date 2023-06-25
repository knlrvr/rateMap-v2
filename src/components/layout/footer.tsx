import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="max-w-5xl mx-auto p-2 text-[#111]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t py-8">
            <div className="text-xs flex flex-col">
              <p>
                For more information about the statistics used,
                visit 
                <Link href="https://www.cdc.gov/suicide/suicide-rates-by-state.html" target="_blank"
                  className="hover:text-blue-400 transition duration-200">
                  &nbsp;cdc.org
                </Link>
              </p>
              <p>
                For more complete statistics, visit
                <Link href="https://www.cdc.gov/suicide/suicide-data-statistics.html" target="_blank"
                  className="hover:text-blue-400 transition duration-200">
                  &nbsp;cdc.org
                </Link> or
                <Link href="https://afsp.org/suicide-statistics/" target="_blank"
                  className="hover:text-blue-400 transition duration-200">
                  &nbsp;afsp.org
                </Link>
              </p>
            </div>
            <div className="text-xs">
              &#42; <em className="underline">Age Adjusted Rates</em> are rates that would have existed if the 
              population under study had the same age distribution as the "standard" population. Therefore, they 
              are summary measures adjusted for differences in age distributions.
            </div>
        </div>
    </div>
  )
}

export default Footer