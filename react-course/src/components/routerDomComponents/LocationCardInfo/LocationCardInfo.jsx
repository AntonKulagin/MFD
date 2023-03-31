import React, {useEffect, useState} from 'react'
import cl from './LocationCardInfo.module.css'
import {useParams} from 'react-router-dom'
import API from '../../../API'
import {Loader} from '../Loader'

export const LocationCardInfo = () => {
  const {locId} = useParams()
  const [location, setLocation] = useState(null)

  useEffect(() => {
    fetch(API.location.getById(locId).then((data) => setLocation(data)))
  }, [locId])

  if (location) {
    return (
      <div className={cl.info}>
        <div className={cl.info__name}>{location.name}</div>
        <div className={cl.info__data}>
          <div className={cl.data__name}>
            <span>Название</span>: {location.name}
          </div>
          <div className={cl.data__species}>
            <span>Измерение</span>: {location.dimension}
          </div>
          <div className={cl.data__type}>
            <span>Тип</span>: {location.type}
          </div>
          <div className={cl.data__created}>
            <span>Создан</span>: {location.created}
          </div>
        </div>
      </div>
    )
  } else {
    return <Loader />
  }
}
