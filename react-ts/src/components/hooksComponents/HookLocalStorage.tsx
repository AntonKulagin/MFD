import React from 'react'
import {TaskWrapper} from '../ui/taskWrapper'
import {FlexColumn} from '../ui/FlexColumn'
import {Title} from '../ui/Title'
import {useLocalStorage} from '../../hooks/useLocalStorage'
import {MyButton} from '../ui/MyButton'

export const HookLocalStorage = () => {
  const [token, {setItem, removeItem}] = useLocalStorage('token')

  return (
    <TaskWrapper>
      <FlexColumn>
        <Title>HookLocalStorage</Title>
        <p>Твой токен: {token}</p>
        <MyButton onClick={() => setItem('new-token')}>Задать токен</MyButton>
        <MyButton onClick={() => removeItem()}>Удалить токен</MyButton>
      </FlexColumn>
    </TaskWrapper>
  )
}
