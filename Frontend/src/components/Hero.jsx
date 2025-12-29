import React from 'react'
import hero_title from '../assets/hero_title.png'
import { CiPlay1 } from 'react-icons/ci'
import { FaInfo } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[url('/assets/hero_banner.jpg')] bg-cover bg-center">
      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/60 to-black"></div>

      {/* Hero content */}
      <div className="absolute top-1/3 left-10 z-10 max-w-xl text-white">
        <img src={hero_title} alt="Hero Title" />
        <p className="mt-5 text-sm sm:text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum rem cumque voluptate eligendi molestias minima...
        </p>
        <div className="flex items-center gap-2 mt-3">
          <button className="bg-white text-black px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-300">
            <CiPlay1 /> Play
          </button>
          <button className="bg-gray-400 bg-opacity-50 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-200">
            <FaInfo /> More Info
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
