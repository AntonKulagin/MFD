import React, {forwardRef} from 'react'
import cl from './heroCard.module.css'
import {Link} from 'react-router-dom'

// eslint-disable-next-line react/display-name
export const HeroCard = forwardRef(({hero}, ref) => {
  return (
    <Link to={`${hero.id}`}>
      <div ref={ref} className={cl.hero__card}>
        <div className={cl.hero__image}>
          <img src={hero.image} alt='hero' />
        </div>
        <div className={cl.hero__name}>{hero.name}</div>
      </div>
    </Link>
  )
})
