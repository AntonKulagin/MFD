import React, {useCallback, useEffect, useRef, useState} from 'react'
import cl from './locationsPage.module.css'
import {LocationCard} from '../../LocationCard'
import {Loader} from '../../Loader'
import {useSearchParams} from 'react-router-dom'
import {getSortItems} from '../../../../utils/sort'
import {useCategory} from '../../../../hooks/useCategory'

export const LocationsPage = () => {
  const [locations, setLocations] = useState([])
  const [sortParams, setSortParams] = useSearchParams({})
  const [pageNumber, setPageNumber] = useState(1)
  const sort = sortParams.get('sort')
  const observer = useRef()

  const {loading, error, categoryItems, hasMore} = useCategory('location', pageNumber)

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

  useEffect(() => {
    setLocations(getSortItems(categoryItems, sort))
  }, [categoryItems, sort, sortParams])

  const handleSort = () => {
    setSortParams({sort: sort === 'asc' ? 'desc' : 'asc'})
  }

  const getSortClass = () => {
    if (!sort) return
    return sort === 'asc' ? `${cl.asc}` : `${cl.desc}`
  }

  return (
    <>
      <div className={cl.location}>
        <div className={cl.location__header}>
          <div className={cl.location__title}>Локации</div>
          <button className={getSortClass()} onClick={() => handleSort()}>
            {!sort && 'Сортировка ...'}
          </button>
        </div>

        <div className={cl.location__body}>
          {locations.map((location, index) => {
            if (locations.length - 6 === index + 1) {
              return <LocationCard ref={lastNodeRef} key={location.id} location={location} />
            } else {
              return <LocationCard key={location.id} location={location} />
            }
          })}
        </div>
      </div>
      {loading && <Loader />}
      {error}
    </>
  )
}
