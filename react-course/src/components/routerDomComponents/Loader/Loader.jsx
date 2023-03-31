import React from 'react'
import cl from './loader.module.css'

export const Loader = () => {
  return (
    <div className={cl.loaderPosition}>
      <div className={cl.lds_spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
