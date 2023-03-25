import React from 'react'
import cl from './flexColumn.module.css'

const FlexColumn = ({ children }) => {
  return <div className={cl.flexColumn}>{children}</div>
}

export default FlexColumn
