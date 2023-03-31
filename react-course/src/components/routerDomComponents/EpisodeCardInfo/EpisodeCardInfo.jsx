import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import API from '../../../API'
import cl from './EpisodeCardInfo.module.css'
import {Loader} from '../Loader'

export const EpisodeCardInfo = () => {
  const {episodeId} = useParams()
  const [episode, setEpisode] = useState(null)

  useEffect(() => {
    fetch(API.episodes.getById(episodeId).then((data) => setEpisode(data)))
  }, [episodeId])

  if (episode) {
    return (
      <div className={cl.info}>
        <div className={cl.info__name}>{episode.name}</div>
        <div className={cl.info__data}>
          <div className={cl.data__name}>
            <span>Название</span>: {episode.name}
          </div>
          <div className={cl.data__episode}>
            <span>Эпизод</span>: {episode.episode}
          </div>
          <div className={cl.data__airDate}>
            <span>Дата выхода в эфир</span>: {episode.air_date}
          </div>
          <div className={cl.data__created}>
            <span>Создан</span>: {episode.created}
          </div>
        </div>
      </div>
    )
  } else {
    return <Loader />
  }
}
