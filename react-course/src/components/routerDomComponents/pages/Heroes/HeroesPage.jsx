import React, {useCallback, useEffect, useRef, useState} from 'react'
import cl from './heroesPage.module.css'
import {HeroCard} from '../../HeroCard'
import {Loader} from '../../Loader'
import {useSearchParams} from 'react-router-dom'
import {getSortItems} from '../../../../utils/sort'
import {useCategory} from '../../../../hooks/useCategory'
import {ErrorBoundary} from '../../ErrorBoundary'

const CATEGORY = 'character'

export const HeroesPage = () => {
  const [heroes, setHeroes] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [sortParams, setSortParams] = useSearchParams({})
  const sort = sortParams.get('sort')
  const observer = useRef()

  const {loading, error, categoryItems, hasMore} = useCategory(CATEGORY, pageNumber)

  useEffect(() => {
    setHeroes(getSortItems(categoryItems, sort))
  }, [sortParams, categoryItems, sort])

  const handleSort = () => {
    setSortParams({sort: sort === 'asc' ? 'desc' : 'asc'})
  }

  const getSortClass = () => {
    if (!sort) return
    return sort === 'asc' ? `${cl.asc}` : `${cl.desc}`
  }

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

  return (
    <div className={cl.heroes}>
      <div className={cl.heroes__header}>
        <div className={cl.heroes__title}>Герои</div>
        <button className={getSortClass()} onClick={() => handleSort()}>
          {!sort && 'Сортировка ...'}
        </button>
      </div>

      <div className={cl.heroes__body}>
        {heroes.map((hero, index) => {
          if (heroes.length - 7 === index + 1) {
            return <HeroCard key={hero.id} ref={lastNodeRef} hero={hero} />
          } else {
            return <HeroCard key={hero.id} hero={hero} />
          }
        })}
      </div>
      {loading && <Loader />}
      {error}
    </div>
  )
}
