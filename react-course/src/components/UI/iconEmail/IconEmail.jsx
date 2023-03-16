import React from 'react'
import icon from '../../../assets/icons/01.png'
import s from './iconEmail.module.css'

const IconEmail = ({ size }) => {
  return (
    <div style={{ width: `${size}` }} className={s.icon}>
      <img width="100%" src={icon} alt="icon" />
    </div>
  )
}

export default IconEmail
