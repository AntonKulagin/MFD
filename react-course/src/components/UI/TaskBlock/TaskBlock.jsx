import React from 'react'
import cl from './taskBlock.module.css'

const TaskBlock = ({ children, height }) => {
  return (
    <div style={{ minHeight: height }} className={cl.taskBlock}>
      {children}
    </div>
  )
}

export default TaskBlock
