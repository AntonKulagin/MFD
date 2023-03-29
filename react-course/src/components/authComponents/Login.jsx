import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import TaskBlock from '../UI/TaskBlock/TaskBlock'

const Login = () => {
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

export default Login
