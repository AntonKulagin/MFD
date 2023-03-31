import React from 'react'
import cl from './taskWrapper.module.css'

export const TaskWrapper = ({children, height}) => {
  return (
    <div style={{minHeight: height}} className={cl.taskWrapper}>
      {children}
    </div>
  )
}
