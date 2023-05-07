import cl from './LocationCardInfo.module.css'
import {useParams} from 'react-router-dom'
import {Loader} from '../Loader'
import {useCategoryById} from '../../../hooks/useCategoryById'

export const LocationCardInfo = () => {
  const {locId} = useParams()

  const {loading, error, itemById: location} = useCategoryById('location', locId)

  return (
    <>
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
      {loading && <Loader />}
      {error && <div className={cl.error}>{error}</div>}
    </>
  )
}
