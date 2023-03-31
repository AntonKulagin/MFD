import React from 'react'
import {SignIn} from './SignIn'
import {SignUp} from './SignUp'
import {TaskBlock} from '../UI/taskBlock'

export const Login = () => {
  const handleLogin = (data) => {
    console.log('Отправляем login на бэк: ', data)
  }
  return (
    <TaskBlock>
      <SignIn onSubmit={handleLogin} />
      <SignUp onSubmit={handleLogin} />
    </TaskBlock>
  )
}
