import React from 'react'
import cl from './episodeCard.module.css'
import { Link } from 'react-router-dom'

const EpisodeCard = ({ episode }) => {
  return (
    <Link to={`${episode.id}`}>
      <div className={cl.episode__card}>
        <div className={cl.episode__name}>{episode.name}</div>
      </div>
    </Link>
  )
}

export default EpisodeCard
