import React from 'react'
import cl from './loader.module.css'

const Loader = () => {
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

export default Loader
