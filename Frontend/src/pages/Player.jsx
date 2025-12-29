import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import back_arrow_icon from '../assets/back_arrow_icon.png'


const Player = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [video, setVideo] = useState({})
  const [loading, setLoading] = useState(true)

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  // Scroll to top + fetch trailer
  useEffect(() => {
    window.scrollTo(0, 0)

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then(res => res.json())
      .then(res => {
        const trailer =
          res.results?.find(v => v.type === 'Trailer' && v.site === 'YouTube') ||
          res.results?.[0] ||
          {}
        setVideo(trailer)
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [id])

  // Date formatter
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A'
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-6">

      {/* Back button */}
      <img
        src={back_arrow_icon}
        alt="Back"
        className="w-8 h-8 cursor-pointer hover:scale-110 transition mb-6"
        onClick={() => navigate(-1)}
      />

      {/* Video */}
      <div className="max-w-5xl mx-auto aspect-video mb-6">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-400">Loading trailer...</p>
          </div>
        ) : video.key ? (
          <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${video.key}`}
            title="Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-900 rounded-lg">
            <p className="text-gray-400">Trailer not available</p>
          </div>
        )}
      </div>

      {/* Movie Info */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-300">
        <p>
          <span className="block text-white font-semibold">Release Date</span>
          {formatDate(video.published_at)}
        </p>

        <p>
          <span className="block text-white font-semibold">Title</span>
          {video.name || 'N/A'}
        </p>

        <p>
          <span className="block text-white font-semibold">Type</span>
          {video.type || 'N/A'}
        </p>
      </div>
    </div>
  )
}

export default Player
