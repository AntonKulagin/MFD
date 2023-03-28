import React from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { TaskBlock } from '../UI/taskBlock'
import { MyButton } from '../UI/myButton/myButton'

export const HookLocalStorageComponent = () => {
  const [token, {setItem, removeItem}] = useLocalStorage('token')
  return (
    <TaskBlock>
      <h3>Hook LocalStorage</h3>
      <p>Твой токен: {token}</p>
      <div>
        <MyButton onClick={() => setItem('token')}>Задать токен</MyButton>
        <MyButton onClick={() => removeItem()}>Удалить токен</MyButton>
      </div>
    </TaskBlock>
  )
}
