import React, {useEffect, useState} from 'react'
import cl from './heroesPage.module.css'
import {HeroCard} from '../../HeroCard'
import API from '../../../../API'
import {Loader} from '../../Loader'
import {useSearchParams} from 'react-router-dom'
import {getSortItems} from '../../../../utils/sort'

export const HeroesPage = () => {
  const [heroes, setHeroes] = useState(null)
  const [sortParams, setSortParams] = useSearchParams({})
  const sort = sortParams.get('sort')

  useEffect(() => {
    API.characters.getAll().then((data) => (sort ? setHeroes(getSortItems(data, sort)) : setHeroes(data)))
  }, [])

  useEffect(() => {
    if (heroes) {
      setHeroes(getSortItems(heroes, sort))
    }
  }, [sortParams])

  const handleSort = () => {
    setSortParams({sort: sort === 'asc' ? 'desc' : 'asc'})
  }

  const getSortClass = () => {
    if (!sort) return
    return sort === 'asc' ? `${cl.asc}` : `${cl.desc}`
  }

  if (heroes) {
    return (
      <div className={cl.heroes}>
        <div className={cl.heroes__header}>
          <div className={cl.heroes__title}>Герои</div>
          <button className={getSortClass()} onClick={() => handleSort()}>
            {!sort && 'Сортировка ...'}
          </button>
        </div>

        <div className={cl.heroes__body}>
          {heroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      </div>
    )
  } else return <Loader />
}
