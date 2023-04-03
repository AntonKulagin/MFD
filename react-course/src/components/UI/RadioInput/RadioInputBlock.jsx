import React from 'react'
import s from './radioInput.module.css'

export const RadioInputBlock = ({children, title}) => {
  return (
    <div>
      <p className={s.title}>{title}</p>
      {children}
    </div>
  )
}
