import {useParams} from 'react-router-dom'
import cl from './EpisodeCardInfo.module.css'
import {Loader} from '../Loader'
import {useCategoryById} from '../../../hooks/useCategoryById'

export const EpisodeCardInfo = () => {
  const {episodeId} = useParams()

  const {loading, error, itemById: episode} = useCategoryById('episode', episodeId)

  return (
    <>
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
      {loading && <Loader />}
      {error && <div className={cl.error}>{error}</div>}
    </>
  )
}
