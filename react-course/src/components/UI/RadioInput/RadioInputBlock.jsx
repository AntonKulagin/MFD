import React from 'react'
import s from './radioInput.module.css'

const RadioInputBlock = ({ children, title }) => {
  return (
    <div>
      <p className={s.title}>{title}</p>
      {children}
    </div>
  )
}

export default RadioInputBlock
