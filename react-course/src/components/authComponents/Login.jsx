import React from 'react'
import {SignIn} from './SignIn'
import {SignUp} from './SignUp'
import {TaskWrapper} from '../UI/taskWrapper'

export const Login = () => {
  const handleLogin = (data) => {
    console.log('Отправляем login на бэк: ', data)
  }
  return (
    <TaskWrapper>
      <SignIn onSubmit={handleLogin} />
      <SignUp onSubmit={handleLogin} />
    </TaskWrapper>
  )
}
