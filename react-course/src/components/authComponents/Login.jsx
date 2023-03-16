import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

const Login = () => {
  const handleLogin = (data) => {
    console.log('Отправляем login на бэк: ', data)
  }
  return (
    <div
      style={{
        border: '1px solid #fff',
        padding: '10px',
        margin: '10px',
      }}
    >
      <SignIn onSubmit={handleLogin} />
      <SignUp onSubmit={handleLogin} />
    </div>
  )
}

export default Login
