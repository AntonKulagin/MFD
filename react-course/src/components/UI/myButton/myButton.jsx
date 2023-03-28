import React from 'react'
import s from './myButton.module.css'

export const MyButton = ({children, ...props}) => {
  return (
    <button className={s.button} {...props}>
      {children}
    </button>
  )
}
