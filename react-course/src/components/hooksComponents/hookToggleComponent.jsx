import React from 'react'
import {useToggle} from '../../hooks/useToggle'
import {TaskWrapper} from '../UI/taskWrapper'
import {MyButton} from '../UI/myButton/myButton'

export const HookToggleComponent = () => {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal'])
  return (
    <TaskWrapper>
      <h3>Hook Toggle</h3>
      <MyButton onClick={() => toggle()}>{value}</MyButton>
    </TaskWrapper>
  )
}
