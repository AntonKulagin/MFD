import React, {useEffect, useState} from 'react'
import API from '../../../../API'
import cl from './episodesPage.module.css'
import {EpisodeCard} from '../../EpisodeCard'
import {Loader} from '../../Loader'
import {useSearchParams} from 'react-router-dom'
import {getSortItems} from '../../../../utils/sort'

export const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState(null)
  const [sortParams, setSortParams] = useSearchParams({})
  const sort = sortParams.get('sort')

  useEffect(() => {
    fetch(API.episodes.getAll().then((data) => (sort ? setEpisodes(getSortItems(data, sort)) : setEpisodes(data))))
  }, [])

  useEffect(() => {
    if (episodes) {
      setEpisodes(getSortItems(episodes, sort))
    }
  }, [sort])

  const handleSort = () => {
    setSortParams({sort: sort === 'asc' ? 'desc' : 'asc'})
  }

  const getSortClass = () => {
    if (!sort) return
    return sort === 'asc' ? `${cl.asc}` : `${cl.desc}`
  }

  if (episodes) {
    return (
      <div className={cl.episodes}>
        <div className={cl.episodes__header}>
          <div className={cl.episodes__title}>Эпизоды</div>
          <button className={getSortClass()} onClick={() => handleSort()}>
            {!sort && 'Сортировка ...'}
          </button>
        </div>

        <div className={cl.episodes__body}>
          {episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      </div>
    )
  } else return <Loader />
}
