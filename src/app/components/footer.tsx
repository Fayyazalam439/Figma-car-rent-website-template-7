import React from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'

const Jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })
const footer = () => {
  return (
    <div className="flex flex-col bg-white ">

      <div className="flex flex-col lg:flex-row items-start gap-6 p-8">
        {/* Intro Section */}
        <div className="flex flex-col gap-6 w-[216px] lg:w-auto">
          <h1 className={`${Jakarta.className} text-[#3563e9] text-4xl font-bold`}>MORENT</h1>
          <p className="text-gray-500 text-left w-[216px] lg:w-[300px]">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

        <div className="flex flex-wrap gap-12 w-auto relative left-0 lg:left-[30rem] ">

          <div className='flex space-x-6'>
          <div>
            <ul className="flex flex-col gap-2 w-[142px] lg:w-auto ">
              <li className="text-xl font-bold">About</li>
              <li className="text-gray-500">How it works</li>
              <li className="text-gray-500">Featured</li>
              <li className="text-gray-500">Partnership</li>
              <li className="text-gray-500">Business Relation</li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col gap-2 w-[120px] lg:w-auto ">
              <li className="text-xl font-bold">Socials</li>
              <li className="text-gray-500">Discord</li>
              <li className="text-gray-500">Instagram</li>
              <li className="text-gray-500">Twitter</li>
              <li className="text-gray-500">Facebook</li>
            </ul>
          </div>
          </div>

          <div>
            <ul className="flex flex-col gap-2 w-[142px] lg:w-auto ">
              <li className="text-xl font-bold">Community</li>
              <li className="text-gray-500">Events</li>
              <li className="text-gray-500">Blog</li>
              <li className="text-gray-500">Podcast</li>
              <li className="text-gray-500">Invite a friend</li>
            </ul>
          </div>


        </div>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 px-5 py-4 border-t border-gray-200">
        <div className="text-left items-center flex justify-center order-2 lg:order-1">
          <h1 className="font-bold text-sm">©2022 MORENT. All rights reserved</h1>
        </div>
        <div className="flex flex-wrap justify-between lg:justify-end items-center gap-4 order-1 lg:order-2">
          <h1 className="font-bold text-sm">Privacy & Policy</h1>
          <h1 className="font-bold text-sm">Terms & Condition</h1>
        </div>
      </div>
    </div>




  )
}

export default footer