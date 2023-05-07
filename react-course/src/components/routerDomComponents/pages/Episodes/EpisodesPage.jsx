import React, {useCallback, useEffect, useRef, useState} from 'react'
import cl from './episodesPage.module.css'
import {EpisodeCard} from '../../EpisodeCard'
import {Loader} from '../../Loader'
import {useSearchParams} from 'react-router-dom'
import {getSortItems} from '../../../../utils/sort'
import {useCategory} from '../../../../hooks/useCategory'

export const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [sortParams, setSortParams] = useSearchParams({})
  const sort = sortParams.get('sort')
  const observer = useRef()

  const {loading, error, categoryItems, hasMore} = useCategory('episode', pageNumber)

  useEffect(() => {
    setEpisodes(getSortItems(categoryItems, sort))
  }, [categoryItems, sort])

  const lastNodeRef = useCallback(
    (node) => {
      if (loading) return
      if (observer.current) {
        observer.current.disconnect()
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1)
        }
      })

      if (node) {
        observer.current.observe(node)
      }
    },
    [loading, hasMore],
  )

  const handleSort = () => {
    setSortParams({sort: sort === 'asc' ? 'desc' : 'asc'})
  }

  const getSortClass = () => {
    if (!sort) return
    return sort === 'asc' ? `${cl.asc}` : `${cl.desc}`
  }

  return (
    <>
      <div className={cl.episodes}>
        <div className={cl.episodes__header}>
          <div className={cl.episodes__title}>Эпизоды</div>
          <button className={getSortClass()} onClick={() => handleSort()}>
            {!sort && 'Сортировка ...'}
          </button>
        </div>

        <div className={cl.episodes__body}>
          {episodes.map((episode, index) => {
            if (episodes.length - 6 === index + 1) {
              return <EpisodeCard ref={lastNodeRef} key={episode.id} episode={episode} />
            } else {
              return <EpisodeCard key={episode.id} episode={episode} />
            }
          })}
        </div>
      </div>
      {loading && <Loader />}
      {error && <div className={cl.error}>{error}</div>}
    </>
  )
}
