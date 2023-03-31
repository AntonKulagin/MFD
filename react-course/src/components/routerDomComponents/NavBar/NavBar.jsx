import React from 'react'
import cl from './navBar.module.css'
import {NavLink} from 'react-router-dom'

export const NavBar = () => {
  const getClass = (isActive) => {
    return isActive ? `${cl.active}` : null
  }

  return (
    <div className={cl.navbar}>
      <div className={cl.left}>
        <NavLink className={({isActive}) => getClass(isActive)} to='/'>
          Главная
        </NavLink>
      </div>
      <div className={cl.right}>
        <NavLink className={({isActive}) => getClass(isActive)} to='/heroes'>
          Герои
        </NavLink>
        <NavLink className={({isActive}) => getClass(isActive)} to='/locations'>
          Локации
        </NavLink>
        <NavLink className={({isActive}) => getClass(isActive)} to='/episodes'>
          Эпизоды
        </NavLink>
      </div>
    </div>
  )
}
