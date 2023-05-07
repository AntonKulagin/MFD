import React, {forwardRef} from 'react'
import cl from './LocationCard.module.css'
import {Link} from 'react-router-dom'

// eslint-disable-next-line react/display-name
export const LocationCard = forwardRef(({location}, ref) => {
  return (
    <Link to={`${location.id}`}>
      <div ref={ref} className={cl.location__card}>
        <div className={cl.location__name}>{location.name}</div>
      </div>
    </Link>
  )
})
