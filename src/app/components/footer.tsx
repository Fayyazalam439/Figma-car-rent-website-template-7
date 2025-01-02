import React from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'

const Jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })
const footer = () => {
  return (
    <div className="flex flex-col bg-white w-full">

      <div className="flex flex-col lg:flex-row items-start gap-6 p-8">
        {/* Intro Section */}
        <div className="flex flex-col gap-6 w-full lg:w-auto">
          <h1 className={`${Jakarta.className} text-[#3563e9] text-4xl font-bold`}>MORENT</h1>
          <p className="text-gray-500 text-center lg:text-left w-[300px]">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

        {/* Lists Section */}
        <div className="flex flex-wrap gap-12 justify-center lg:justify-between w-full lg:w-auto lg:mr-10 relative left-[30rem] ">
          {/* About List */}
          <div>
            <ul className="flex flex-col gap-2">
              <li className="text-xl font-bold">About</li>
              <li className="text-gray-500">How it works</li>
              <li className="text-gray-500">Featured</li>
              <li className="text-gray-500">Partnership</li>
              <li className="text-gray-500">Business Relation</li>
            </ul>
          </div>

          {/* Community List */}
          <div>
            <ul className="flex flex-col gap-2">
              <li className="text-xl font-bold">Community</li>
              <li className="text-gray-500">Events</li>
              <li className="text-gray-500">Blog</li>
              <li className="text-gray-500">Podcast</li>
              <li className="text-gray-500">Invite a friend</li>
            </ul>
          </div>

          {/* Socials List */}
          <div>
            <ul className="flex flex-col gap-2">
              <li className="text-xl font-bold">Socials</li>
              <li className="text-gray-500">Discord</li>
              <li className="text-gray-500">Instagram</li>
              <li className="text-gray-500">Twitter</li>
              <li className="text-gray-500">Facebook</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 px-8 py-4 border-t border-gray-200">
        <div className="text-center lg:text-left">
          <h1 className="font-bold text-sm">©2022 MORENT. All rights reserved</h1>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-end items-center gap-4">
          <h1 className="font-bold text-sm">Privacy & Policy</h1>
          <h1 className="font-bold text-sm">Terms & Condition</h1>
        </div>
      </div>
    </div>



  )
}

export default footer