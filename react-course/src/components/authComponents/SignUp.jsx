import React from 'react'
import { useHandleForm } from '../../hooks/useHandle'
import { Input } from '../UI/input/Input'
import { RadioInput } from '../UI/RadioInput'
import { RadioInputBlock } from '../UI/RadioInput'
import { IconEmail } from '../UI/iconEmail'
import { MyButton } from '../UI/myButton'

const initFields = {
  name: '',
  nick: '',
  email: '',
  gender: '',
  password: '',
  repassword: '',
}

export const SignUp = ({ onSubmit }) => {
  const [fieldsData, handleChange, handleSubmit] = useHandleForm(
    initFields,
    onSubmit,
  )

  return (
    <div>
      <h3>Sign Up</h3>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          value={fieldsData.name}
          type="text"
          name="name"
          placeholder="Имя"
          onChange={handleChange}
        />
        <Input
          value={fieldsData.nick}
          type="text"
          name="nick"
          placeholder="Ник"
          onChange={handleChange}
        />
        <Input
          value={fieldsData.email}
          type="email"
          name="email"
          placeholder="Почта"
          onChange={handleChange}
          icon={<IconEmail size="1.1rem" />}
        />
        <RadioInputBlock title="Пол">
          <RadioInput
            label="Мужчина"
            name="gender"
            value="male"
            checked={fieldsData.gender === 'male'}
            onChange={handleChange}
          />
          <RadioInput
            label="Женщина"
            name="gender"
            value="female"
            checked={fieldsData.gender === 'female'}
            onChange={handleChange}
          />
        </RadioInputBlock>
        <Input
          value={fieldsData.password}
          type="password"
          name="password"
          placeholder="Пароль"
          onChange={handleChange}
        />
        <Input
          value={fieldsData.repassword}
          type="password"
          name="repassword"
          placeholder="Повторите пароль"
          onChange={handleChange}
        />
        <MyButton>Зарегистрироваться</MyButton>
      </form>
    </div>
  )
}
