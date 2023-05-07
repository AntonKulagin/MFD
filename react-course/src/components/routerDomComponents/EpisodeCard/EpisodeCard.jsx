import React, {forwardRef} from 'react'
import cl from './episodeCard.module.css'
import {Link} from 'react-router-dom'
import {ErrorBoundary} from '../ErrorBoundary'

// eslint-disable-next-line react/display-name
export const EpisodeCard = forwardRef(({episode}, ref) => {
  return (
    <Link to={`${episode.id}`}>
      <div ref={ref} className={cl.episode__card}>
        <div className={cl.episode__name}>{episode.name}</div>
      </div>
    </Link>
  )
})
