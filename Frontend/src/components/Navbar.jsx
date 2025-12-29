import React, { useEffect, useRef } from 'react'
import logo from '../assets/logo.png'
import search_icon from '../assets/search_icon.svg'
import bell_icon from '../assets/bell_icon.svg'
import profile_icon from '../assets/profile_img.png'
import { IoIosArrowDropdown } from 'react-icons/io'
import { logout } from '../firbase'

const Navbar = () => {
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        navRef.current.classList.add('bg-black', 'shadow-lg')
      } else {
        navRef.current.classList.remove('bg-black', 'shadow-lg')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handle_click = () => {
    logout();
  }

  return (
    <div
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 px-8 py-4 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between text-white">
        {/* LEFT */}
        <div className="flex items-center gap-8">
          <img className="w-20" src={logo} alt="logo" />

          <ul className="hidden md:flex items-center gap-6">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">TV Shows</li>
            <li className="cursor-pointer">Movies</li>
            <li className="cursor-pointer">New & Popular</li>
            <li className="cursor-pointer">My List</li>
            <li className="cursor-pointer">Browse by Language</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <img className="cursor-pointer" src={search_icon} alt="" />
          <span className="cursor-pointer hidden sm:block">Children</span>
          <img className="cursor-pointer" src={bell_icon} alt="" />

          <div className="relative group flex items-center cursor-pointer">
            <img className="w-8 rounded" src={profile_icon} alt="" />
            <IoIosArrowDropdown />

            <div className="hidden group-hover:block absolute top-8 right-0 bg-black p-2 rounded">
              <p onClick={handle_click} className="whitespace-nowrap">Sign Out from Netflix</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

