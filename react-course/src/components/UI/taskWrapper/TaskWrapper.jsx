import React from 'react'
import cl from './taskWrapper.module.css'

export const TaskWrapper = ({children, ...props}) => {
  return (
    <div style={{...props}} className={cl.taskWrapper}>
      {children}
    </div>
  )
}
