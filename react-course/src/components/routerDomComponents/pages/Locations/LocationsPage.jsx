import React, {useEffect, useState} from 'react'
import API from '../../../../API'
import cl from './locationsPage.module.css'
import {LocationCard} from '../../LocationCard'
import {Loader} from '../../Loader'
import {useSearchParams} from 'react-router-dom'
import {getSortItems} from '../../../../utils/sort'

export const LocationsPage = () => {
  const [locations, setLocations] = useState(null)
  const [sortParams, setSortParams] = useSearchParams({})
  const sort = sortParams.get('sort')

  useEffect(() => {
<<<<<<< HEAD
    fetch(API.location.getAll().then((data) => (sort ? setLocations(getSortItems(data, sort)) : setLocations(data))))
=======
    API.location
      .getAll()
      .then((data) =>
        sort ? setLocations(getSortItems(data, sort)) : setLocations(data),
      )
>>>>>>> 52a2bee (created task context)
  }, [])

  useEffect(() => {
    if (locations) {
      setLocations(getSortItems(locations, sort))
    }
  }, [sortParams])

  const handleSort = () => {
    setSortParams({sort: sort === 'asc' ? 'desc' : 'asc'})
  }

  const getSortClass = () => {
    if (!sort) return
    return sort === 'asc' ? `${cl.asc}` : `${cl.desc}`
  }

  if (locations) {
    return (
      <div className={cl.location}>
        <div className={cl.location__header}>
          <div className={cl.location__title}>Локации</div>
          <button className={getSortClass()} onClick={() => handleSort()}>
            {!sort && 'Сортировка ...'}
          </button>
        </div>

        <div className={cl.location__body}>
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </div>
    )
  } else return <Loader />
}
