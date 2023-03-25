import React from 'react'
import cl from './LocationCard.module.css'
import { Link } from 'react-router-dom'

const LocationCard = ({ location }) => {
  return (
    <Link to={`${location.id}`}>
      <div key={location.id} className={cl.location__card}>
        <div className={cl.location__name}>{location.name}</div>
      </div>
    </Link>
  )
}

export default LocationCard
