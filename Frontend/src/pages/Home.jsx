import React from 'react'
import Hero from '../components/Hero'
import PlayerCards from '../components/PlayerCards'

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <Hero />
      <div className='mt-2 bg-black'>
        <PlayerCards category={'now_playing'} />
        <PlayerCards title={'BlockBuster Movies'} category={'now_playing'} />
        <PlayerCards title={'Only on Netfilx'} category={'popular'} />
        <PlayerCards title={'Upcoming'} category={'top_rated'} />
        <PlayerCards title={'Top pics for you'} category={'upcoming'} />
      </div>

    </div>
  )
}

export default Home
