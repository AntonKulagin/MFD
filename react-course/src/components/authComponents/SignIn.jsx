import React from 'react'
import Input from '../UI/input/Input'
import { useHandleForm } from '../../hooks/useHandle'
import IconEmail from '../UI/iconEmail/IconEmail'
import MyButton from '../UI/myButton/myButton'

const initFields = {
  email: '',
  password: '',
}

const SignIn = ({ onSubmit }) => {
  const [fieldsData, handleChange, handleSubmit] = useHandleForm(
    initFields,
    onSubmit,
  )

  return (
    <div>
      <h3>Sign In</h3>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          value={fieldsData.email}
          type="email"
          name="email"
          placeholder="Почта"
          onChange={handleChange}
          icon={<IconEmail size="1.1rem" />}
        />
        <Input
          value={fieldsData.password}
          type="password"
          name="password"
          placeholder="Пароль"
          onChange={handleChange}
        />

        <MyButton>Войти</MyButton>
      </form>
    </div>
  )
}

export default SignIn
