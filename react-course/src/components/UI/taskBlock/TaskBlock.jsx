import React from 'react'

const TaskBlock = ({ children }) => {
  return (
    <div
      style={{
        border: '1px solid #fff',
        padding: '10px',
        margin: '10px',
      }}
    >
      {children}
    </div>
  )
}

export default TaskBlock
