  import React from 'react'
  import instagram_icon from '../assets/instagram_icon.png'
  import facebook_icon from '../assets/facebook_icon.png'
  import twitter_icon from '../assets/twitter_icon.png'
  import youtube_icon from '../assets/youtube_icon.png'

const Footer = () => {
  return (
    <div className="mt-5">
      <div className="flex gap-4 mt-4">
        <img src={instagram_icon} className="w-8 h-8" alt="Instagram" />
        <img src={facebook_icon} className="w-8 h-8" alt="Facebook" />
        <img src={twitter_icon} className="w-8 h-8" alt="Twitter" />
        <img src={youtube_icon} className="w-8 h-8" alt="YouTube" />
      </div>
<div>
  <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
    <li className="text-sm text-gray-400 hover:underline cursor-pointer">
      Audio and Subtitles
    </li>
    <li className="text-sm text-gray-400 hover:underline cursor-pointer">
      Audio Description
    </li>
    <li className="text-sm text-gray-400 hover:underline cursor-pointer">
      Help Center
    </li>
    <li className="text-sm text-gray-400 hover:underline cursor-pointer">
      Gift Cards
    </li>
    <li className="text-sm text-gray-400 hover:underline cursor-pointer">
      Media Center
    </li>
    <li className="text-sm text-gray-400 hover:underline cursor-pointer">
      Investor Relations
    </li>
    <li className="text-sm text-gray-400 hover:underline cursor-pointer">
      Jobs
    </li>
    <li className="text-sm text-gray-400 hover:underline cursor-pointer">
      Terms of Use
    </li>
    <li className="text-sm text-gray-400 hover:underline cursor-pointer">
      Privacy
    </li>
  </ul>
</div>
      <p className="mt-4 text-sm text-gray-400 text-center">© 2023 Netflix Clone</p>
    </div>
  )
}

export default Footer