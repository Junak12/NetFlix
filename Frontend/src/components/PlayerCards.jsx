import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PlayerCards = ({ title, category }) => {
  const [data, setData] = useState([])
  const navigate = useNavigate()

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(res => setData(res.results || []))
      .catch(err => console.error(err))
  }, [category])

  const handleClick = (id) => {
    window.scrollTo(0, 0)
    navigate(`/movie/${id}`)
  }

  return (
    <div className="relative z-20 mt-6 px-4">
      <h2 className="text-white text-xl font-bold mb-3">
        {title || 'Popular on Netflix'}
      </h2>

      {/* Horizontal scroll container */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {data.map(card => (
          <div
            key={card.id}
            onClick={() => handleClick(card.id)}
            className="
              min-w-[23%]  /* 4 cards visible */
              sm:min-w-[23%]
              cursor-pointer
              group
            "
          >
            {/* Image */}
            <div className="h-36 sm:h-44 rounded-md overflow-hidden bg-gray-800">
              {card.backdrop_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}
            </div>

            {/* Title */}
            <p className="mt-2 text-white text-sm text-center truncate">
              {card.title || card.original_title}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlayerCards
