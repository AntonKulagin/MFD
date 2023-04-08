import cl from './HeroCardInfo.module.css'
import {useParams} from 'react-router-dom'
import {Loader} from '../Loader'
import {useCategoryById} from '../../../hooks/useCategoryById'

export const HeroCardInfo = () => {
  const {heroId} = useParams()

  const {loading, error, itemById: hero} = useCategoryById('character', heroId)

  return (
    <>
      <div className={cl.info}>
        <div className={cl.info__image}>
          <img src={hero.image} alt='hero' />
        </div>
        <div className={cl.info__data}>
          <div className={cl.data__name}>
            <span>Имя</span>: {hero.name}
          </div>
          <div className={cl.data__species}>
            <span>Разновидность</span>: {hero.species}
          </div>
          <div className={cl.data__gender}>
            <span>Пол</span>: {hero.gender}
          </div>
          <div className={cl.data__status}>
            <span>Статус</span>: {hero.status}
          </div>
          <div className={cl.data__type}>
            <span>Тип</span>: {hero.type}
          </div>
          <div className={cl.data__created}>
            <span>Создан</span>: {hero.created}
          </div>
        </div>
      </div>
      {loading && <Loader />}
      {error && <div className={cl.error}>{error}</div>}
    </>
  )
}
