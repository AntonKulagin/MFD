import React from 'react'
import s from './myButton.module.css'

const MyButton = ({ children, ...props }) => {
  return (
    <button className={s.button} {...props}>
      {children}
    </button>
  )
}

export default MyButton
