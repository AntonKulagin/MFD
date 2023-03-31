import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import cl from './NotFound404.module.css'

export const NotFound404 = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 1000)
  }, [])

  return <div className={cl.notFound}>NotFound 404</div>
}
