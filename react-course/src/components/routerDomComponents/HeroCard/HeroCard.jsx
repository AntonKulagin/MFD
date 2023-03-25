import React from 'react'
import cl from './heroCard.module.css'
import { Link } from 'react-router-dom'

const HeroCard = ({ hero }) => {
  return (
    <Link to={`${hero.id}`}>
      <div key={hero.id} className={cl.hero__card}>
        <div className={cl.hero__image}>
          <img src={hero.image} alt="hero" />
        </div>
        <div className={cl.hero__name}>{hero.name}</div>
      </div>
    </Link>
  )
}

export default HeroCard
