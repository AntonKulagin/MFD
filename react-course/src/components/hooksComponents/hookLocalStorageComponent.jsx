import React from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import TaskBlock from '../UI/taskBlock/TaskBlock'

const HookLocalStorageComponent = () => {
  const [token, { setItem, removeItem }] = useLocalStorage('token')
  return (
    <TaskBlock>
      <h3>Hook LocalStorage</h3>
      <p>Твой токен: {token}</p>
      <div>
        <button onClick={() => setItem('token')}>Задать токен</button>
        <button onClick={() => removeItem()}>Удалить токен</button>
      </div>
    </TaskBlock>
  )
}

export default HookLocalStorageComponent
