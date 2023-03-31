import React from 'react'
import {useLocalStorage} from '../../hooks/useLocalStorage'
import {TaskWrapper} from '../UI/taskWrapper'
import {MyButton} from '../UI/myButton/myButton'

export const HookLocalStorageComponent = () => {
  const [token, {setItem, removeItem}] = useLocalStorage('token')
  return (
    <TaskWrapper>
      <h3>Hook LocalStorage</h3>
      <p>Твой токен: {token}</p>
      <div>
        <MyButton onClick={() => setItem('token')}>Задать токен</MyButton>
        <MyButton onClick={() => removeItem()}>Удалить токен</MyButton>
      </div>
    </TaskWrapper>
  )
}
