import React from 'react'
import cl from './navBar.module.css'
<<<<<<< HEAD
import {NavLink} from 'react-router-dom'

export const NavBar = () => {
=======
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'
import signoutIcon from '../../../assets/icons/signout.png'

const NavBar = () => {
  const auth = useAuth()
  const navigate = useNavigate()

>>>>>>> 52a2bee (created task context)
  const getClass = (isActive) => {
    return isActive ? `${cl.active}` : null
  }

  const handleClick = () => {
    auth.signout(() => {
      navigate('/')
    })
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
        {auth.userEmail && (
          <button className={cl.logout} onClick={handleClick}>
            <img src={signoutIcon} alt="выйти" />
          </button>
        )}
      </div>
    </div>
  )
}
